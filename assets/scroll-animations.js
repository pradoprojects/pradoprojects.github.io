// Scroll fade-in / zoom-in

document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in-card, .fade-in-section');

  const options = { threshold: 0.1 };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if(entry.isIntersecting){
        // Delay progressivo baseado no index
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150); // 150ms de diferença entre cada card/section
        observer.unobserve(entry.target);
      }
    });
  }, options);

  faders.forEach(fader => appearOnScroll.observe(fader));
});
