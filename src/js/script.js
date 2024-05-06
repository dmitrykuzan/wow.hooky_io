"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import {
  mobileCheck,
  customPlayer,
  modals,
  dynamicAdaptive,
  paralax,
  sliderParalax1,
  sliderParalax2,
  sliderParalax3,
  sliderParalax4,
  loader,
} from "./functions/";

// Components
import { particles } from "./components/particles";
import { lottie } from "./components/lottie";
import { mainSlider } from "./components/mainSlider";
import { anim } from "./components/anim";

window.addEventListener("DOMContentLoaded", () => {
  loader();
  anim();
  lottie();
  mobileCheck();
  mainSlider();
  customPlayer();
  modals();
  dynamicAdaptive();
  paralax();
  sliderParalax1();
  sliderParalax2();
  sliderParalax3();
  sliderParalax4();
  particles();
});
