// FlyProx AI - Main JavaScript for Static Site
console.log('🚀 FlyProx AI - Static Site Initialized');

// Features data
const features = [
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>`,
    title: 'Natural Voice Conversations',
    description: 'Advanced AI that speaks naturally, understands context, and handles complex customer queries with human-like empathy.',
    details: ['100+ languages supported', 'Context-aware responses', 'Emotion detection', 'Custom voice training']
  },
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>`,
    title: '24/7 Availability',
    description: 'Never miss a lead or customer inquiry. Our AI agents work around the clock, including weekends and holidays.',
    details: ['Zero downtime', 'Instant response', 'Holiday coverage', 'Time zone management']
  },
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>`,
    title: 'Smart Analytics',
    description: 'Comprehensive insights into customer interactions, agent performance, and conversion metrics.',
    details: ['Real-time dashboards', 'Conversation analytics', 'Sentiment analysis', 'Custom reports']
  },
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>`,
    title: 'Easy Integration',
    description: 'Seamlessly integrate with your existing CRM, helpdesk, and communication tools.',
    details: ['API access', 'Zapier integration', 'Webhook support', 'Custom integrations']
  },
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>`,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance with GDPR, HIPAA, and SOC 2 standards.',
    details: ['End-to-end encryption', 'GDPR compliant', 'SOC 2 certified', 'Data residency options']
  },
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>`,
    title: 'Lightning Fast Setup',
    description: 'Deploy your AI agents in minutes, not months. No coding required for basic setup.',
    details: ['5-minute setup', 'No-code builder', 'Pre-built templates', 'Quick start wizard']
  }
];

// DOM Elements
let header;
let mobileMenuBtn;
let mobileMenu;
let menuIcon;
let closeIcon;
let featuresGrid;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('📱 DOM Loaded - Initializing components...');
  initializeElements();
  setupEventListeners();
  renderFeatures();
  updateCurrentYear();
  setupScrollEffects();
});

// Initialize DOM elements
function initializeElements() {
  header = document.getElementById('header');
  mobileMenuBtn = document.getElementById('mobile-menu-btn');
  mobileMenu = document.getElementById('mobile-menu');
  menuIcon = document.getElementById('menu-icon');
  closeIcon = document.getElementById('close-icon');
  featuresGrid = document.getElementById('features-grid');

  console.log('✅ Elements initialized');
}

// Setup event listeners
function setupEventListeners() {
  // Mobile menu toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    console.log('📱 Mobile menu listener attached');
  }

  // Mobile menu links
  const mobileLinks = document.querySelectorAll('.mobile-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(() => {
        closeMobileMenu();
      }, 100);
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  console.log('🎯 Event listeners setup complete');
}

// Toggle mobile menu
function toggleMobileMenu() {
  const isHidden = mobileMenu.classList.contains('hidden');

  if (isHidden) {
    mobileMenu.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';
  } else {
    closeMobileMenu();
  }
}

// Close mobile menu
function closeMobileMenu() {
  mobileMenu.classList.add('hidden');
  menuIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden');
  // Restore body scroll
  document.body.style.overflow = '';
}

// Render features dynamically
function renderFeatures() {
  if (!featuresGrid) {
    console.warn('⚠️ Features grid not found');
    return;
  }

  featuresGrid.innerHTML = features.map((feature, index) => `
    <div class="feature-card p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-yellow-500/50 cursor-pointer" data-feature-index="${index}">
      <div class="flex items-center mb-4">
        <div class="p-3 bg-yellow-500/10 rounded-lg mr-4">
          <div class="text-yellow-400">${feature.icon}</div>
        </div>
        <h3 class="text-xl font-semibold text-white">${feature.title}</h3>
      </div>
      <p class="text-gray-400 mb-4">${feature.description}</p>
      <ul class="space-y-2">
        ${feature.details.map(detail => `
          <li class="flex items-center text-sm text-gray-500">
            <svg class="w-4 h-4 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            ${detail}
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');

  // Add click handlers to feature cards
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', function() {
      // Remove active state from all cards
      document.querySelectorAll('.feature-card').forEach(c => {
        c.classList.remove('border-2', 'border-yellow-500', 'shadow-lg', 'shadow-yellow-500/20');
      });

      // Add active state to clicked card
      this.classList.add('border-2', 'border-yellow-500', 'shadow-lg', 'shadow-yellow-500/20');
    });
  });

  console.log('⭐ Features rendered successfully');
}

// Update current year in footer
function updateCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Setup scroll effects
function setupScrollEffects() {
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Header background effect
    if (header) {
      if (currentScrollY > 20) {
        header.classList.add('bg-black/95', 'backdrop-blur-sm', 'border-b', 'border-yellow-500/20');
        header.classList.remove('bg-transparent');
      } else {
        header.classList.remove('bg-black/95', 'backdrop-blur-sm', 'border-b', 'border-yellow-500/20');
        header.classList.add('bg-transparent');
      }
    }

    lastScrollY = currentScrollY;
  });

  console.log('🎨 Scroll effects initialized');
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add some entrance animations
function addEntranceAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe feature cards
  document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

// Initialize entrance animations after a short delay
setTimeout(addEntranceAnimations, 100);

// Error handling
window.addEventListener('error', (e) => {
  console.error('❌ JavaScript Error:', e.error);
});

// Performance monitoring
if ('performance' in window) {
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0];
    console.log(`🚀 Page loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
  });
}