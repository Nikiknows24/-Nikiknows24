// script.js

// Smooth scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive elements
const interactiveElements = document.querySelectorAll('.interactive');

interactiveElements.forEach(element => {
    element.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

// Enhanced user experience
const popupTrigger = document.querySelector('.popup-trigger');
const popup = document.querySelector('.popup');

popupTrigger.addEventListener('click', function() {
    popup.classList.toggle('visible');
});

const closePopup = document.querySelector('.popup-close');
closePopup.addEventListener('click', function() {
    popup.classList.remove('visible');
});
