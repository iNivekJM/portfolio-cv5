// Scroll reveal animations
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;
    
    reveals.forEach((reveal) => {
      const elementTop = reveal.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll, { passive: true });
  revealOnScroll(); // Trigger on load
}

// Animate skill bars on intersection
function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar');
  
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute('data-width');
        entry.target.style.width = width + '%';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  skillBars.forEach((bar) => {
    observer.observe(bar);
  });
}

// Parallax effect for hero background
function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  if (parallaxElements.length === 0) return;
  
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach((element) => {
          const speed = element.getAttribute('data-parallax') || '0.5';
          const yPos = -(scrolled * parseFloat(speed));
          element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Add hover effect to navigation links on scroll
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('header nav a[href^="#"]');
  
  const highlightNav = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('text-primary-600', 'dark:text-primary-400');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-primary-600', 'dark:text-primary-400');
          }
        });
      }
    });
  };
  
  window.addEventListener('scroll', highlightNav, { passive: true });
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initSkillBars();
  initSmoothScroll();
  initNavHighlight();
  
  // Init parallax only on desktop
  if (window.innerWidth > 768) {
    initParallax();
  }
});

// Add additional keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  .floating {
    animation: float 3s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
  
  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(14, 165, 233, 0.3);
    }
    50% {
      box-shadow: 0 0 60px rgba(14, 165, 233, 0.6);
    }
  }
  
  @keyframes gradient-xy {
    0%, 100% {
      background-size: 400% 400%;
      background-position: left center;
    }
    50% {
      background-size: 200% 200%;
      background-position: right center;
    }
  }
  
  .animate-gradient-text {
    animation: gradient-xy 3s ease infinite;
  }
`;
document.head.appendChild(style);
