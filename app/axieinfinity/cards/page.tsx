import { Suspense } from 'react'
import { Database } from '@/database.types'
import Spinner from '@/app/components/sample/spinner'
import CardsList from './components/cardsList'
import { CardsApiResponse, Item } from './components/source/cards.type'
import { fetchNews } from '@/app/components/newsAndUpdatedList'
import { cardsIdList } from './components/source/cardsIdList'

type News = Database['public']['Tables']['news']['Row']

export const metadata = {
  title: 'アクシーインフィニティオリジンズ(AxieInfinityOrigins)のカード一覧',
  description: 'S5最新のカード情報',
}

const filterJson = (cards: Item[], cardsIdList: number[]) => {
  const filtered = cards.filter((card) => cardsIdList.includes(card.id))
  return filtered
}

async function fetchCards() {
  const res = await fetch(
    'https://api-gateway.skymavis.com/origins/v2/community/cards',
    {
      headers: new Headers({
        'X-API-Key': 'bvFGDxIjma8Lkk8dmnvGi5ONraerFaEe',
      }),
      //cache: 'no-store',
      //next: { revalidate: 10 },
      cache: 'force-cache',
    }
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }
  const gottonCards: CardsApiResponse = await res.json()
  return gottonCards
}

export default async function CardsPage() {
  const cardsEN = await fetchCards()
  const news = (await fetchNews()).find((item) => item.id === "19cdb6bc-b2ce-4500-b0d8-8516e4047640") as News
  const cardsENItems = filterJson(cardsEN._items, cardsIdList)


  return (
    <div className="text-center">
      <Suspense fallback={<Spinner color="border-blue-500" />}>
        <CardsList cardsENItems={cardsENItems} news={news} />
      </Suspense>
      <div className="my-5 flex justify-center"></div>
    </div>
  )
}
