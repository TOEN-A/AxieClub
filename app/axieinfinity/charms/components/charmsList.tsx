'use client'

import React, { useEffect } from 'react'
import { Charm } from '../models/ICharms'
import { Database } from '@/database.types'
import format from 'date-fns/format'
import { FadeInSlideUp } from '@/app/motion/fadeInSlideUp'
import { useState } from 'react'
import { createContext } from 'react'
import HoverBigCard from '@/app/motion/hoverBigCard'
import SearchAndReset from '@/app/components/searchAndReset'
import { FadeInSlideDown } from '@/app/motion/fadeInSlideDown'
import Toggle from '@/app/components/toggle'
import { axieClasses } from '../models/axieClasses'
import ClassFilter from '../../(shared)/components/classFilter'
import RarityFilter from '../../(shared)/components/rarityFilter'
import Infomation from '../../(shared)/components/infomation'

type News = Database['public']['Tables']['news']['Row']

const charmsJP: Charm[] = require('../models/charmsJP.json')

export const SelectedOption = createContext<string[]>([])

//ルーンの固有情報でJsonファイルをフィルタリングする関数
const filterJson = (charms: Charm[], charmsInfoList: string[]) => {
  const filtered = charms.filter((charm) => charmsInfoList.includes(charm.code))
  return filtered
}

//平仮名とカタカナの区別をなくす関数
const katakanaRegex: RegExp = /[\u30A1-\u30FA]/g
const toHiragana = (t: string): string =>
  t.replace(katakanaRegex, (x: string) =>
    String.fromCharCode(x.charCodeAt(0) - 0x60)
  )

const CharmList: React.FC<{ charmsEN: Charm[]; news: News }> = ({
  charmsEN,
  news,
}) => {
  const [filteredCharms, setFilteredCharms] = useState<Charm[]>(charmsJP)
  const [resetCharms, setResetCharms] = useState(charmsJP)
  const [inputText, setInputText] = useState<string>('')
  const [searchKeyword, setSearchKeyword] = useState<string[]>([])
  const [selectedClasses, setSelectedClasses] = useState<string[]>([])
  const [selectedRarity, setSelectedRarity] = useState<string[]>([])
  const [isChecked, setIsChecked] = useState(false)
  const [isAndroid, setIsAndroid] = useState(false)

  useEffect(() => {
    // ユーザーエージェント文字列を取得
    const userAgent = navigator.userAgent

    // アンドロイド端末でアクセスされたかどうかを判別
    setIsAndroid(/Android/i.test(userAgent))
  }, [])

  useEffect(() => {
    // キーワードのフィルタリング
    if (searchKeyword.length > 0) {
      //日本語と英語のそれぞれで検索＆フィルタリング
      const filteredByKeywordEN = charmsEN.filter((charm) =>
        searchKeyword.every(
          (keyword) =>
            charm.item.name.toLowerCase().includes(keyword.toLowerCase()) ||
            charm.item.description.toLowerCase().includes(keyword.toLowerCase())
        )
      )
      const filteredByKeywordJP = charmsJP.filter((charm) =>
        searchKeyword.every(
          (keyword) =>
            toHiragana(charm.item.name).includes(toHiragana(keyword)) ||
            toHiragana(charm.item.description).includes(toHiragana(keyword))
        )
      )

      //ルーンの固有情報を抽出
      const filteredByKeywordENCharm = filteredByKeywordEN.map(
        (item) => item.code
      )
      const filteredByKeywordJPCharm = filteredByKeywordJP.map(
        (item) => item.code
      )

      //Charmの固有情報を結合
      const combinedFilterdItemsCharm = [
        ...filteredByKeywordENCharm,
        ...filteredByKeywordJPCharm,
      ]

      //ルーンの固有情報を元にJsonファイルをフィルタリング
      const finalFilteredItems = filterJson(
        resetCharms,
        combinedFilterdItemsCharm
      )

      setFilteredCharms(finalFilteredItems)
    } else {
      setFilteredCharms(resetCharms)
    }
  }, [searchKeyword, charmsEN, resetCharms])

  //トグルで日⇔英を切替
  const handleToggleENJP = () => {
    setIsChecked((prevChecked) => !prevChecked)
    const currentFilteredItemsId = filteredCharms.map((item) => item.code)
    setFilteredCharms(
      filterJson(isChecked ? charmsJP : charmsEN, currentFilteredItemsId)
    )
    setResetCharms(isChecked ? charmsJP : charmsEN)
  }

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
    <>
      <div className="absolute top-[72px] right-0 lg:right-44 m-4">
        <FadeInSlideDown>
          <Toggle
            isChecked={isChecked}
            handleToggle={handleToggleENJP}
            text="日本語/英語 切替"
          />
        </FadeInSlideDown>
      </div>
      <div className="flex justify-center">
        <div className="mb-64 max-w-[1500px]">
          <FadeInSlideUp>
            <div className="flex justify-center items-center gap-1">
              <div className="flex flex-col items-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-sans font-bold mb-1">
                  {news.title}
                </h1>
                <p className="text-gray-600 mb-4">
                  <strong className="mr-2">
                    {news.created_at === news.updated_at ? '投稿日' : '更新日'}:
                  </strong>
                  {news && format(new Date(news.updated_at), 'yyyy-MM-dd')}
                </p>
              </div>
            </div>
            <SearchAndReset
              handleSearch={handleSearch}
              handleReset={handleReset}
              inputText={inputText}
              placeholder="チャーム名・説明文で検索"
              handleInputChange={handleInputChange}
            />
          </FadeInSlideUp>
          <div>
            <SelectedOption.Provider value={selectedClasses}>
              <ClassFilter isAndroid={isAndroid} axieClasses={axieClasses} handleSelectButton={handleSelectClass} />
            </SelectedOption.Provider>
          </div>
          <div>
            <SelectedOption.Provider value={selectedRarity}>
              <RarityFilter isAndroid={isAndroid} handleSelectButton={handleSelectRarity} />
            </SelectedOption.Provider>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            {filteredCharms.map((charm, index) => {
              if (
                selectedClasses.length === 0 ||
                selectedClasses.includes(charm.class)
              ) {
                if (
                  selectedRarity.length === 0 ||
                  selectedRarity.includes(charm.item.rarity)
                ) {
                  return (
                    <HoverBigCard key={charm.code} index={index}>
                      <Infomation
                        key={charm.code}
                        axieClass={charm.class}
                        name={charm.item.name}
                        rarity={charm.item.rarity}
                        season={charm.season.name}
                        potentialPoint={charm.potentialPoint}
                        description={charm.item.description}
                        imageUrl={charm.item.imageUrl}
                        imageSize={"small"}
                        isChecked={isChecked}
                      />
                    </HoverBigCard>
                  )
                }
              }
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default CharmList