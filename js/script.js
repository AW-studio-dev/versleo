// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Language Selector
const languageButtons = document.querySelectorAll('.language-btn');
languageButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        // In a real implementation, this would load translations
        alert(`Language changed to ${lang}. In a real implementation, this would load translations.`);
    });
});

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentTestimonial = index;
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showTestimonial(index);
    });
});

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .dialect-card, .combination-card, .mission-statement, .team-member, .value-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Run once on page load
animateOnScroll();

// Run on scroll
window.addEventListener('scroll', animateOnScroll);

// Form submission
const contactForms = document.querySelectorAll('.contact-form');
contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
});

// Snake animation on logo hover
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('mouseenter', () => {
        const snakeTrail = document.querySelector('.snake-trail');
        if (snakeTrail) {
            snakeTrail.style.animation = 'snakeTrail 2s infinite linear';
        }
    });
    
    logo.addEventListener('mouseleave', () => {
        const snakeTrail = document.querySelector('.snake-trail');
        if (snakeTrail) {
            snakeTrail.style.animation = 'snakeTrail 8s infinite linear';
        }
    });
}

// Language tags animation
const languageTags = document.querySelectorAll('.language-tag');
languageTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        const lang = tag.getAttribute('data-lang');
        if (lang) {
            tag.style.backgroundColor = getLanguageColor(lang);
        }
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.backgroundColor = '';
    });
});

function getLanguageColor(lang) {
    const colors = {
        'en': '#5e35b1',
        'fr': '#26a69a',
        'es': '#ffab00',
        'ar': '#388e3c',
        'tr': '#d81b60',
        'ber': '#8e24aa',
        'de': '#f4511e',
        'it': '#039be5',
        'pt': '#e53935',
        'ru': '#00897b',
        'zh': '#3949ab',
        'ja': '#7cb342',
        'ko': '#fb8c00'
    };
    return colors[lang] || '#5e35b1';
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialize animations for elements that should be visible on page load
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroText = document.querySelector('.hero-text');
    const ctaButton = document.querySelector('.cta-button');
    
    if (heroTitle) heroTitle.style.animation = 'fadeInUp 1s forwards 0.3s';
    if (heroText) heroText.style.animation = 'fadeInUp 1s forwards 0.5s';
    if (ctaButton) ctaButton.style.animation = 'fadeInUp 1s forwards 0.7s';
    
    // Animate service cards on services page
    const serviceCards = document.querySelectorAll('.service-card.detailed');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Animate dialect cards on languages page
    const dialectCards = document.querySelectorAll('.dialect-card');
    dialectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Trigger animations after a short delay to allow for rendering
    setTimeout(() => {
        animateOnScroll();
    }, 500);
});

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const floatingElements = document.querySelectorAll('.floating, .lang-float, .contact-float');
    
    floatingElements.forEach((element, index) => {
        const speed = 0.1 + (index * 0.02);
        const yPos = -(scrollPosition * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Special animation for Arabic map points
const mapPoints = document.querySelectorAll('.map-point');
mapPoints.forEach((point, index) => {
    point.style.animationDelay = `${index * 0.2}s`;
});

// Interactive language pairs on languages page
const languagePairs = document.querySelectorAll('.lang-pair');
languagePairs.forEach(pair => {
    pair.addEventListener('mouseenter', () => {
        const arrow = pair.querySelector('.arrow');
        if (arrow) {
            arrow.style.transform = 'scaleX(1.5)';
            arrow.style.backgroundColor = getRandomColor();
        }
    });
    
    pair.addEventListener('mouseleave', () => {
        const arrow = pair.querySelector('.arrow');
        if (arrow) {
            arrow.style.transform = 'scaleX(1)';
            arrow.style.backgroundColor = '';
        }
    });
});

function getRandomColor() {
    const colors = ['#5e35b1', '#26a69a', '#ffab00', '#388e3c', '#d81b60'];
    return colors[Math.floor(Math.random() * colors.length)];
}
