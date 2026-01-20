// Aulo Bros - Main JavaScript
// Simple vanilla JS for mobile navigation toggle

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('.nav');

  if (mobileNavToggle && nav) {
    mobileNavToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      
      // Toggle aria-expanded for accessibility
      const isExpanded = nav.classList.contains('active');
      mobileNavToggle.setAttribute('aria-expanded', isExpanded);
      
      // Animate hamburger icon
      const spans = mobileNavToggle.querySelectorAll('span');
      if (isExpanded) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', function(event) {
      if (!nav.contains(event.target) && !mobileNavToggle.contains(event.target)) {
        nav.classList.remove('active');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        
        const spans = mobileNavToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close mobile nav when pressing Escape
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && nav.classList.contains('active')) {
        nav.classList.remove('active');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        mobileNavToggle.focus();
        
        const spans = mobileNavToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  // Smooth scroll for anchor links (if any are added later)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Add active class to current page nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
