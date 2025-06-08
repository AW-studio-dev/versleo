// ==== COSMIC INITIALIZATION ====
document.addEventListener('DOMContentLoaded', function() {
  
  // ==== DRAGON MENU TOGGLE ====
  const menuBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('active');
      
      // Add magical sparkles
      if (nav.classList.contains('active')) {
        createSparkles(this, 10);
      }
    });
  }

  // ==== SCROLL OF ANIMATIONS ====
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.card, .feature, .testimonial');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.classList.add('animated');
      }
    });
  };

  // Initial check
  animateOnScroll();
  
  // Scroll event with throttle
  window.addEventListener('scroll', throttle(animateOnScroll, 100));

  // ==== MAGICAL SPARKLES ====
  function createSparkles(element, count) {
    for (let i = 0; i < count; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      
      // Random position
      const x = Math.random() * element.offsetWidth;
      const y = Math.random() * element.offsetHeight;
      
      // Random color
      const colors = [
        'var(--imperial-gold)', 
        'var(--magic-pink)', 
        'var(--celestial-blue)'
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.backgroundColor = color;
      
      // Random size
      const size = Math.random() * 10 + 5;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      
      // Add animation
      sparkle.style.animation = `sparkle ${Math.random() * 1 + 0.5}s forwards`;
      
      element.appendChild(sparkle);
      
      // Remove after animation
      setTimeout(() => {
        sparkle.remove();
      }, 1000);
    }
  }

  // ==== ENCHANTED CURSOR ====
  const cursor = document.createElement('div');
  cursor.className = 'magic-cursor';
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', function(e) {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    
    // Trail effect
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;
        trail.style.opacity = 1 - (i * 0.3);
        trail.style.transform = `scale(${1 - (i * 0.2)})`;
        document.body.appendChild(trail);
        
        setTimeout(() => {
          trail.remove();
        }, 500);
      }, i * 50);
    }
  });
  
  // Cursor effects on hover
  const hoverElements = document.querySelectorAll('a, button, .card');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      createSparkles(el, 5);
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  });

  // ==== LEGENDARY TESTIMONIAL SLIDER ====
  const testimonials = document.querySelectorAll('.testimonial');
  let currentTestimonial = 0;
  
  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.remove('active');
      if (i === index) {
        t.classList.add('active');
        // Add entrance animation
        t.style.animation = 'testimonialEntrance 1s forwards';
        
        // Create magical particles
        createParticles(t);
      }
    });
  }
  
  function createParticles(element) {
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random position around element
      const rect = element.getBoundingClientRect();
      const x = rect.left + Math.random() * rect.width;
      const y = rect.top + Math.random() * rect.height;
      
      // Random color
      const colors = [
        'var(--imperial-gold)', 
        'var(--magic-pink)', 
        'var(--celestial-blue)'
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.backgroundColor = color;
      
      // Random size and animation
      const size = Math.random() * 8 + 2;
      const duration = Math.random() * 2 + 1;
      const delay = Math.random() * 1;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.animation = `particleFloat ${duration}s ${delay}s forwards`;
      
      document.body.appendChild(particle);
      
      // Remove after animation
      setTimeout(() => {
        particle.remove();
      }, duration * 1000);
    }
  }
  
  // Auto-rotate testimonials
  if (testimonials.length > 1) {
    setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }, 5000);
  }

  // ==== SCROLL TO SPELL ====
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollToTopBtn.className = 'scroll-to-top';
  document.body.appendChild(scrollToTopBtn);
  
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Create magical trail
    createScrollTrail();
  });
  
  function createScrollTrail() {
    const trailCount = 30;
    for (let i = 0; i < trailCount; i++) {
      setTimeout(() => {
        const trailDot = document.createElement('div');
        trailDot.className = 'trail-dot';
        
        // Position along scroll path
        const viewportHeight = window.innerHeight;
        const yPos = viewportHeight - (i * (viewportHeight / trailCount));
        
        // Random properties
        const size = Math.random() * 15 + 5;
        const color = `hsl(${Math.random() * 60 + 30}, 100%, 50%)`;
        const delay = Math.random() * 0.5;
        
        trailDot.style.left = `${window.innerWidth - 100}px`;
        trailDot.style.top = `${yPos}px`;
        trailDot.style.width = `${size}px`;
        trailDot.style.height = `${size}px`;
        trailDot.style.backgroundColor = color;
        trailDot.style.animationDelay = `${delay}s`;
        
        document.body.appendChild(trailDot);
        
        setTimeout(() => {
          trailDot.remove();
        }, 1000);
      }, i * 50);
    }
  }
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.opacity = '1';
      scrollToTopBtn.style.visibility = 'visible';
    } else {
      scrollToTopBtn.style.opacity = '0';
      scrollToTopBtn.style.visibility = 'hidden';
    }
  });

  // ==== FORM ENCHANTMENT ====
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Create submission effect
      const submitBtn = this.querySelector('button[type="submit"]');
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;
      
      // Simulate magical submission
      setTimeout(() => {
        // Success animation
        createFireworks(this);
        
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        
        // Reset form after delay
        setTimeout(() => {
          this.reset();
          submitBtn.innerHTML = 'Send Message';
          submitBtn.disabled = false;
        }, 2000);
      }, 1500);
    });
  }
  
  function createFireworks(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const fireworkCount = 8;
    const particleCount = 30;
    
    for (let f = 0; f < fireworkCount; f++) {
      setTimeout(() => {
        // Create firework burst
        for (let p = 0; p < particleCount; p++) {
          const particle = document.createElement('div');
          particle.className = 'firework-particle';
          
          // Random angle and distance
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * 100 + 50;
          
          // Random color
          const hue = Math.random() * 360;
          const color = `hsl(${hue}, 100%, 50%)`;
          
          // Animation
          const duration = Math.random() * 1 + 0.5;
          
          particle.style.left = `${centerX}px`;
          particle.style.top = `${centerY}px`;
          particle.style.backgroundColor = color;
          particle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
          particle.style.animation = `fireworkExplode ${duration}s forwards`;
          
          document.body.appendChild(particle);
          
          setTimeout(() => {
            particle.remove();
          }, duration * 1000);
        }
      }, f * 200);
    }
  }

  // ==== UTILITY MAGIC ====
  function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function() {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }
});

