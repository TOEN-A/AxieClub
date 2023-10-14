'use client'

import React from 'react'
import { Rune } from '../models/runes.type'
import { Database } from '@/database.types'
import format from 'date-fns/format'
import { FadeInSlideUp } from '@/app/motion/fadeInSlideUp'
import ClassFilter from './classFilter'
import RarityFilter from './rarityFilter'
import { useState } from 'react'
import { createContext } from 'react'
import TiltCard from '@/app/motion/tiltCard'
import RuneInfo from './runeInfo'

type News = Database['public']['Tables']['news']['Row']

export const SelectedOption = createContext<string[]>([])

const RunesList: React.FC<{ runesEN: Rune[]; news: News }> = ({
  runesEN,
  news,
}) => {
  const [selectedClasses, setSelectedClasses] = useState<string[]>([])
  const [selectedRarity, setSelectedRarity] = useState<string[]>([])
  console.log(selectedClasses)
  console.log(selectedRarity)
  console.log(runesEN)


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
        <div className="flex justify-center items-center gap-1">
          <div className="flex flex-col items-center">
            <FadeInSlideUp>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-sans font-bold mb-1">
                ORIGINS {news.title}
              </h1>
              <p className="text-gray-600 mb-4">
                <strong className="mr-2">更新日:</strong>
                {news && format(new Date(news.updated_at), 'yyyy-MM-dd')}
              </p>
            </FadeInSlideUp>
          </div>
        </div>
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
        <div className="flex flex-wrap gap-8 justify-center mt-10">
            {runesEN.map((rune, index) => (
              <TiltCard key={rune.rune} index={index}>
                <RuneInfo
                  key={rune.rune}
                  axieClass={rune.class}
                  name={rune.item.name}
                  rarity={rune.item.rarity}
                  season={rune.season.name}
                  description={rune.item.description}
                  imageUrl={rune.item.imageUrl}
                />
              </TiltCard>
            ))}
        </div>
      </div>
    </div>
  )
}

export default RunesList
