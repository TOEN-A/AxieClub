import { Suspense } from 'react'
import Spinner from '../components/sample/spinner'
import CardsList from './components/cardsList'

export default function CardsPage() {
  return (
    <div className="text-center">
      <Suspense fallback={<Spinner color="border-blue-500" />}>
        {/* @ts-expect-error Async Server Component */}
        <CardsList />
      </Suspense>
      <div className="my-5 flex justify-center"></div>
    </div>
  )
}
