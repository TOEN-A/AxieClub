'use client'

import React, { useState, useEffect } from 'react'
import { Database } from '@/database.types'
import { format } from 'date-fns'
import type { CardsApiResponse, Item } from './source/cards.type'
import Toggle from '@/app/components/toggle'
import CardSection from './cardSection'
import CardsPart from './cartsPart'
import SearchAndReset from './searchAndReset'
import SelectButton from './selectButton'
import { axieClasses } from './source/axieClasses'
import { axieParts } from './source/axieParts'

type News = Database['public']['Tables']['news']['Row']

//IDでJsonファイルをフィルタリングする関数
const filterJson = (cards: Item[], cardsIdList: number[]) => {
  const filtered = cards.filter((card) => cardsIdList.includes(card.id))
  return filtered
}

//平仮名とカタカナの区別をなくす関数
const katakanaRegex: RegExp = /[\u30A1-\u30FA]/g
const toHiragana = (t: string): string =>
  t.replace(katakanaRegex, (x: string) =>
    String.fromCharCode(x.charCodeAt(0) - 0x60),
  )

const CardsList: React.FC<{
  cardsENItems: Item[]
  news: News
}> = ({ cardsENItems, news }) => {
  const cardsJP: CardsApiResponse = require('./source/regularCardsJp.json')
  cardsJP._items.sort((a, b) => a.id - b.id)
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
  const [isCheckedSeazon, setIsCheckedSeazon] = useState(false)
  const url = 'https://ehzxpvbfwwaraguxdmzg.supabase.co'

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
      //日本語と英語のそれぞれで検索＆フィルタリング
      const filteredByKeywordEN = cardsENItems.filter((card) =>
        searchKeyword.every(
          (keyword) =>
            card.name.toLowerCase().includes(keyword.toLowerCase()) ||
            card.description.toLowerCase().includes(keyword.toLowerCase()),
        ),
      )
      const filteredByKeywordJP = cardsJP._items.filter((card) =>
        searchKeyword.every(
          (keyword) =>
            toHiragana(card.name).includes(toHiragana(keyword)) ||
            toHiragana(card.description).includes(toHiragana(keyword)),
        ),
      )

      //IDを抽出
      const filteredByKeywordENId = filteredByKeywordEN.map((item) => item.id)
      const filteredByKeywordJPId = filteredByKeywordJP.map((item) => item.id)

      //IDを結合
      const combinedFilterdItemsId = [
        ...filteredByKeywordENId,
        ...filteredByKeywordJPId,
      ]

      //IDを元にJsonファイルをフィルタリング
      const finalFilteredItems = filterJson(resetItems, combinedFilterdItemsId)

      setFilteredItems(finalFilteredItems)
    } else {
      setFilteredItems(resetItems)
    }
  }, [
    selectedClass,
    selectedPart,
    searchKeyword,
    isChecked,
    cardsENItems,
    cardsJP._items,
    resetItems,
  ])

  //トグルで日⇔英を切替
  const handleToggleENJP = () => {
    setIsChecked((prevChecked) => !prevChecked)
    if (isCheckedSeazon) {
      setIsCheckedSeazon(false)
    }
    const currentFilteredItemsId = filteredItems.map((item) => item.id)
    setFilteredItems(
      filterJson(
        isChecked ? cardsJP._items : cardsENItems,
        currentFilteredItemsId,
      ),
    )
    setResetItems(isChecked ? cardsJP._items : cardsENItems)
  }

  const handleToggleSeazon = () => {
    setIsCheckedSeazon((prevChecked) => !prevChecked)
    if (isChecked) {
      setIsChecked(false)
    }
    const currentFilteredItemsId = filteredItems.map((item) => item.id)
    //cardsJP._itemsからisChangedがtrueのものを抽出
    const filteredBySeazon = cardsJP._items.filter((card) => card.isChanged)
    setFilteredItems(
      filterJson(
        isCheckedSeazon ? cardsJP._items : filteredBySeazon,
        currentFilteredItemsId,
      ),
    )
    setResetItems(isCheckedSeazon ? cardsJP._items : filteredBySeazon)
  }

  //検索のインプットを保存
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  //検索が押されたときにサーチキーワードを保持する
  const handleSearch = () => {
    const inputElement = document.getElementById(
      'search-box',
    ) as HTMLInputElement
    setSearchKeyword(inputElement.value.replace(/　/g, ' ').split(' '))
  }

  //フィルタボタンで押されたボタンの文字列を保持する（ボタンが押されているかの確認）
  const handleClick = (
    option: string,
    handleSelectButton: (buttonValue: string) => void,
  ) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions((prevSelected) =>
        prevSelected.filter((value) => value !== option),
      )
    } else {
      setSelectedOptions((prevSelected) => [...prevSelected, option])
    }
    handleSelectButton(option)
  }

  //リセットボタンを押したとき、全てのステイトをリセットする
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

  //クラスのフィルタボタンが押されたときにフィルタ用のステイトに値を保持
  const handleSelectClass = (buttonValue: string) => {
    const isSelected = selectedClass.includes(buttonValue)

    if (isSelected) {
      setSelectedClass((prevSelected) =>
        prevSelected.filter((value) => value !== buttonValue),
      )
    } else {
      setSelectedClass((prevSelected) => [...prevSelected, buttonValue])
    }
  }

  //パーツのフィルタボタンが押されたときにフィルタ用のステイトに値を保持
  const handleSelectPart = (buttonValue: string) => {
    const isSelected = selectedPart.includes(buttonValue)

    if (isSelected) {
      setSelectedPart((prevSelected) =>
        prevSelected.filter((value) => value !== buttonValue),
      )
    } else {
      setSelectedPart((prevSelected) => [...prevSelected, buttonValue])
    }
  }

  return (
    <>
      <div className="absolute top-[72px] right-0 m-4">
        <Toggle
          isChecked={isCheckedSeazon}
          handleToggle={handleToggleSeazon}
          text="S6で変更されたカードのみ表示(日本語限定)"
        />
      </div>
      <div className="absolute top-[100px] right-0 m-4">
        <Toggle
          isChecked={isChecked}
          handleToggle={handleToggleENJP}
          text="日本語/英語 切替"
        />
      </div>
      <div className="flex justify-center">
        <div className="pt-24 mb-64 max-w-[1500px]">
          <div className="flex justify-center items-center gap-1">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-sans font-bold mb-1">
                ORIGINS {news.title}
              </h1>
              <p className="text-gray-600 mb-4">
                <strong className="mr-2">更新日:</strong>
                {news && format(new Date(news.updated_at), 'yyyy-MM-dd')}
              </p>
            </div>
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
                  filteredByPart.some((part) => part.part === card.partType),
              ),
            )
            .map((axieClass) => (
              <CardSection
                key={axieClass.class}
                axieClass={axieClass}
                url={url}
              >
                {filteredByPart
                  .filter((part) =>
                    filteredItems.some(
                      (card) =>
                        card.partClass === axieClass.class &&
                        part.part === card.partType,
                    ),
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
      </div>
    </>
  )
}

export default CardsList
