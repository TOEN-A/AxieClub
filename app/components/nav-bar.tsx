'use client'

import Link from 'next/link'
import { ImTwitter } from "react-icons/im";

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
          href="/axieinfinity/cards"
          className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700 cursor-pointer shadow-md"
        >
          カード一覧
        </Link>        
        <div className='flex'>
        <Link
          href={'https://twitter.com/TOENBCG1'}
          className="flex rounded-full bg-blue-400 px-2 py-2 text-white hover:bg-blue-500 cursor-pointer shadow-md absolute right-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImTwitter size={24} />
          <p className='text-white ml-1'>
            TOEN's Twitter
          </p>
        </Link>
        
        </div>
      </nav>
    </header>
  )
}
