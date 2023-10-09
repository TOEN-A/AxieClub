import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

export const FadeInSlideLeft = ({
  children,
  delayTime,
}: {
  children: React.ReactNode;
  delayTime?: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : -20,
        transition: {
          delay: delayTime ? delayTime : 0.3,
          ease: 'easeOut', // アニメーションの終了を滑らかにする
        },
      }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
