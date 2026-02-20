document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.main-nav a');

    // Active section on scroll
    window.addEventListener('scroll', function() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.pageYOffset;

            if (scrollPosition >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });

        // Smooth scrolling for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Update active section in navigation
                navLinks.forEach(navLink => {
                    navLink.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
    });

    // Smooth fade-in animations for sections
    function animateSections() {
        const sectionsToAnimate = document.querySelectorAll('.section.active');

        sectionsToAnimate.forEach(section => {
            const cards = section.querySelectorAll('.card');
            cards.forEach((card, index) => {
                const delay = index * 0.2;
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    card.style.transition = 'opacity var(--transition-speed), transform var(--transition-speed)';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100 + (delay * 1000));
            });
        });
    }

    // Initialize animations
    animateSections();

    // Add scroll-triggered animations
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.pageYOffset;

            if (scrollPosition >= (sectionTop - 100)) {
                section.classList.add('active');
            }
        });
    });
});