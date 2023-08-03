import Link from 'next/link'

export default function NavBar() {
  return (
    <header className="bg-gradient-to-r from-gray-600 via-blue-500 to-blue-200 p-4">
      <nav className="flex space-x-4">
        <Link
          href="/"
          className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700 cursor-pointer shadow-md"
        >
          ホーム
        </Link>
        <Link
          href="/cards"
          className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700 cursor-pointer shadow-md"
        >
          カード一覧
        </Link>
        <Link
          href="/auth"
          className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700 cursor-pointer shadow-md"
        >
          Auth with CRUD
        </Link>
      </nav>
    </header>
  )
}
