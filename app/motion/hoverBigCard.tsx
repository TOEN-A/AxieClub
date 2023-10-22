import { motion } from 'framer-motion'
import React from 'react'
import { Tilt } from 'react-tilt'
import { FadeIn } from './fadeIn'

const HoverBigCard = ({
  children,
  index,
}: {
  children: React.ReactNode
  index: number
}) => {
  return (
    <div className="xs:w-[250px] w-[95%] hover:w-[100%] lg:w-[75%] lg:hover:w-[80%]">
      <FadeIn delayTime={0}>
          <div
            className="w-full bg-black bg-opacity-50 
        p-[2px] rounded-[20px] shadow-card"
          >
            <div
              className="rounded-[20px] py-2 px-2 bg-slate-400
        flex justify-evenly items-center flex-col"
            >
              {children}
            </div>
          </div>
      </FadeIn>
    </div>
  )
}

export default HoverBigCard
