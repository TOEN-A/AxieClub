import type { Database } from '../../database.types'
import { format } from 'date-fns'

type Blog = Database['public']['Tables']['blogs']['Row']

async function fetchBlogs() {
  // await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch(`${process.env.url}/rest/v1/blogs?select=*&order=created_at.desc`, {
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
  const blogs: Blog[] = await res.json()
  return blogs
}

export default async function BlogsList() {
  const blogs = await fetchBlogs()
  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">最新記事</h1>
      <ul className="grid gap-4">
        {blogs.slice(0, 3).map((blog) => (
          <li key={blog.id} className="border p-4 rounded-lg shadow-md">
            <p className="text-xl font-semibold mb-2">{blog.title}</p>
            <p className="text-gray-600">
              <strong className="mr-2">投稿日時:</strong>
              {blog && format(new Date(blog.created_at), 'yyyy-MM-dd HH:mm:ss')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
