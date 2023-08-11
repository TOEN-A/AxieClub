'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import type { CardsApiResponse } from './source/cards.type'
import CardSection from './cardSection'
import CardsPart from './cartsPart'
import SearchAndReset from './searchAndReset'
import SelectButton from './selectButton'

interface JsonData {
  [key: string]: string
}

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

export default function CardsList() {
  const axieClasses: JsonData[] = require('./source/class.json')
  const axieParts: JsonData[] = require('./source/parts.json')
  const cardsDev: CardsApiResponse = require('./source/regularCards.json')
  const [selectedClass, setSelectedClass] = useState<string[]>([])
  const [filteredByClass, setFilteredByClass] = useState(axieClasses)
  const [selectedPart, setSelectedPart] = useState<string[]>([])
  const [filteredByPart, setFilteredByPart] = useState(axieParts)
  const [inputText, setInputText] = useState<string>('')
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const [filteredItems, setFilteredItems] = useState(cardsDev._items)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const url = 'https://ehzxpvbfwwaraguxdmzg.supabase.co'
  // const cards = await fetchCards();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  const handleSearch = () => {
    const inputElement = document.getElementById(
      'search-box'
    ) as HTMLInputElement
    setSearchKeyword(inputElement.value)
  }

  const handleClick = (
    option: string,
    handleSelectButton: (buttonValue: string) => void
  ) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions((prevSelected) =>
        prevSelected.filter((value) => value !== option)
      )
    } else {
      setSelectedOptions((prevSelected) => [...prevSelected, option])
    }
    handleSelectButton(option)
  }

  const handleReset = () => {
    setSearchKeyword('')
    setFilteredByClass(axieClasses)
    setFilteredItems(cardsDev._items)
    setFilteredByPart(axieParts)
    setSelectedClass([])
    setSelectedPart([])
    setSelectedOptions([])
    setInputText('')
  }

  const handleSelectClass = (buttonValue: string) => {
    const isSelected = selectedClass.includes(buttonValue)

    if (isSelected) {
      setSelectedClass((prevSelected) =>
        prevSelected.filter((value) => value !== buttonValue)
      )
    } else {
      setSelectedClass((prevSelected) => [...prevSelected, buttonValue])
    }
  }

  const handleSelectPart = (buttonValue: string) => {
    const isSelected = selectedPart.includes(buttonValue)

    if (isSelected) {
      setSelectedPart((prevSelected) =>
        prevSelected.filter((value) => value !== buttonValue)
      )
    } else {
      setSelectedPart((prevSelected) => [...prevSelected, buttonValue])
    }
  }

  useEffect(() => {
    // クラスのフィルタリング
    const filteredByClass =
      selectedClass && selectedClass.length > 0
        ? axieClasses.filter((c) => selectedClass.includes(c.jpClass))
        : axieClasses

    // パーツのフィルタリング
    const filteredByPart =
      selectedPart && selectedPart.length > 0
        ? axieParts.filter((part) => selectedPart.includes(part.jpPart))
        : axieParts

    // キーワードのフィルタリング
    const filteredItems = searchKeyword
      ? cardsDev._items.filter(
          (card) =>
            card.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            card.description.toLowerCase().includes(searchKeyword.toLowerCase())
        )
      : cardsDev._items

    // フィルタリングされた結果をセット
    setFilteredByClass(filteredByClass)
    setFilteredByPart(filteredByPart)
    setFilteredItems(filteredItems)
  }, [selectedClass, selectedPart, searchKeyword])

  return (
    <div className="py-8">
      <div className="flex justify-center items-center gap-1 mb-4">
        {/* <Image
          src={`${url}/storage/v1/object/public/images/mediaKit/ThankYou.png`}
          className="w-20 h-[auto] md:w-32 md:h-[auto] lg:w-36 lg:h-[auto] mr-[3%]"
          height={150}
          width={150}
          alt={'煽りアイコン'}
        /> */}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold">
            ORIGINS カード一覧
          </h1>
        </div>
        {/* <Image
          src={`${url}/storage/v1/object/public/images/mediaKit/Bark.png`}
          className="w-24 h-[auto] md:w-32 md:h-[auto] lg:w-36 lg:h-[auto] ml-[3%]"
          height={150}
          width={150}
          alt={'キレアイコン'}
        /> */}
      </div>
      <SearchAndReset
        handleSearch={handleSearch}
        handleReset={handleReset}
        inputText={inputText}
        handleInputChange={handleInputChange}
      />
      <div>
        <SelectButton
          options={axieClasses.map((c) => c.jpClass)}
          handleSelectButton={handleSelectClass}
          selectedOptions={selectedOptions}
          handleClick={handleClick}
        />
      </div>
      <div>
        <SelectButton
          options={axieParts.map((part) => part.jpPart)}
          handleSelectButton={handleSelectPart}
          selectedOptions={selectedOptions}
          handleClick={handleClick}
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
