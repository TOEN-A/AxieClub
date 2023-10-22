import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

export const FadeInSlideUp = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }} // 初期位置を設定（y軸方向に20px上に移動）
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20, transition: { delay: 0.5 } }} // inViewの値に応じてアニメーション
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
