export const customPlayer = () => {
  const muted = document.querySelector('.hero__button-sound');
  const video = document.querySelector('video');

  muted.addEventListener('click', () => {
    if (video.muted){
      video.muted = false;
      muted.classList.add('active');

    } else{
      video.muted = true;
      muted.classList.remove('active');
    }
  });
}