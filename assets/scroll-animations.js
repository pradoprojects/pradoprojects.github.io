document.addEventListener('DOMContentLoaded', () => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const cards = document.querySelectorAll('.card');
    const thinkRows = document.querySelectorAll('.think-row');

    if (prefersReduced) {
        cards.forEach(card => card.classList.add('show'));
        thinkRows.forEach(row => row.classList.add('show'));
    } else {
        /* Cards fade/zoom */
        const cardObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) entry.target.classList.add('show');
            });
        }, { threshold: 0.15 });
        cards.forEach(card => cardObserver.observe(card));

        /* How I Think slide-in */
        thinkRows.forEach((row, index) => {
            row.classList.add(index%2===0 ? 'slide-in-left' : 'slide-in-right');
        });
        const thinkObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) entry.target.classList.add('show');
            });
        }, { threshold: 0.2 });
        thinkRows.forEach(row => thinkObserver.observe(row));
    }

    /* Hamburger menu toggle */
    const menuToggle = document.getElementById('menu-toggle');
    const topMenuUl = document.querySelector('#top-menu ul');
    if(menuToggle){
        menuToggle.addEventListener('click', ()=>{
            topMenuUl.classList.toggle('show');
        });
    }

    /* Smooth scroll for menu links */
    document.querySelectorAll('#top-menu a[href^="#"]').forEach(link=>{
        link.addEventListener('click', e=>{
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if(target){
                target.scrollIntoView({ behavior:'smooth', block:'start' });
                if(topMenuUl.classList.contains('show')){
                    topMenuUl.classList.remove('show');
                }
            }
        });
    });
});
