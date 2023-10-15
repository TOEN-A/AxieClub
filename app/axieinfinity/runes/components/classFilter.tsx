'use client'

import BallCanvas from '@/app/canvas/Ball'
import { axieClasses } from '../models/axieClasses'
import { supabaseUrl } from '@/app/constants/url'
import { FadeInSlideLeft } from '@/app/motion/fadeInSlideLeft'

const ClassFilter = ({
  handleSelectButton,
}: {
  handleSelectButton: (buttonValue: string) => void
}) => {
  return (
    <div className="flex flex-wrap pt-4 pb-0 justify-center md:justify-center">
      {axieClasses.map((axieClass, index) => (
        <FadeInSlideLeft key={axieClass.class} delayTime={index * 0.2}>
          <div
            className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[90px] cursor-pointer"
            key={axieClass.class}
            onClick={() => handleSelectButton(axieClass.class)}
          >
            <BallCanvas
              key={axieClass.class}
              url={`${supabaseUrl}/storage/v1/object/public/images/classIcon/${axieClass.class}.png`}
              scale={2.25}
              selected={axieClass.class}
            />
          </div>
        </FadeInSlideLeft>
      ))}
    </div>
  )
}

export default ClassFilter
