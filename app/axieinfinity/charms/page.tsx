import type { CharmsApiResponse, Charm } from './models/ICharms'
import { Database } from '@/database.types'
import { fetchNews } from '@/app/components/newsAndUpdatedList'
import CharmsList from './components/charmsList'
type News = Database['public']['Tables']['news']['Row']

const filterJson = (charms: Charm[], season: string) => {
  let filtered = charms
    .filter((charm) => charm.season.name.includes(season))
    .filter((charm) => charm.craftable === true)
    // charm.item.nameが重複しているものを削除
    .filter(
      (charm, index, self) =>
        self.findIndex((r) => r.item.name === charm.item.name) === index
    );
    // .map(charm => {
    //   if (charm.item.id.includes('_nft')) {
    //     charm.item.id = charm.item.id.replace('_nft', '');
    //   }
    //   if (charm.charm.includes('_nft')) {
    //     charm.charm = charm.charm.replace('_nft', '');
    //   }
    //   return charm;
    // });
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

async function fetchCharms(offset: number) {
  const res = await fetch(
    `https://api-gateway.skymavis.com/origins/v2/community/charms?offset=${offset}&limit=100`,
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
  const gottonCharms: CharmsApiResponse = await res.json()
  return gottonCharms
}

const fetchAllCharms = async () => {
  let offset = 0
  let allCharms: Charm[] = []

  while (true) {
    try {
      const charmsResponse = await fetchCharms(offset)
      const charmsEN = charmsResponse._items

      // もし取得したデータが空であれば、ループを終了
      if (!charmsEN || charmsEN.length === 0) {
        break
      }

      allCharms = allCharms.concat(charmsEN)
      offset += 100 // 次のページの offset

      // ここで必要に応じて適切な条件でループを終了するか判定できます
    } catch (error) {
      console.error('Failed to fetch charms:', error)
      break
    }
  }

  return allCharms
}

const CharmsPage = async () => {
  const news = (await fetchNews()).find(
    (item) => item.id === '9ef7f75e-b5af-4eb3-81fb-000d0da44722'
  ) as News
  const charmsEN = await fetchAllCharms()
  const charmsENSeason6 = filterJson(charmsEN, 'Season 6').sort((a, b) => {
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
    <div className="mt-10 mb-10 pt-24 text-center h-full">
      <CharmsList charmsEN={charmsENSeason6} news={news} />
    </div>
  )
}

export default CharmsPage