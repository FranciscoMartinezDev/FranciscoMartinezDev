window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');

    if (window.pageYOffset >= 400) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});

const button1 = document.getElementById('btn-skill-1');
button1.addEventListener('click', function () {
    const article = document.getElementById('skill-1');
    if (article.classList.contains('dropdown')) {
        article.classList.remove('dropdown');
    } else {
        article.classList.add('dropdown');
    }
})

const button2 = document.getElementById('btn-skill-2');
button2.addEventListener('click', function () {
    const article = document.getElementById('skill-2');
    if (article.classList.contains('dropdown')) {
        article.classList.remove('dropdown');
    } else {
        article.classList.add('dropdown');
    }
})

const button3 = document.getElementById('btn-skill-3');
button3.addEventListener('click', function () {
    const article = document.getElementById('skill-3');
    if (article.classList.contains('dropdown')) {
        article.classList.remove('dropdown');
    } else {
        article.classList.add('dropdown');
    }
})

const button4 = document.getElementById('btn-skill-4');
button4.addEventListener('click', function () {
    const article = document.getElementById('skill-4');
    if (article.classList.contains('dropdown')) {
        article.classList.remove('dropdown');
    } else {
        article.classList.add('dropdown');
    }
})

const button5 = document.getElementById('btn-skill-5');
button5.addEventListener('click', function () {
    const article = document.getElementById('skill-5');
    if (article.classList.contains('dropdown')) {
        article.classList.remove('dropdown');
    } else {
        article.classList.add('dropdown');
    }
})

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const menuButton = document.querySelector('nav .profile button');
menuButton.addEventListener('click', function () {
    const navbar = document.querySelector('nav');
    if (navbar.classList.contains('showed')) {
        navbar.classList.remove('showed');
    } else {
        navbar.classList.add('showed');
    }
})
