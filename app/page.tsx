import NewsList from './components/newsAndUpdatedList'
import TopPage from './components/topPage'
import { Suspense } from 'react'
import Spinner from './components/sample/spinner'
// import RefreshBtn from './components/refresh-btn'

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center h-screen">
        <Suspense fallback={<Spinner color="border-blue-500" />}>
          <TopPage />
          {/* @ts-expect-error Async Server Component */}
          <NewsList />
        </Suspense>
        {/* <RefreshBtn /> */}
      </div>
    </main>
  )
}
