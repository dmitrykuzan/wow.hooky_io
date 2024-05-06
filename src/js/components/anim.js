import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const anim = () => {
  gsap.from(".header", {
    opacity: 0,
    y: 30,
    duration: 2,
    delay: 3.5,
  });

  const benefitsTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".benefits__wrapper",
      start: "40% 80%",
      toggleActions: "play none none reverse",
    },
  });

  benefitsTl
    .from(".benefits__bg", {
      opacity: 0,
      duration: 0.6,
    })
    .from(".benefits__image", {
      opacity: 0,
      duration: 0.6,
    })
    .from(
      ".benefits__title",
      {
        opacity: 0,
        y: 50,
        duration: 0.6,
      },
      0
    )
    .from(
      ".benefits__button",
      {
        opacity: 0,
        y: 50,
        duration: 0.6,
      },
      0
    )
    .from(
      ".benefits__text",
      {
        opacity: 0,
        y: 50,
        duration: 0.6,
      },
      0
    )
    .from(
      ".benefits__item",
      {
        opacity: 0,
        y: 50,
        duration: 0.3,
        stagger: 0.2,
      },
      0
    );

  const statisticTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".statistic__wrapper",
      start: "-10% 80%",
      toggleActions: "play none none reverse",
    },
  });

  statisticTl.from(".statistic__item-wrapper", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.3,
  });

  gsap.from(".distribution__title", {
    scrollTrigger: {
      trigger: ".distribution__title",
      start: "10% 70%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });

  gsap.from(".distribution__item", {
    scrollTrigger: {
      trigger: ".distribution__list",
      start: "10% 70%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.3,
  });

  gsap.from(".foundational__ticker", {
    scrollTrigger: {
      trigger: ".foundational__ticker",
      start: "10% 70%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    duration: 0.6,
  });

  gsap.from(".foundational__body", {
    scrollTrigger: {
      trigger: ".foundational__body",
      start: "10% 70%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    duration: 0.6,
  });

  const genesisTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".genesis__wrapper",
      start: "10% 70%",
      toggleActions: "play none none reverse",
    },
  });

  genesisTl
    .from(
      ".genesis__image",
      {
        opacity: 0,
        duration: 0.6,
      },
      0
    )
    .from(
      ".genesis__title",
      {
        opacity: 0,
        y: 50,
        duration: 0.6,
      },
      0
    )
    .from(
      ".genesis__btn--1",
      {
        opacity: 0,
        x: -50,
        duration: 0.6,
      },
      0.6
    )
    .from(
      ".genesis__btn--2",
      {
        opacity: 0,
        x: 50,
        duration: 0.6,
      },
      0.6
    );

  const secureTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".secure__wrapper",
      start: "10% 70%",
      end: "center 20%",
      toggleActions: "play reverse play reverse",
    },
  });

  secureTl
    .from(
      ".secure__image",
      {
        opacity: 0,
        duration: 0.6,
      },
      0
    )
    .from(
      ".secure__title",
      {
        opacity: 0,
        y: 50,
        duration: 0.6,
      },
      0
    )
    .from(
      ".secure__btn--1",
      {
        opacity: 0,
        x: -50,
        duration: 0.6,
      },
      0.6
    )
    .from(
      ".secure__btn--2",
      {
        opacity: 0,
        x: 50,
        duration: 0.6,
      },
      0.6
    );

  const proudlyTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".proudly__wrapper",
      start: "40% 80%",
      toggleActions: "play none none reverse",
    },
  });

  proudlyTl
    .from(".proudly__bg", {
      opacity: 0,
      duration: 0.3,
    })
    .from(".proudly__image", {
      opacity: 0,
      duration: 0.3,
    })
    .from(
      ".proudly__title",
      {
        opacity: 0,
        y: 50,
        duration: 0.6,
      },
      0
    )
    .from(".proudly__text", {
      opacity: 0,
      y: 50,
      duration: 0.6,
    })
    .from(".proudly__button", {
      opacity: 0,
      y: 50,
      duration: 0.6,
    });
};
