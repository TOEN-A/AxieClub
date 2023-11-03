import React, { useContext } from 'react'
import Image from 'next/image'
import { SelectedOption } from '../axieinfinity/runes/components/runesList'

const ForAndroidBall = ({
  url,
  selected,
}: {
  url?: string
  selected: string
}) => {
  const selectedOption = useContext(SelectedOption)
  return (
    <div className="w-[70%] h-[70%]">
      <div
        className={` ${
          selectedOption.includes(selected) ? 'bg-[#66CDAA]' : ''
        } rounded-full flex items-center justify-center`}
      >
        {url ? <Image src={url} alt="option" height={50} width={50} /> : <></>}
      </div>
    </div>
  )
}

export default ForAndroidBall
