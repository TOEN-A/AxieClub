'use client'

import { ImTwitter } from 'react-icons/im'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Float,
  OrbitControls,
  PresentationControls,
  useGLTF,
  Text,
  ContactShadows,
  Html,
  Box,
  SoftShadows,
} from '@react-three/drei'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../../public/assets'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

interface FramePosition {
  left: number
  top: number
}

export default function NavBar() {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <BrowserRouter>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed
         top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('')
              window.scrollTo(0, 0)
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Axie &nbsp;
              <span className="sm:block hidden">| 日本語サイト</span>
            </p>
          </Link>
          <div className="list-none hidden sm:flex flex-row gap-5">
            {navLinks.map((link) => (
              <details key={link.id} className="dropdown">
                <summary className="btn text-white bg-primary hover:bg-gray-800">
                  {link.title}
                  <BiChevronDown color="white" />
                </summary>
                <div className="flex p-6 black-gradient absolute top-14 left-0 min-w-[140px] z-10 rounded-xl">
                  <ul className="list-none flex justify-end items-start flex-col gap-2">
                    {link.infomations?.map((info) => (
                      <li
                        key={info.title}
                        className={`${
                          active === info.title
                            ? 'text-white'
                            : 'text-secondary'
                        } hover:text-white text-[18px] font-medium cursor-pointer `}
                        onClick={() => setActive(info.title)}
                      >
                        <a href={`/${info.link}`}>{info.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? 'hidden' : 'flex'
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? 'text-white' : 'text-secondary'
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setActive(link.title)
                      setToggle(!toggle)
                    }}
                  >
                    <a href={`/${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </BrowserRouter>
  )
}
