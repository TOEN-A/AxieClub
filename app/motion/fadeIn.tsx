import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'

export const FadeIn = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // 一度だけアニメーションをトリガーする
    threshold: 0.2, // 画面に20%以上表示されたらトリガー
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0, transition: { delay: 0.4 } }} // inViewの値に応じてアニメーション
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}
