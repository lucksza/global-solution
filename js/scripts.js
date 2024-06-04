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
        loginModal.style.display = 'block';
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
        if (username === 'admin' && password === 'admin') {
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

