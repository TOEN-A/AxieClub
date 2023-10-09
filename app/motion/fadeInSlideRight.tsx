import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'

export const FadeInSlideRight = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }} // 初期位置を設定（x軸方向に20px右からスライド）
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : 20,
        transition: { delay: 0.3 },
      }} // inViewの値に応じてアニメーション
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}
