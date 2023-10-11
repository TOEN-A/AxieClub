'use client'

import BallCanvas from '@/app/canvas/Ball'
import { rarity } from '../models/rarity'
import React from 'react';
import { supabaseUrl } from '@/app/constants/url'

const RarityFilter = ({
    handleSelectButton,
  }: {
    handleSelectButton: (buttonValue: string) => void
  }) => {

    return (
      <div className="flex flex-wrap gap-3 my-2 pt-4 pb-0 justify-center md:justify-center">
        {rarity.map((info) => (
          <div
            className="w-[100px] h-[100px] cursor-pointer"
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
        ))}
      </div>
    )
  }
  
  export default RarityFilter