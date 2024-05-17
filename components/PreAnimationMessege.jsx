import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

const PreAnimationMessage = () => {
  const messageRef = useRef(null);

  useEffect(() => {
    // Создаем новый SplitType объект для текста
    const typeSplit = new SplitType(messageRef.current, {
      types: 'lines, words, chars',
      tagName: 'span'
    });

    // Анимация для слов
    gsap.from(typeSplit.words, {
      y: '100%',
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.1
    });

    // Очистка SplitType при размонтировании компонента
    return () => {
      typeSplit.revert();
    };
  }, []);

  return (
    <div>
      <div ref={messageRef} animate>
        Pre Animation Message
      </div>
    </div>
  );
};

export default PreAnimationMessage;
