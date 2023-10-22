'use client'

import Link from 'next/link'
import { ImTwitter } from 'react-icons/im'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { useState } from 'react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHover, setIsHover] = useState(false)
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 p-4 top-0 fixed w-full z-10">
      <nav className="flex items-center space-x-4 pl-4 lg:pl-44">
        <Link href="/">
          <p className="text-white text-[13px] md:text-[18px] font-bold cursor-pointer flex hover:opacity-75">
            Axie&nbsp;| 日本語まとめサイト(仮)
          </p>
        </Link>
        <div className="dropdown dropdown-hover">
          <label
            tabIndex={0}
            className="text-white text-[12px] md:text-[15px] btn btn-ghost rounded-btn pl-0 lg:pl-4"
            onMouseEnter={() => {
              setIsOpen(true)
              setIsHover(true)
            }}
            onMouseLeave={() => setIsHover(false)}
          >
            Origins
            {isHover ? (
              <BiChevronUp color="white" />
            ) : (
              <BiChevronDown color="white" />
            )}
          </label>
          {isOpen ? (
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-gray-200 rounded-box w-32"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onClick={() => {
                setIsOpen(false)
                setIsHover(false)
              }}
            >
              <li>
                <Link
                  href="/axieinfinity/cards"
                  className=" py-2 text-black hover:opacity-75"
                >
                  カード
                </Link>
              </li>
              <li>
                <Link
                  href="/axieinfinity/runes"
                  className=" py-2 text-black hover:opacity-75"
                >
                  ルーン
                </Link>
              </li>
              <li>
                <Link
                  href="/axieinfinity/charms"
                  className=" py-2 text-black hover:opacity-75"
                >
                  チャーム
                </Link>
              </li>
            </ul>
          ) : (
            <></>
          )}
        </div>

        <div className="flex absolute right-4 lg:right-44 top-[18px]">
          <Link
            href={'https://twitter.com/TOENBCG1'}
            className="flex rounded-full bg-blue-400 px-2 py-2 text-white hover:bg-blue-500 cursor-pointer shadow-md "
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImTwitter size={24} />
            <p className="text-white ml-1 sm:block hidden">
              TOEN&apos;s Twitter
            </p>
          </Link>
        </div>
      </nav>
    </header>
  )
}
