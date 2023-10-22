import { motion } from 'framer-motion'
import React from 'react'

export const SlideInX = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ x: -1500 }}
    animate={{ x: 0 }}
    exit={{ x: -1000 }}
  >
    {children}
  </motion.div>
)