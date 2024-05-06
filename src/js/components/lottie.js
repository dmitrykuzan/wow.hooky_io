import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const lottie = () => {
  fetch("json/planet.json")
    .then((res) => res.text())
    .then((value) => {
      const lottie = document.querySelector("#planet");
      const wrapper = document.querySelector(".vr__wrapper");
      const video = wrapper.querySelector(".vr__wrapper-video-inner");

      if (!lottie) return;

      lottie.load(value);

      ScrollTrigger.create({
        trigger: ".vr",
        start: "top 45%",
        toggleClass: "show",
      });

      ScrollTrigger.create({
        trigger: ".vr__item--left",
        start: "top 30%",
        end: "80% center",
        toggleClass: "active",
      });

      ScrollTrigger.create({
        trigger: ".vr__item--right",
        start: "top center",
        end: "80% center",
        toggleClass: "active",
      });

      ScrollTrigger.create({
        trigger: wrapper,
        start: "20% 70%",
        end: "70% 20%",
        onUpdate: (entry) => {
          const percent = entry.progress * 100;
          video.style.transform = `translateX(${(percent - 50) * -1}%)`;
          lottie.seek(`${(percent > 99 ? 99 : percent).toFixed(0)}%`);
        },
      });
    });
};
