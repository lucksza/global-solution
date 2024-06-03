document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    window.addEventListener('load', () => {
        sections.forEach(section => {
            section.classList.add('visible');
        });
    });

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});
