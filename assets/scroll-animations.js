document.addEventListener('DOMContentLoaded', () => {
    const prefersReduced =
        window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const cards = document.querySelectorAll('.card');
    const thinkRows = document.querySelectorAll('.think-row');

    if (prefersReduced) {
        cards.forEach(card => card.classList.add('show'));
        thinkRows.forEach(row => row.classList.add('show'));
        return;
    }

    const cardObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    }, { threshold: 0.15 });

    cards.forEach(card => cardObserver.observe(card));

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

    const menuToggle = document.getElementById('menu-toggle');
    const topMenuUl = document.getElementById('top-menu-list');

    if (menuToggle && topMenuUl) {
        // Ensure initial ARIA state
        menuToggle.setAttribute('aria-expanded', 'false');
        topMenuUl.setAttribute('aria-hidden', 'true');

        menuToggle.addEventListener('click', () => {
            const isOpen = topMenuUl.classList.toggle('show');
            topMenuUl.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
            menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

            if (isOpen) {
                // move focus to first menu link
                const firstLink = topMenuUl.querySelector('a');
                if (firstLink) firstLink.focus();
            } else {
                menuToggle.focus();
            }
        });

        // Close menu with Escape and manage focus
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (topMenuUl.classList.contains('show')) {
                    topMenuUl.classList.remove('show');
                    topMenuUl.setAttribute('aria-hidden', 'true');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.focus();
                }
            }
        });

        // If user clicks outside the menu, close it
        document.addEventListener('click', (e) => {
            const target = e.target;
            if (topMenuUl.classList.contains('show')) {
                if (!topMenuUl.contains(target) && target !== menuToggle) {
                    topMenuUl.classList.remove('show');
                    topMenuUl.setAttribute('aria-hidden', 'true');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }
});
