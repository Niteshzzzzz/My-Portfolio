const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// Typed.js Animation for "Passionate"
var typed = new Typed('#element', {
    strings: ["Full Stack Developer"],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true
});

// tougle line 
const tougle = document.querySelector('.tougle-line')
const about = document.querySelector('.abt')
const specialization = document.querySelector('.splzt')
const tooltips = document.querySelector('.first-ab-contect')
const aboutContent = document.querySelector('.second-ab-contect')

about.addEventListener('click', () => {
    tougle.style.left = '218px'
    tougle.style.width = '80px'
    tooltips.style.display = 'none'
    aboutContent.style.display = 'block'
})

specialization.addEventListener('click', () => {
    tougle.style.left = '16px'
    tougle.style.width = '170px'
    tooltips.style.display = 'block'
    aboutContent.style.display = 'none'
})

// tooltips js 
let mongodb = document.querySelector('.mongoDB')
let main = document.querySelector('.main')
let express = document.querySelector('.express')
let react = document.querySelector('.react')
let node = document.querySelector('.node')

mongodb.addEventListener('mouseover', () => {
    main.style.borderColor = '#47A248';
})
mongodb.addEventListener('mouseout', () => {
    main.style.borderColor = 'white';
})

react.addEventListener('mouseover', () => {
    main.style.borderColor = '#61DAFB';
})
react.addEventListener('mouseout', () => {
    main.style.borderColor = 'white';
})

node.addEventListener('mouseover', () => {
    main.style.borderColor = '#8CC84B';
})
node.addEventListener('mouseout', () => {
    main.style.borderColor = 'white';
})

// touggle bar js 

var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0) {
            newClass = newClass.replace(" " + className + " ", " ");
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

const toggleBar = document.querySelector('.toggle-side-bar')
const toggleBtn = document.querySelector('.drop-down-btn')
let tougleResult = true

theToggle.onclick = function () {
    toggleClass(this, 'on');
    if (tougleResult === true) {
        toggleBar.style.left = '0'
        tougleResult = false
    } else {
        toggleBar.style.left = '-40%'
        tougleResult = true
    }
    return false;
}

// smooth scrolling 

function smoothScroll(target) {
    const element = document.querySelector(target);
    let targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let duration = 800; // Duration in ms
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        let progress = timestamp - start;
        let percentComplete = Math.min(progress / duration, 1);
        window.scrollTo(0, startPosition + distance * percentComplete);

        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

// for small screen 
document.querySelector('#ab').addEventListener('click', () => {
    smoothScroll('.about')
})

document.querySelector('#co').addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll('#contact');
});

document.querySelector('#sk').addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll('.sk-head')
})

document.querySelector('#pj').addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll('.projects')
})

document.querySelector('#se').addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll('.services')
})

document.querySelector('.back-to').addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll('main')
})

document.querySelector('#ce').addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll('.certificate-section')
})

//for large screen 
document.querySelector('#ab1').addEventListener('click', () => {
    smoothScroll('.about')
})

document.querySelector('#co1').addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll('#contact');
});

document.querySelector('#sk1').addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll('.sk-head')
})

document.querySelector('#se1').addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll('.services')
})

document.querySelector('#pj1').addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll('.projects')
})

// preloader js 
// document.querySelector('body').addEventListener('load', () => {
//     document.querySelector('.preloader').style.display = 'none'
// })

function disableLoad() {
    document.querySelector('.preloader').style.display = 'none'
    document.querySelector('.everything').style.display = 'block'
}

function preLoader() {
    setTimeout(disableLoad, (Math.floor(Math.random() * 5) + 1) * 1000);
}

// js for email.js
const contactForm = document.getElementById('contactForm')
contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const params = {
        from_name: document.querySelector('#from_name').value,
        email_id: document.querySelector('#email_id').value,
        message: document.querySelector('#message').value
    }

    emailjs.send('service_r7brbch', 'template_wnyxb5k', params)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
            contactForm.reset(); // Reset form after successful submission
        }, function (error) {
            console.log('FAILED...', error);
            alert('Failed to send the message. Please try again.');
        });
})

