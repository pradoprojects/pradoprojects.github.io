// Scroll animations (fade + zoom)
const cards = document.querySelectorAll('.card');

const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('fade-in');
      entry.target.style.transform = 'scale(1)';
      entry.target.style.opacity = '1';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

cards.forEach(card => {
  card.style.transform = 'scale(0.97)';
  observer.observe(card);
});
