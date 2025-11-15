// Scroll animations (fade + zoom)
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.card');

  const observerOptions = { threshold: 0.15 };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'scale(1)';
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.95)';
    observer.observe(card);
  });
});
