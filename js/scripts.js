document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const loginButton = document.getElementById('login-button');
    const loginModal = document.getElementById('login-modal');
    const closeButton = document.querySelector('.close-button');
    const loginForm = document.getElementById('login-form');

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

    loginButton.addEventListener('click', () => {

    fadeInModal(loginModal);
    });

    closeButton.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === 'user' && password === '123') {
            alert('Login bem-sucedido!');
            loginModal.style.display = 'none';
        } else {
            alert('Usuário ou senha incorretos.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        navUl.classList.toggle('active');
    });

    navUl.querySelectorAll('li a').forEach(link => {
        link.addEventListener('click', function() {
            navUl.classList.remove('active');
        });
    });

    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navUl.contains(event.target) && navUl.classList.contains('active')) {
            navUl.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    function fadeInSection() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            }
        });
    }

    window.addEventListener('scroll', fadeInSection);
});
function initProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.width = '0%';
    progressBar.style.height = '5px';
    progressBar.style.backgroundColor = '#1A7ACC';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

document.addEventListener('DOMContentLoaded', initProgressBar);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth;
        carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });


    window.addEventListener('resize', updateCarousel);
});

function fadeInModal(modal, duration = 500) {
    modal.style.display = 'block';
    modal.style.opacity = 0;
    modal.style.visibility = 'visible';
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        let progress = timestamp - start;
        modal.style.opacity = Math.min(progress / duration, 1);
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

document.getElementById('login-button').addEventListener('click', () => {
    fadeInModal(document.getElementById('login-modal'));
});
