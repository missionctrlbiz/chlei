// Vanilla JS initialization script - No jQuery required
(function () {
    'use strict';

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        // Initialize AOS (Animate On Scroll)
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true,
                offset: 100,
            });
        }

        // Sticky Header on Scroll
        initStickyHeader();

        // Mobile Menu Toggle (if needed)
        initMobileMenu();
    }

    function initStickyHeader() {
        const header = document.querySelector('.header-area');
        if (!header) return;

        let lastScroll = 0;

        window.addEventListener('scroll', function () {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > 100) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }

            lastScroll = currentScroll;
        });
    }

    function initMobileMenu() {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');

        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', function (e) {
                e.preventDefault();
                mobileMenu.classList.toggle('active');
                this.classList.toggle('active');
            });
        }
    }

})();
