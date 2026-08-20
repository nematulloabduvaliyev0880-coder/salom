document.addEventListener('DOMContentLoaded', function(){
  const cards = document.querySelectorAll('.card[data-video]');
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoFrame');
  const closeBtn = document.querySelector('.modal-close');

  function openVideo(id){
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }

  function closeVideo(){
    iframe.src = '';
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      // ensure clicks on links/buttons inside card still work
      const videoId = card.getAttribute('data-video');
      if(videoId){
        openVideo(videoId);
      }
    });
  });

  closeBtn.addEventListener('click', closeVideo);
  modal.addEventListener('click', (e) => {
    if(e.target === modal) closeVideo();
  });

  // close on escape
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeVideo();
  });
});
