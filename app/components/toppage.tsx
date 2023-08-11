import type { Database } from '../../database.types'
import { format } from 'date-fns'
import Link from 'next/link'

type news = Database['public']['Tables']['news']['Row']

async function fetchnews() {
  // await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch(`${process.env.url}/rest/v1/news?select=*&order=created_at.desc`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    //cache: 'no-store',
    //next: { revalidate: 10 },
    cache: 'force-cache'
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }
  const news: news[] = await res.json()
  return news
}

export default async function newsList() {
  const news = await fetchnews()
  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">最新記事</h1>
      <ul className="grid gap-4">
        {news.slice(0, 3).map((news) => (
          <li key={news.id} className="border p-4 rounded-lg shadow-md">
            <Link href="/cards" className="text-xl font-semibold mb-2">{news.title}</Link>
            <p className="text-gray-600">
              <strong className="mr-2">投稿日時:</strong>
              {news && format(new Date(news.created_at), 'yyyy-MM-dd HH:mm:ss')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
