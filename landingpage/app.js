document.addEventListener('DOMContentLoaded', () => {
  // --- Sticky Header Scroll Effect ---
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Mobile Navigation Menu ---
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (menuToggle && mainNav) {
    const closeMenu = () => {
      menuToggle.classList.remove('active');
      mainNav.classList.remove('active');
      header.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open menu');
    };

    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('active');
      menuToggle.classList.toggle('active', isOpen);
      header.classList.toggle('menu-open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
  }

  // --- Dynamic Vibe (Theme) Switcher ---
  const vibeDots = document.querySelectorAll('.vibe-dot');
  vibeDots.forEach(dot => {
    dot.addEventListener('click', () => {
      // Remove active class from all dots
      vibeDots.forEach(d => d.classList.remove('active'));
      // Add active to current
      dot.classList.add('active');
      
      const selectedVibe = dot.getAttribute('data-theme-value');
      // Set attribute on HTML root element
      document.documentElement.setAttribute('data-vibe', selectedVibe);
    });
  });

  // --- Hero Terminal Typing Simulation ---
  const typedTextSpan = document.querySelector('.typed-text');
  const heroUiPreview = document.querySelector('.generating-ui');
  const simulatedCard = document.querySelector('.simulated-card');
  const simulatedBtn = document.querySelector('.simulated-btn');
  
  const prompts = [
    "Build a premium dark-themed card with neon glow...",
    "Make the card buttons float on hover...",
    "Apply purple-to-indigo gradient background...",
    "Make the entire layout fully responsive..."
  ];
  
  let promptIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 70;

  function typeHeroPrompt() {
    const currentPrompt = prompts[promptIndex];
    
    if (isDeleting) {
      // Deleting text
      typedTextSpan.textContent = currentPrompt.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 30;
    } else {
      // Typing text
      typedTextSpan.textContent = currentPrompt.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 75;
    }

    // Adjust speed on punctuation
    if (!isDeleting && charIndex > 0 && currentPrompt[charIndex - 1] === ' ') {
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPrompt.length) {
      // Finished typing prompt: wait, show preview generation, then delete
      isDeleting = true;
      typingSpeed = 2000; // Pause at end of sentence
      
      // Animate preview block
      setTimeout(() => {
        heroUiPreview.classList.add('active');
        
        // Dynamically shift simulated colors based on active theme or current prompt
        if (promptIndex === 0) {
          simulatedBtn.textContent = "LAUNCH SYSTEM";
        } else if (promptIndex === 1) {
          simulatedBtn.textContent = "CONNECTED";
        } else if (promptIndex === 2) {
          simulatedBtn.textContent = "VIBE SYNCED";
        } else {
          simulatedBtn.textContent = "FLOW ACTIVE";
        }
      }, 300);

    } else if (isDeleting && charIndex === 0) {
      // Finished deleting: move to next prompt
      isDeleting = false;
      heroUiPreview.classList.remove('active');
      promptIndex = (promptIndex + 1) % prompts.length;
      typingSpeed = 500; // Pause before starting to type next prompt
    }

    setTimeout(typeHeroPrompt, typingSpeed);
  }

  // Start typing simulation after 1 second
  setTimeout(typeHeroPrompt, 1000);


  // --- Vibe Console Playground ---
  const promptOptions = document.querySelectorAll('.prompt-option');
  const loader = document.querySelector('.loader-container');
  const widgets = document.querySelectorAll('.playground-widget');
  const loaderText = document.getElementById('loader-text-status');

  const loadingStatuses = [
    "Analyzing vibe parameters...",
    "Generating HTML layout...",
    "Styling with glassmorphism values...",
    "Injecting interactive scripts...",
    "Vibe coding complete!"
  ];

  function loadPlaygroundWidget(targetWidgetId) {
    // Show loader
    loader.classList.add('active');
    
    // Animate loader text statuses
    let statusIdx = 0;
    loaderText.textContent = loadingStatuses[0];
    
    const interval = setInterval(() => {
      statusIdx++;
      if (statusIdx < loadingStatuses.length) {
        loaderText.textContent = loadingStatuses[statusIdx];
      }
    }, 250);

    // After 1.2s, hide loader and show the target widget
    setTimeout(() => {
      clearInterval(interval);
      loader.classList.remove('active');
      
      // Hide all widgets, then show active
      widgets.forEach(widget => {
        widget.classList.remove('active');
      });
      
      const activeWidget = document.getElementById(targetWidgetId);
      if (activeWidget) {
        activeWidget.classList.add('active');
      }
    }, 1300);
  }

  promptOptions.forEach(option => {
    option.addEventListener('click', () => {
      // Do nothing if already active
      if (option.classList.contains('active')) return;

      // Update prompt list active states
      promptOptions.forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');

      const targetWidget = option.getAttribute('data-widget');
      loadPlaygroundWidget(targetWidget);
    });
  });

  // --- Music Player Widget Interactive Elements ---
  const playBtn = document.querySelector('.music-btn.play');
  const playIcon = playBtn ? playBtn.querySelector('svg') : null;
  const musicProgressBar = document.querySelector('.music-progress-bar');
  let isPlaying = false;
  let progressInterval;
  let progressPercentage = 35;

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      if (isPlaying) {
        // Change button to pause symbol (representing double vertical bar)
        playBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style="width:20px;height:20px;">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
          </svg>
        `;
        // Progress bar animation simulator
        progressInterval = setInterval(() => {
          if (progressPercentage < 100) {
            progressPercentage += 0.5;
            if (musicProgressBar) {
              musicProgressBar.style.width = progressPercentage + '%';
            }
          } else {
            progressPercentage = 0;
          }
        }, 100);
      } else {
        // Change button back to play symbol (triangle)
        playBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style="width:20px;height:20px;">
            <path d="M8 5v14l11-7z"/>
          </svg>
        `;
        clearInterval(progressInterval);
      }
    });
  }


  // --- Testimonials Carousel ---
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const nextBtn = document.querySelector('.carousel-nav-btn.next');
  const prevBtn = document.querySelector('.carousel-nav-btn.prev');
  const dotContainer = document.querySelector('.carousel-dots');
  
  if (track && slides.length > 0) {
    let currentSlideIndex = 0;
    
    // Create navigation dots dynamically
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('carousel-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        goToSlide(index);
      });
      dotContainer.appendChild(dot);
    });

    const dots = Array.from(document.querySelectorAll('.carousel-dot'));

    function updateCarouselState() {
      // Translate the slide track
      track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
      
      // Update dots active classes
      dots.forEach((dot, index) => {
        if (index === currentSlideIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    function goToSlide(index) {
      currentSlideIndex = index;
      updateCarouselState();
    }

    function nextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      updateCarouselState();
    }

    function prevSlide() {
      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      updateCarouselState();
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-advance testimonials every 6 seconds
    let autoPlayInterval = setInterval(nextSlide, 6000);

    // Reset timer on manual navigation
    [nextBtn, prevBtn, ...dots].forEach(element => {
      element.addEventListener('click', () => {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextSlide, 6000);
      });
    });
  }


  // --- Newsletter Sign-Up Form Validation ---
  const newsletterForm = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('email-input');
  const emailError = document.getElementById('email-error');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const emailValue = emailInput.value.trim();
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      if (emailValue === "") {
        emailError.textContent = "Email is required.";
        emailError.classList.add('active');
        emailInput.style.borderColor = "#ef4444";
      } else if (!emailPattern.test(emailValue)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.classList.add('active');
        emailInput.style.borderColor = "#ef4444";
      } else {
        // Success
        emailError.classList.remove('active');
        emailInput.style.borderColor = "";
        
        newsletterForm.classList.add('success');
      }
    });

    // Clear error on input typing
    emailInput.addEventListener('input', () => {
      emailError.classList.remove('active');
      emailInput.style.borderColor = "";
    });
  }
});
