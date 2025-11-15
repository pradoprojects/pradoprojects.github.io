document.addEventListener('DOMContentLoaded', function(){
  const cards = document.querySelectorAll('.card');
  const headings = document.querySelectorAll('h1, h2, h3');

  // Add data-delay if needed (not strictly required)
  cards.forEach((card, index) => card.setAttribute('data-delay', index));

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.15 });

  cards.forEach(card => observer.observe(card));
  headings.forEach(heading => observer.observe(heading));
});
