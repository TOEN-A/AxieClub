'use client'

import React from 'react'
import { Rune } from '../models/runes.type'
import { Database } from '@/database.types'
import format from 'date-fns/format'
import { FadeIn } from '@/app/motion/fadeIn'
import { SlideInY } from '@/app/motion/slideInY'
import { FadeInSlideUp } from '@/app/motion/fadeInSlideUp'
import RuneInfo from './runeInfo'

type News = Database['public']['Tables']['news']['Row']

const RunesList: React.FC<{ runesEN: Rune[]; news: News }> = ({
  runesEN,
  news,
}) => {
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
          <RuneInfo />
        </div>
      </div>
    </div>
  )
}

export default RunesList
