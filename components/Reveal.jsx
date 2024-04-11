"use client"; 
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Reveal = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 0 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 2.2, delay: 0.27 }
        }
      };
      

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.25 }}
            layout // Добавляем этот пропс, чтобы включить анимацию макета
        >
            {children}
        </motion.div>
    );
};
