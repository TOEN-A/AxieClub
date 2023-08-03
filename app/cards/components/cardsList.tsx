'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import type { CardsApiResponse } from './source/cards.type'
import type { AxieClass } from './source/class.type'
import type { AxieParts } from './source/parts.type'
import DropdownList from './dropDownList'
import CardSection from './cardSection'
import CardsPart from './cartsPart'

// async function fetchCards() {
//   // await new Promise((resolve) => setTimeout(resolve, 2000))
//   const res = await fetch(
//     'https://api-gateway.skymavis.com/origins/v2/community/cards',
//     {
//       headers: new Headers({
//         'X-API-Key': 'bvFGDxIjma8Lkk8dmnvGi5ONraerFaEe',
//       }),
//       //cache: 'no-store',
//       //next: { revalidate: 10 },
//       cache: 'force-cache',
//     }
//   )
//   if (!res.ok) {
//     throw new Error('Failed to fetch data in server');
//   }
//   const cards: CardsApiResponse = await res.json();
//   return cards;
// }

export default async function CardsList() {
  const axieClasses: AxieClass[] = require('./source/class.json')
  const axieParts: AxieParts[] = require('./source/parts.json')
  const cardsDev: CardsApiResponse = require('./source/regularCards.json')
  const [selectedClass, setSelectedClass] = useState<string>('')
  const [filteredByClass, setFilteredByClass] = useState(axieClasses)
  const [selectedPart, setSelectedPart] = useState<string>('')
  const [filteredByPart, setFilteredByPart] = useState(axieParts)
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const [filteredItems, setFilteredItems] = useState(cardsDev._items)
  const url = 'https://ehzxpvbfwwaraguxdmzg.supabase.co'

  // const cards = await fetchCards();

  const handleSearch = () => {
    const inputElement = document.getElementById(
      'search-box'
    ) as HTMLInputElement
    setSearchKeyword(inputElement.value)
  }

  const handleReset = () => {
    setFilteredByClass(axieClasses)
    setFilteredItems(cardsDev._items)
    setFilteredByPart(axieParts)
  }

  const handleSelectClass = (value: string) => {
    setSelectedClass(value)
  }

  const handleSelectPart = (value: string) => {
    setSelectedPart(value)
  }

  useEffect(() => {
    if (selectedClass) {
      const filtered = axieClasses.filter((c) => c.jpClass === selectedClass)
      setFilteredByClass(filtered)
    } else {
      setFilteredByClass(axieClasses)
    }
  }, [selectedClass])

  useEffect(() => {
    if (selectedPart) {
      const filtered = axieParts.filter((part) => part.jpPart === selectedPart)
      setFilteredByPart(filtered)
    } else {
      setFilteredByPart(axieParts)
    }
  }, [selectedPart])

  useEffect(() => {
    if (searchKeyword) {
      const filtered = cardsDev._items.filter(
        (card) =>
          card.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          card.description.toLowerCase().includes(searchKeyword.toLowerCase())
      )
      setFilteredItems(filtered)
    } else {
      setFilteredItems(cardsDev._items)
      setFilteredByPart(axieParts)
    }
  }, [searchKeyword])

  return (
    <div className="py-8">
      <div className="flex justify-center items-end">
        <Image
          src={`${url}/storage/v1/object/public/images/mediaKit/ThankYou.png`}
          className="w-28 h-[auto] md:w-32 md:h-[auto] lg:w-36 lg:h-[auto] mr-4"
          height={150}
          width={150}
          alt={'煽りアイコン'}
        />
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            カード一覧
          </h1>
          <div>
            <input
              type="text"
              id="search-box"
              className="text-xs md:text-sm lg:text-base w-32 md:w-52 lg:w-72 px-4 py-2 border border-gray-400 rounded-lg flex-1"
              placeholder="カード名またはカード説明"
            />
            <button
              className="text-xs md:text-sm lg:text-base w-12 md:w-16 lg:w-24 px-0 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
              onClick={handleSearch}
            >
              検索
            </button>
            <button
              className="text-xs md:text-sm lg:text-base w-12 md:w-16 lg:w-24 px-0 py-2 bg-gray-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
              onClick={handleReset}
            >
              リセット
            </button>
          </div>
          <div>
            <DropdownList
              text="クラス"
              options={axieClasses.map((option) => option.jpClass)}
              onSelect={handleSelectClass}
            />
            <DropdownList
              text="パーツ"
              options={axieParts.map((option) => option.jpPart)}
              onSelect={handleSelectPart}
            />
          </div>
        </div>
        <Image
          src={`${url}/storage/v1/object/public/images/mediaKit/Bark.png`}
          className="w-28 h-[auto] md:w-32 md:h-[auto] lg:w-36 lg:h-[auto] mr-4"
          height={150}
          width={150}
          alt={'キレアイコン'}
        />
      </div>
      {filteredByClass
        .filter((axieClass) =>
          filteredItems.some(
            (card) =>
              card.partClass === axieClass.class &&
              filteredByPart.some((part) => part.part === card.partType)
          )
        )
        .map((axieClass) => (
          <CardSection key={axieClass.class} axieClass={axieClass} url={url}>
            {filteredByPart
              .filter((part) =>
                filteredItems.some(
                  (card) =>
                    card.partClass === axieClass.class &&
                    part.part === card.partType
                )
              )
              .map((part) => (
                <CardsPart
                  key={part.part}
                  part={part}
                  cards={filteredItems}
                  axieClass={axieClass}
                  url={url}
                />
              ))}
          </CardSection>
        ))}
    </div>
  )
}
