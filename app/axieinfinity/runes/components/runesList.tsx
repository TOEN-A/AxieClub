'use client'

import React, { useEffect } from 'react'
import { Rune } from '../models/runes.type'
import { Database } from '@/database.types'
import format from 'date-fns/format'
import { FadeInSlideUp } from '@/app/motion/fadeInSlideUp'
import ClassFilter from './classFilter'
import RarityFilter from './rarityFilter'
import { useState } from 'react'
import { createContext } from 'react'
import HoverBigCard from '@/app/motion/hoverBigCard'
import RuneInfo from './runeInfo'
import SearchAndReset from '@/app/components/searchAndReset'

type News = Database['public']['Tables']['news']['Row']

export const SelectedOption = createContext<string[]>([])

//平仮名とカタカナの区別をなくす関数
const katakanaRegex: RegExp = /[\u30A1-\u30FA]/g
const toHiragana = (t: string): string =>
  t.replace(katakanaRegex, (x: string) =>
    String.fromCharCode(x.charCodeAt(0) - 0x60)
  )

const RunesList: React.FC<{ runesEN: Rune[]; news: News }> = ({
  runesEN,
  news,
}) => {
  const [filteredRunes, setFilteredRunes] = useState<Rune[]>(runesEN)
  const [resetRunes, setResetRunes] = useState(runesEN)
  const [inputText, setInputText] = useState<string>('')
  const [searchKeyword, setSearchKeyword] = useState<string[]>([])
  const [selectedClasses, setSelectedClasses] = useState<string[]>([])
  const [selectedRarity, setSelectedRarity] = useState<string[]>([])
  console.log(selectedClasses)
  console.log(selectedRarity)
  console.log(runesEN)

  useEffect(() => {
    // キーワードのフィルタリング
    if (searchKeyword.length > 0) {
      //日本語と英語のそれぞれで検索＆フィルタリング
      const filteredByKeywordEN = runesEN.filter((rune) =>
        searchKeyword.every(
          (keyword) =>
            rune.item.name.toLowerCase().includes(keyword.toLowerCase()) ||
            rune.item.description.toLowerCase().includes(keyword.toLowerCase())
        )
      )
      // const filteredByKeywordJP = runesJP._items.filter((rune) =>
      //   searchKeyword.every(
      //     (keyword) =>
      //       toHiragana(rune.item.name).includes(toHiragana(keyword)) ||
      //       toHiragana(rune.item.description).includes(toHiragana(keyword))
      //   )
      // )

      //IDを抽出
      // const filteredByKeywordENId = filteredByKeywordEN.map((item) => item.id)
      // const filteredByKeywordJPId = filteredByKeywordJP.map((item) => item.id)

      //IDを結合
      // const combinedFilterdItemsId = [
      //   ...filteredByKeywordENId,
      //   ...filteredByKeywordJPId,
      // ]

      //IDを元にJsonファイルをフィルタリング
      // const finalFilteredItems = filterJson(resetItems, combinedFilterdItemsId)

      setFilteredRunes(filteredByKeywordEN)
    } else {
      setFilteredRunes(resetRunes)
    }
  }, [searchKeyword, runesEN])

  //検索のインプットを保存
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  //検索が押されたときにサーチキーワードを保持する
  const handleSearch = () => {
    const inputElement = document.getElementById(
      'search-box'
    ) as HTMLInputElement
    setSearchKeyword(inputElement.value.replace(/　/g, ' ').split(' '))
  }

  //リセットボタンを押したとき、全てのステイトをリセットする
  const handleReset = () => {
    setSearchKeyword([])
    setSelectedClasses([])
    setSelectedRarity([])
    setInputText('')
  }

  //クラスのフィルタボタンが押されたときにフィルタ用のステイトに値を保持
  const handleSelectClass = (buttonValue: string) => {
    const isSelected = selectedClasses.includes(buttonValue)

    if (isSelected) {
      setSelectedClasses((prevSelected) =>
        prevSelected.filter((value) => value !== buttonValue)
      )
    } else {
      setSelectedClasses((prevSelected) => [...prevSelected, buttonValue])
    }
  }

  //レアリティのフィルタボタンが押されたときにフィルタ用のステイトに値を保持
  const handleSelectRarity = (buttonValue: string) => {
    const isSelected = selectedRarity.includes(buttonValue)

    if (isSelected) {
      setSelectedRarity((prevSelected) =>
        prevSelected.filter((value) => value !== buttonValue)
      )
    } else {
      setSelectedRarity((prevSelected) => [...prevSelected, buttonValue])
    }
  }

  return (
    <div className="flex justify-center">
      <div className="mb-64 max-w-[1500px]">
        <FadeInSlideUp>
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
            placeholder="ルーン名・説明文で検索"
            handleInputChange={handleInputChange}
          />
        </FadeInSlideUp>
        <div>
          <SelectedOption.Provider value={selectedClasses}>
            <ClassFilter handleSelectButton={handleSelectClass} />
          </SelectedOption.Provider>
        </div>
        <div>
          <SelectedOption.Provider value={selectedRarity}>
            <RarityFilter handleSelectButton={handleSelectRarity} />
          </SelectedOption.Provider>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          {filteredRunes.map((rune, index) => {
            if (
              selectedClasses.length === 0 ||
              selectedClasses.includes(rune.class)
            ) {
              if (
                selectedRarity.length === 0 ||
                selectedRarity.includes(rune.item.rarity)
              ) {
                return (
                  <HoverBigCard key={rune.rune} index={index}>
                    <RuneInfo
                      key={rune.rune}
                      axieClass={rune.class}
                      name={rune.item.name}
                      rarity={rune.item.rarity}
                      season={rune.season.name}
                      description={rune.item.description}
                      imageUrl={rune.item.imageUrl}
                    />
                  </HoverBigCard>
                )
              }
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default RunesList
