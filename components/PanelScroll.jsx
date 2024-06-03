import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const PanelScroll = () => {
    let panels = gsap.utils.toArray(".panel");
    console.log("Hello world ");
  
    panels.forEach((panel, i) => {
      if (i === 0) {  // Условие для первой панели (panel-fiol)
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          endTrigger: panels[i + 1], // вторая панель (panel-blue) будет конечным триггером
          end: "top top",
          pin: true,
          pinSpacing: false,
          onEnter: () => panel.style.zIndex = 999, // Задаем высокий z-index
          onLeave: () => panel.style.zIndex = "",
          // markers: true,
        });
      } else {
        // Для всех последующих панелей создаем ScrollTrigger без пиннинга
        ScrollTrigger.create({
          trigger: panel,
          start: "top bottom",  // Запускается, когда панель появляется у нижней границы вьюпорта
          end: "bottom top",   // Заканчивается, когда панель полностью уходит вверх
          toggleClass: { targets: panel, className: "is-active" }, // Опционально, можно добавить класс для стилизации
          // markers: true,
        });
      }
    });
};
