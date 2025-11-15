// Scroll fade-in / zoom-in

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  const options = { threshold: 0.1 };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if(entry.isIntersecting){
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150); // atraso entre cards
        observer.unobserve(entry.target);
      }
    });
  }, options);

  cards.forEach(card => observer.observe(card));
});
