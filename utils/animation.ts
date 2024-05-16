import gsap from "gsap"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import '@styles/Fonts.css';
import '../styles/Fonts.css'
export const animatePageIn = () => {
    // Получение элементов баннеров
    const banners = [
      document.getElementById("banner-1"), document.getElementById("banner-2"),
      document.getElementById("banner-3"), document.getElementById("banner-4"),
      document.getElementById("banner-5"), document.getElementById("banner-6"),
      document.getElementById("banner-7"), document.getElementById("banner-8")
    ];
  
    // Добавление и анимация начального сообщения
    document.body.insertAdjacentHTML('afterbegin', '<div id="pre-animation-message" class = "uppercase text-2xl md:text-6xl font-viola" style="position: fixed; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;  z-index: 99990; color: white; opacity: 0;">rita hory</div>');
    const messageDiv = document.getElementById('pre-animation-message');
  
    // Создание таймлайна GSAP
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
  
    // Задержка перед началом анимации баннеров
    tl.to(messageDiv, {
      opacity: 0,
      duration: 0.3
    }, "+=1") // Задержка 2 секунды перед началом фейда сообщения
  
    // Удаление сообщения
    .add(() => {
      messageDiv.remove();
    });
  
    // Анимация баннеров
    tl.to(banners, {
      yPercent: 100,
      stagger: 0.1,
      duration: 0.2
    });
  };
  
export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const bannerOne = document.getElementById("banner-1")
  const bannerTwo = document.getElementById("banner-2")
  const bannerThree = document.getElementById("banner-3")
  const bannerFour = document.getElementById("banner-4")

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline()

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: -100,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
      stagger: 0.2,
      onComplete: () => {
        router.push(href)
      },
    })
  }
}