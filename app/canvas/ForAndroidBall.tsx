import React, { useContext } from 'react'
import Image from 'next/image'
import { SelectedRuneOption } from '../axieinfinity/runes/components/runesList'
import { SelectedCharmOption } from '../axieinfinity/charms/components/charmsList'

const ForAndroidBall = ({
  url,
  selected,
}: {
  url?: string
  selected: string
}) => {
  const selectedRuneOptions = useContext(SelectedRuneOption)
  const selectedCharmOptions = useContext(SelectedCharmOption)
  const selectedOptions = selectedRuneOptions.length !== 0 ? selectedRuneOptions : selectedCharmOptions
  return (
    <div className="w-[70%] h-[70%]">
      <div
        className={` ${
          selectedOptions.includes(selected) ? 'bg-[#66CDAA]' : ''
        } rounded-full flex items-center justify-center`}
      >
        {url ? <Image src={url} alt="option" height={50} width={50} /> : <></>}
      </div>
    </div>
  )
}

export default ForAndroidBall
