import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import '@styles/Fonts.css';
import '../styles/Fonts.css';
import React, { useRef } from 'react';
import ReactDOMServer from 'react-dom/server';
import '@styles/Loading.css'

const PreAnimationMessage = () => {
  return (
    <div id="pre-animation-message" className="uppercase text-2xl md:text-6xl font-viola"
      style={{
        position: 'fixed', width: '100%', height: '100%', display: 'flex',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        zIndex: 99990, color: 'white', opacity: 0
      }}>
      <div style={{ position: 'relative' }}>
        <div className="container" style={{
          position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
          zIndex: 1
        }}>
          <div class="plate">
            <div class="black">
              <div class="border">
                <div class="white">
                  <div class="center"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="player">
            <div class="rect"></div>
            <div class="circ"></div>
          </div>
        </div>
        <div className="uppercase  justify-center text-center text-4xl md:text-6xl pt-3" style={{ position: 'relative', zIndex: 2 }}>rita hory</div>
        <div className="uppercase  justify-center text-center text-xl md:text-4xl font-viola " style={{ position: 'relative', zIndex: 2 }}>@Pudding_2159</div>
      </div>
    </div>
  );
};


export const animatePageIn = () => {
  // Получаем элементы баннеров
  const banners = [
    document.getElementById("banner-1"),
    document.getElementById("banner-2"),
    document.getElementById("banner-3"),
    document.getElementById("banner-4"),
    document.getElementById("banner-5"),
    document.getElementById("banner-6"),
    document.getElementById("banner-7"),
    document.getElementById("banner-8")
  ].filter(Boolean); // Фильтруем null значения

  // Рендерим компонент PreAnimationMessage и вставляем его в DOM
  const messageHTML = ReactDOMServer.renderToStaticMarkup(<PreAnimationMessage />);
  document.body.insertAdjacentHTML('afterbegin', messageHTML);

  const messageDiv = document.getElementById('pre-animation-message');

  // Создаем таймлайн GSAP
  const tl = gsap.timeline();

  // Анимация появления сообщения
  tl.to(messageDiv, {
    opacity: 1,
    duration: 0.3
  });

  // Установка начального состояния для всех баннеров
  tl.set(banners, {
    yPercent: 0,
  });

  // Анимация исчезновения сообщения после задержки
  tl.to(messageDiv, {
    opacity: 0,
    duration: 0.4
  }, "+=1") // Задержка перед началом анимации

    // Удаление сообщения из DOM
    .add(() => {
      messageDiv?.remove();
    });

  // Анимация баннеров
  tl.to(banners, {
    yPercent: -100,
    stagger: 0.04,
    duration: 0.2
  });
};