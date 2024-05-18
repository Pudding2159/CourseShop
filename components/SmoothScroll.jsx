// // components/SmoothScroll.jsx
// import React, { useRef, useEffect } from 'react';

// const SmoothScroll = ({ children }) => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const initGSAP = async () => {
//       const gsap = (await import('gsap')).default;
//       const { ScrollTrigger } = await import('gsap/ScrollTrigger');

//       gsap.registerPlugin(ScrollTrigger);

//       const container = containerRef.current;
//       const height = container.clientHeight;

//       gsap.to(container, {
//         y: () => -(height - window.innerHeight),
//         ease: 'power2.out',
//         scrollTrigger: {
//           trigger: container,
//           start: 'top top',
//           end: 'bottom top',
//           scrub: 1,
//           invalidateOnRefresh: true,
//           onUpdate: (self) => {
//             const progress = self.progress;
//             console.log('Current progress:', progress);
//           },
//         },
//       });

//       let scrollY = 0;
//       let velocity = 0;
//       const friction = 0.95;
//       const speed = 2;

//       function smoothScroll() {
//         scrollY += (window.scrollY - scrollY) * friction;
//         velocity += (window.scrollY - scrollY) * speed;
//         velocity *= friction;

//         gsap.to(container, {
//           y: -scrollY,
//           duration: 0.5,
//           ease: 'power2.out',
//         });

//         requestAnimationFrame(smoothScroll);
//       }

//       smoothScroll();

//       window.addEventListener('scroll', (e) => {
//         window.scrollTo(0, 0);
//       });

//       return () => {
//         window.removeEventListener('scroll', (e) => {
//           window.scrollTo(0, 0);
//         });
//       };
//     };

//     initGSAP();
//   }, []);

//   return (
//     <div ref={containerRef}>
//       {children}
//     </div>
//   );
// };

// export default SmoothScroll;
