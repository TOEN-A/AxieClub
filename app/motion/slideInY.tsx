import { motion } from 'framer-motion'
import React from 'react'

export const SlideInY = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ y: -1500 }}
    animate={{ y: 0 }}
    exit={{ y: -1000 }}
  >
    {children}
  </motion.div>
)