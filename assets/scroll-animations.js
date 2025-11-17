document.addEventListener('DOMContentLoaded', () => {
    const prefersReduced =
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const cards = document.querySelectorAll('.card');
    const thinkRows = document.querySelectorAll('.think-row');

    if (prefersReduced) {
        cards.forEach(card => card.classList.add('show'));
        thinkRows.forEach(row => row.classList.add('show'));
        return;
    }

    /* ------------------------------- */
    /* CARD FADE/ZOOM EFFECT            */
    /* ------------------------------- */
    const cardObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    }, { threshold: 0.15 });

    cards.forEach(card => cardObserver.observe(card));

    /* ------------------------------- */
    /* HOW I THINK SLIDE-IN            */
    /* ------------------------------- */
    thinkRows.forEach((row, index) => {
        if (index % 2 === 0) row.classList.add('slide-in-left');
        else row.classList.add('slide-in-right');
    });

    const thinkObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    }, { threshold: 0.2 });

    thinkRows.forEach(row => thinkObserver.observe(row));

    /* ------------------------------- */
    /* HAMBURGER MENU TOGGLE           */
    /* ------------------------------- */
    const menuToggle = document.getElementById('menu-toggle');
    const topMenuUl = document.querySelector('#top-menu ul');
    if(menuToggle){
        menuToggle.addEventListener('click', ()=>{
            topMenuUl.classList.toggle('show');
        });
    }
});
