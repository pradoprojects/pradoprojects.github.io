document.addEventListener('DOMContentLoaded',()=>{
  const cards=document.querySelectorAll('.card');
  const sections=document.querySelectorAll('section');
  const navLinks=document.querySelectorAll('.nav-link');

  // Fade-in + zoom
  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('show');});
  },{threshold:0.15});
  cards.forEach(card=>observer.observe(card));

  // Menu highlight
  const sectionObserver=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        navLinks.forEach(link=>{
          link.classList.remove('active');
          if(link.getAttribute('href').slice(1)===entry.target.id){
            link.classList.add('active');
          }
        });
      }
    });
  },{threshold:0.5});
  sections.forEach(section=>sectionObserver.observe(section));
});
