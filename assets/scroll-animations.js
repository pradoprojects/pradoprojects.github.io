document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.card, h1, h2');

  const observerOptions = { threshold: 0.15 };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'scale(1) translateY(0)';
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'scale(0.95) translateY(10px)';
    observer.observe(el);
  });
});
