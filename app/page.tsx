import NewsList from './components/newsAndUpdatedList'
import TopPage from './components/topPage'
import { Suspense } from 'react'
import Spinner from './components/spinner'
// import RefreshBtn from './components/refresh-btn'

export default function Page() {
  return (
    <main>
      <div className="m-10 mt-28 text-center h-screen">
          <TopPage />
          {/* @ts-expect-error Async Server Component */}
          <NewsList />
      </div>
    </main>
  )
}
