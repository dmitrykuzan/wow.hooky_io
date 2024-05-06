export const loader = () => {
  const loader = document.querySelector(".loader");
  const logo = document.querySelector(".loader svg");
  const video = document.querySelector(".hero video");

  if (!logo || !loader) return;

  logo.addEventListener("animationend", (e) => {
    e.stopPropagation();
    e.preventDefault();
    loader.style.animationPlayState = "running";
  });

  loader.addEventListener("animationend", () => {
    const body = document.body;

    body.classList.remove("lock");
    loader.style.display = "none";
    const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    document.body.style.setProperty("--scrollbar-width", `${scrollBarWidth}px`);
    video.play();
  });
};
