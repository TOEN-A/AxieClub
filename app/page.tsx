import NewsList from './components/newsAndUpdatedList'
import TopPage from './components/topPage'
import { Suspense } from 'react'
import Spinner from './components/sample/spinner'
import { styles } from './styles'
// import RefreshBtn from './components/refresh-btn'

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center h-screen">
        <Suspense fallback={<Spinner color="border-blue-500" />}>
          <div
            className={`${styles.paddingX} absolute inset-0 
        top-[120px] max-w-7xl mx-auto`}
          >
            <TopPage />
            {/* @ts-expect-error Async Server Component */}
            <NewsList />
          </div>
        </Suspense>
      </div>
    </main>
  )
}
