// FlyProx AI - Pricing Page JavaScript
console.log('💰 FlyProx AI - Pricing Page Initialized');

// DOM Elements
let rangeSlider;
let minutesDisplay;
let priceDisplay;
let accordionButtons;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('📱 Pricing DOM Loaded - Initializing components...');
  initializeElements();
  setupEventListeners();
  updateScrolling();
});

// Initialize DOM elements
function initializeElements() {
  rangeSlider = document.querySelector('input[type="range"]');
  minutesDisplay = document.querySelector('.text-3xl.font-bold.text-yellow-400');
  priceDisplay = document.querySelector('.text-4xl .text-white');
  accordionButtons = document.querySelectorAll('button');

  console.log('✅ Pricing elements initialized');
}

// Setup event listeners
function setupEventListeners() {
  // Range slider functionality
  if (rangeSlider) {
    rangeSlider.addEventListener('input', function(e) {
      updatePricing(e.target.value);
    });
    console.log('🎚️ Range slider listener attached');
  }

  // Accordion functionality
  accordionButtons.forEach(button => {
    if (button.querySelector('h3')) {
      button.addEventListener('click', function() {
        toggleAccordion(this);
      });
    }
  });

  console.log('🎯 Pricing event listeners setup complete');
}

// Update pricing based on slider value
function updatePricing(minutes) {
  if (minutesDisplay) {
    minutesDisplay.textContent = minutes;
  }

  const price = Math.round(minutes * 0.20);
  const priceElement = document.querySelector('.text-4xl');
  if (priceElement) {
    priceElement.innerHTML = `<span class="text-white">$${price}</span><span class="text-xl text-gray-400">/month</span>`;
  }

  // Update slider background
  const percentage = ((minutes - 100) / (3000 - 100)) * 100;
  if (rangeSlider) {
    rangeSlider.style.background = `linear-gradient(to right, rgb(250, 204, 21) 0%, rgb(250, 204, 21) ${percentage}%, rgb(55, 65, 81) ${percentage}%, rgb(55, 65, 81) 100%)`;
  }
}

// Toggle accordion
function toggleAccordion(button) {
  // Simple accordion toggle (would need content expansion in full implementation)
  const icon = button.querySelector('svg');
  if (icon) {
    icon.classList.toggle('rotate-180');
  }
}

// Fix scrolling issues
function updateScrolling() {
  // Remove any potential scroll-blocking styles
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';

  // Ensure smooth scrolling works
  document.documentElement.style.scrollBehavior = 'smooth';

  console.log('🎨 Scrolling functionality updated');
}

// Handle window resize
window.addEventListener('resize', function() {
  updateScrolling();
});

// Error handling
window.addEventListener('error', (e) => {
  console.error('❌ Pricing Page JavaScript Error:', e.error);
});

// Performance monitoring
if ('performance' in window) {
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0];
    console.log(`🚀 Pricing page loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
  });
}