document.addEventListener('DOMContentLoaded', function(){
  const elements = document.querySelectorAll('.card, h1, h2, h3');

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
    });
  }, { threshold:0.15 });

  elements.forEach(el => observer.observe(el));
});
