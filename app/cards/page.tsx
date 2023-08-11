import { Suspense } from 'react'
import Spinner from '../components/sample/spinner'
import CardsList from './components/cardsList'
import { CardsApiResponse } from './components/source/cards.type'

async function fetchCards() {
  // await new Promise((resolve) => setTimeout(resolve, 2000))
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

  return (
    <div className="text-center">
      <Suspense fallback={<Spinner color="border-blue-500" />}>
        <CardsList cardsEN={cardsEN} />
      </Suspense>
      <div className="my-5 flex justify-center"></div>
    </div>
  )
}
