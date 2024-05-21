"use client"

import React, { useEffect, useRef } from 'react';
import animationData from '../lottie/animation_1.json';
import lottie from 'lottie-web';

const PreAnimationMessage = () => {
  const lottieContainer = useRef(null);
  console.log("Hello world");

  useEffect(() => {
    console.log('useEffect called');
    console.log('Lottie container:', lottieContainer.current);

    if (lottieContainer.current) {
      console.log('Initializing Lottie animation...');

      // Инициализация Lottie-анимации
      const anim = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      });

      anim.addEventListener('DOMLoaded', () => {
        console.log('Lottie animation loaded successfully');
      });

      anim.addEventListener('data_failed', () => {
        console.error('Failed to load Lottie animation data');
      });

      return () => {
        anim.destroy(); // Очистка при размонтировании компонента
      };
    } else {
      console.error('Lottie container is null');
    }
  }, []);

  return (
    <div id="pre-animation-message" className="uppercase text-2xl md:text-6xl font-viola"
      style={{
        position: 'fixed', width: '100%', height: '100%', display: 'flex',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        zIndex: 99990, color: 'white', opacity: 0
      }}>
      <div ref={lottieContainer} style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1,
        pointerEvents: 'none' // Чтобы анимация не блокировала взаимодействие с текстом
      }}></div>
      <div style={{ position: 'relative', zIndex: 2 }}>rita hory</div>
      <div className="uppercase text-xl md:text-4xl font-viola p-2" style={{ position: 'relative', zIndex: 2 }}>@Pudding_2159</div>
    </div>
  );
};

export default PreAnimationMessage;