// ==== DYNAMIC STYLES ====
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
  /* MAGIC CURSOR */
  .magic-cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid var(--imperial-gold);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    mix-blend-mode: difference;
    transition: 
      width 0.3s ease, 
      height 0.3s ease,
      background 0.3s ease;
  }
  
  .magic-cursor.hover {
    width: 40px;
    height: 40px;
    background: rgba(255, 215, 0, 0.3);
  }
  
  .cursor-trail {
    position: fixed;
    width: 10px;
    height: 10px;
    background: var(--imperial-gold);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
  }
  
  /* SPARKLES */
  .sparkle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9997;
    animation: sparkle 0.5s forwards;
  }
  
  @keyframes sparkle {
    0% { transform: scale(0); opacity: 0; }
    50% { transform: scale(1); opacity: 1; }
    100% { transform: scale(1.5); opacity: 0; }
  }
  
  /* PARTICLES */
  .particle {
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9996;
    opacity: 0;
  }
  
  @keyframes particleFloat {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(var(--tx, 0), var(--ty, -100px)) scale(0); opacity: 0; }
  }
  
  /* FIREWORKS */
  .firework-particle {
    position: fixed;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9995;
    opacity: 0;
  }
  
  @keyframes fireworkExplode {
    0% { transform: translate(0, 0); opacity: 1; }
    100% { transform: translate(var(--tx), var(--ty)); opacity: 0; }
  }
  
  /* SCROLL TO TOP */
  .scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    background: linear-gradient(45deg, var(--royal-purple), var(--dragon-red));
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 9994;
  }
  
  .scroll-to-top:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 30px var(--magic-pink);
  }
  
  .scroll-to-top.visible {
    opacity: 1;
    visibility: visible;
  }
  
  /* TESTIMONIAL ENTRANCE */
  @keyframes testimonialEntrance {
    0% { transform: translateY(50px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  
  /* TRAIL DOTS */
  .trail-dot {
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9993;
    animation: trailFade 1s forwards;
  }
  
  @keyframes trailFade {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(0.5); opacity: 0; }
  }
`;
document.head.appendChild(dynamicStyles);
