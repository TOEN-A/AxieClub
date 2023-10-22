import type { RunesApiResponse, Rune } from './models/IRunes'
import { Database } from '@/database.types'
import { fetchNews } from '@/app/components/newsAndUpdatedList'
import RunesList from './components/runesList'
type News = Database['public']['Tables']['news']['Row']

const filterJson = (runes: Rune[], season: string) => {
  let filtered = runes
    .filter((rune) => rune.season.name.includes(season))
    .filter((rune) => rune.craftable === true)
    // rune.item.nameが重複しているものを削除
    .filter(
      (rune, index, self) =>
        self.findIndex((r) => r.item.name === rune.item.name) === index
    )
    .map(rune => {
      if (rune.item.id.includes('_nft')) {
        rune.item.id = rune.item.id.replace('_nft', '');
      }
      if (rune.rune.includes('_nft')) {
        rune.rune = rune.rune.replace('_nft', '');
      }
      return rune;
    });
  return filtered
}

//レアリティの優先順位を定義
const rarityOrder: { [key: string]: number } = {
  Mystic: 1,
  Epic: 2,
  Rare: 3,
  Common: 4,
}

//クラスの優先順位を定義
const classOrder: { [key: string]: number } = {
  Neutral: 1,
  Bird: 2,
  Aquatic: 3,
  Plant: 4,
  Reptile: 5,
  Beast: 6,
  Bug: 7,
  Dawn: 8,
  Dusk: 9,
  Mech: 10,
}

async function fetchRunes(offset: number) {
  const res = await fetch(
    `https://api-gateway.skymavis.com/origins/v2/community/runes?offset=${offset}&limit=100`,
    {
      headers: new Headers({
        'X-API-Key': 'bvFGDxIjma8Lkk8dmnvGi5ONraerFaEe',
      }),
      //cache: 'no-store',
      next: { revalidate: 3600 },
      // cache: 'force-cache',
    }
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }
  const gottonRunes: RunesApiResponse = await res.json()
  return gottonRunes
}

const fetchAllRunes = async () => {
  let offset = 0
  let allRunes: Rune[] = []

  while (true) {
    try {
      const runesResponse = await fetchRunes(offset)
      const runesEN = runesResponse._items

      // もし取得したデータが空であれば、ループを終了
      if (!runesEN || runesEN.length === 0) {
        break
      }

      allRunes = allRunes.concat(runesEN)
      offset += 100 // 次のページの offset

      // ここで必要に応じて適切な条件でループを終了するか判定できます
    } catch (error) {
      console.error('Failed to fetch runes:', error)
      break
    }
  }

  return allRunes
}

const RunesPage = async () => {
  const news = (await fetchNews()).find(
    (item) => item.id === '9ef7f75e-b5af-4eb3-81fb-000d0da44722'
  ) as News
  const runesEN = await fetchAllRunes()
  const runesENSeason6 = filterJson(runesEN, 'Season 6').sort((a, b) => {
    // 第一の優先順位として Rarity を比較
    const rarityA = a.item.rarity
    const rarityB = b.item.rarity
    const rarityComparison = rarityOrder[rarityA] - rarityOrder[rarityB]

    // 第一の優先順位が同じ場合、第二の優先順位として class を比較
    if (rarityComparison === 0) {
      const classA = a.class
      const classB = b.class
      return classOrder[classA] - classOrder[classB]
    }

    return rarityComparison
  })
  return (
    <div className="m-10 pt-24 text-center h-full">
      <RunesList runesEN={runesENSeason6} news={news} />
    </div>
  )
}

export default RunesPage
