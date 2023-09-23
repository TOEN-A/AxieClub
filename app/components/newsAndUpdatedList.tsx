import type { Database } from '../../database.types'
import { format } from 'date-fns'
import Link from 'next/link'

type news = Database['public']['Tables']['news']['Row']

export async function fetchNews() {
  const res = await fetch(`${process.env.url}/rest/v1/news?select=*&order=created_at.desc`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    //cache: 'no-store',
    next: { revalidate: 3600 },
    // cache: 'force-cache'
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }
  const news: news[] = await res.json()
  return news
}

export default async function newsList() {
  const news = await fetchNews()
  return (
    <div className="max-w-xl mx-auto px-4 py-8 border border-gray-400 shadow-md rounded-lg p-4">
      <h1 className="text-xl md:text-2xl text-gray-800 font-bold mb-3 md:mb-4">最新記事</h1>
      <ul className="grid gap-4">
        {news.slice(0, 3).map((news) => (
          <li key={news.id} className="border p-4 rounded-lg shadow-md">
            <Link href={news.link} className="text-[1.1rem] md:text-xl text-gray-800 font-semibold">{news.title}</Link>
            <p className="text-[1.2rem] md:text-xl text-gray-600">
              <strong className="text-[0.7rem] md:text-[0.9rem] mr-2">更新日時:{news && format(new Date(news.updated_at), 'yyyy-MM-dd HH:mm:ss')}</strong>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
