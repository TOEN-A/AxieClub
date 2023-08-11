'use client'

import React, { useState, useEffect } from 'react'
// import Image from 'next/image'
import type { CardsApiResponse, Item } from './source/cards.type'
import Toggle from '@/app/components/toggle'
import CardSection from './cardSection'
import CardsPart from './cartsPart'
import SearchAndReset from './searchAndReset'
import SelectButton from './selectButton'
import { cardsIdList } from './source/cardsIdList'

type JsonData = {
  [key: string]: string
}

const filterJson = (cards: Item[], cardsIdList: number[]) => {
  const filtered = cards.filter((card) => cardsIdList.includes(card.id))
  return filtered
}

const katakanaRegex: RegExp = /[\u30A1-\u30FA]/g
const toHiragana = (t: string): string =>
  t.replace(katakanaRegex, (x: string) =>
    String.fromCharCode(x.charCodeAt(0) - 0x60)
  )

const CardsList: React.FC<{
  cardsEN: CardsApiResponse
}> = ({ cardsEN }) => {
  const axieClasses: JsonData[] = require('./source/class.json')
  const axieParts: JsonData[] = require('./source/parts.json')
  const cardsJP: CardsApiResponse = require('./source/regularCardsJp.json')
  cardsJP._items.sort((a, b) => a.id - b.id)
  const cardsENItems = filterJson(cardsEN._items, cardsIdList)
  cardsENItems.sort((a, b) => a.id - b.id)
  const [selectedClass, setSelectedClass] = useState<string[]>([])
  const [filteredByClass, setFilteredByClass] = useState(axieClasses)
  const [selectedPart, setSelectedPart] = useState<string[]>([])
  const [filteredByPart, setFilteredByPart] = useState(axieParts)
  const [inputText, setInputText] = useState<string>('')
  const [searchKeyword, setSearchKeyword] = useState<string[]>([])
  const [filteredItems, setFilteredItems] = useState(cardsJP._items)
  const [resetItems, setResetItems] = useState(cardsJP._items)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [isChecked, setIsChecked] = useState(false)
  const url = 'https://ehzxpvbfwwaraguxdmzg.supabase.co'

  const handleToggle = () => {
    setIsChecked((prevChecked) => !prevChecked)
    const currentFilteredItemsId = filteredItems.map((item) => item.id)
    setFilteredItems(
      filterJson(
        isChecked ? cardsJP._items : cardsENItems,
        currentFilteredItemsId
      )
    )
    setResetItems(isChecked ? cardsJP._items : cardsENItems)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  const handleSearch = () => {
    const inputElement = document.getElementById(
      'search-box'
    ) as HTMLInputElement
    setSearchKeyword(inputElement.value.replace(/　/g, ' ').split(' '))
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
    setSearchKeyword([])
    setFilteredByClass(axieClasses)
    setFilteredItems(resetItems)
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
    const filteredClass =
      selectedClass && selectedClass.length > 0
        ? axieClasses.filter((c) => selectedClass.includes(c.jpClass))
        : axieClasses

    // パーツのフィルタリング
    const filteredPart =
      selectedPart && selectedPart.length > 0
        ? axieParts.filter((part) => selectedPart.includes(part.jpPart))
        : axieParts

    // フィルタリングされた結果をセット
    setFilteredByClass(filteredClass)
    setFilteredByPart(filteredPart)

    // キーワードのフィルタリング

    if (searchKeyword.length > 0) {
      const filteredByKeywordEN = cardsENItems.filter((card) =>
        searchKeyword.every(
          (keyword) =>
            card.name.toLowerCase().includes(keyword.toLowerCase()) ||
            card.description.toLowerCase().includes(keyword.toLowerCase())
        )
      )

      const filteredByKeywordJP = cardsJP._items.filter((card) =>
        searchKeyword.every(
          (keyword) =>
            toHiragana(card.name).includes(toHiragana(keyword)) ||
            toHiragana(card.description).includes(toHiragana(keyword))
        )
      )

      const filteredByKeywordENId = filteredByKeywordEN.map((item) => item.id)
      const filteredByKeywordJPId = filteredByKeywordJP.map((item) => item.id)

      const combinedFilterdItemsId = [
        ...filteredByKeywordENId,
        ...filteredByKeywordJPId,
      ]

      const finalFilteredItems = filterJson(
        isChecked ? cardsENItems : cardsJP._items,
        combinedFilterdItemsId
      )

      setFilteredItems(finalFilteredItems)
    } else {
      setFilteredItems(isChecked ? cardsENItems : cardsJP._items)
    }
  }, [selectedClass, selectedPart, searchKeyword])

  return (
    <>
      <Toggle
        isChecked={isChecked}
        handleToggle={handleToggle}
        text="日本語/英語 切替"
      />
      <div className="pt-16">
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
    </>
  )
}

export default CardsList
