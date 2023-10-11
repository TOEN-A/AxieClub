import { motion } from 'framer-motion'
import React from 'react'
import { Tilt } from 'react-tilt'

const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

const TiltCard = ({
  children,
  index,
}: {
  children: React.ReactNode
  index: number
}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full bg-gradient-to-br from-green-400 via-pink-600 to-purple-400 
        p-[2px] rounded-[20px] shadow-card"
      >
        <div
          className="rounded-[20px] py-5 px-12 bg-slate-400
        min-h-[280px] flex justify-evenly items-center flex-col"
        >
          {children}
        </div>
      </motion.div>
    </Tilt>
  )
}

export default TiltCard
