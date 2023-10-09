import type { RunesApiResponse, Rune } from './models/runes.type'
import { Database } from '@/database.types'
import { fetchNews } from '@/app/components/newsAndUpdatedList'
import RunesList from './components/runesList'
type News = Database['public']['Tables']['news']['Row']

const filterJson = (runes: Rune[]) => {
  const filtered = runes.filter((rune) => rune.item.id.includes('s6'))
  return filtered
}

async function fetchRunes() {
  const res = await fetch(
    'https://api-gateway.skymavis.com/origins/v2/community/runes',
    {
      headers: new Headers({
        'X-API-Key': 'bvFGDxIjma8Lkk8dmnvGi5ONraerFaEe',
      }),
      //cache: 'no-store',
      next: { revalidate: 3600 },
      // cache: 'force-cache',
    },
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }
  const gottonRunes: RunesApiResponse = await res.json()
  return gottonRunes
}

const RunesPage = async () => {
  const runesENResponse = await fetchRunes()
  const news = (await fetchNews()).find(
    (item) => item.id === '19cdb6bc-b2ce-4500-b0d8-8516e4047640',
  ) as News
  const runesEN = filterJson(runesENResponse._items)
  return (
    <div className="m-10 mt-28 text-center h-screen">
      <RunesList runesEN={runesEN} news={news}/>
    </div>
  )
}

export default RunesPage
