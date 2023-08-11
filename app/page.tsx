import NewsList from './components/toppage'
import { Suspense } from 'react'
import Spinner from './components/sample/spinner'
import RefreshBtn from './components/refresh-btn'

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center h-screen">
        <Suspense fallback={<Spinner color="border-blue-500" />}>
          {/* @ts-expect-error Async Server Component */}
          <NewsList />
        </Suspense>
        {/* <TimerCounter /> */}
        <RefreshBtn />
      </div>
    </main>
  )
}
