import React, { useRef, useEffect } from 'react';

const SmoothScroll = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {

    if (containerRef.current) {
      const body = document.body,
            scrollWrap = containerRef.current,
            height = scrollWrap.getBoundingClientRect().height - 1,
            speed = 0.04;

      let offset = 0;

      body.style.height = Math.floor(height) + "px";

      function smoothScroll() {
        offset += (window.pageYOffset - offset) * speed;
        var scroll = `translateY(-${offset}px) translateZ(0)`;
        scrollWrap.style.transform = scroll;

        requestAnimationFrame(smoothScroll);
      }

      smoothScroll();
    }

  }, []); // Пустой массив зависимостей гарантирует, что эффект выполнится только один раз после монтирования компонента.

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};

export default SmoothScroll;
