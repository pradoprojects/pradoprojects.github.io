document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const index = Array.from(cards).indexOf(entry.target);
        entry.target.style.transitionDelay = `${index * 0.15}s`;
        entry.target.classList.add('show');
      }
    });
  }, {threshold: 0.15});

  cards.forEach(card => observer.observe(card));
});
