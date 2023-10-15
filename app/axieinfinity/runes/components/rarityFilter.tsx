'use client'

import BallCanvas from '@/app/canvas/Ball'
import { rarity } from '../models/rarity'
import React from 'react'
import { supabaseUrl } from '@/app/constants/url'
import { FadeInSlideLeft } from '@/app/motion/fadeInSlideLeft'

const RarityFilter = ({
  handleSelectButton,
}: {
  handleSelectButton: (buttonValue: string) => void
}) => {
  return (
    <div className="flex flex-wrap gap-3 pb-0 justify-center md:justify-center">
      {rarity.map((info, index) => (
        <FadeInSlideLeft key={info.rarity} delayTime={index * 0.2 + 1.2}>
          <div
            className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[90px] cursor-pointer"
            key={info.rarity}
            onClick={() => handleSelectButton(info.rarity)}
          >
            <BallCanvas
              key={info.rarity}
              url={`${supabaseUrl}/storage/v1/object/public/images/rarityIcon/${info.rarity}.png`}
              scale={2.25}
              selected={info.rarity}
            />
          </div>
        </FadeInSlideLeft>
      ))}
    </div>
  )
}

export default RarityFilter
