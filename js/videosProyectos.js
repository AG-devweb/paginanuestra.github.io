document.addEventListener('DOMContentLoaded', () => {
  const videos = document.getElementsByClassName('video-proyecto');
  Array.from(videos).forEach(video => {
    video.addEventListener('mouseenter', () => {
      video.play(); // Comienza a reproducir el video cuando el mouse entra
    });

    video.addEventListener('mouseleave', () => {
      video.pause(); // Pausa la reproducción del video cuando el mouse sale
      video.currentTime = 0;
    });
  });
});