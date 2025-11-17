document.addEventListener('DOMContentLoaded', ()=>{

  const prefersReduced = window.matchMedia &&
                         window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const cards = document.querySelectorAll('.card');

  if(prefersReduced){
    // Show all cards immediately
    cards.forEach(card => card.classList.add('show'));
    return;
  }

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
    });
  },{ threshold:0.15 });

  cards.forEach(card=>observer.observe(card));
});
