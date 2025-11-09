// FlyProx AI - Thank You Page JavaScript
console.log('🎉 Thank You Page Initialized');

// DOM Elements
let userDetails;
let downloadDataBtn;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('📱 Thank You DOM Loaded - Initializing components...');
  initializeElements();
  setupEventListeners();
  loadUserData();
  createConfetti();
});

// Initialize DOM elements
function initializeElements() {
  userDetails = document.getElementById('user-details');
  downloadDataBtn = document.getElementById('download-data-btn');

  console.log('✅ Thank You elements initialized');
}

// Setup event listeners
function setupEventListeners() {
  // Download data button
  if (downloadDataBtn) {
    downloadDataBtn.addEventListener('click', downloadUserData);
    console.log('📥 Download data listener attached');
  }

  console.log('🎯 Thank You event listeners setup complete');
}

// Load user data from localStorage
function loadUserData() {
  try {
    // Get auth data
    const authToken = localStorage.getItem('authToken');
    const userEmail = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');

    // Get form data
    const formData = JSON.parse(localStorage.getItem('flyproxFormData') || '{}');

    if (userDetails) {
      if (userName || formData.firstName) {
        userDetails.innerHTML = `
          <div class="space-y-3">
            <div class="flex justify-between">
              <span class="text-gray-400">Name:</span>
              <span class="text-white font-medium">${userName || formData.firstName || 'Not provided'}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Email:</span>
              <span class="text-white font-medium">${userEmail || formData.email || 'Not provided'}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Company Size:</span>
              <span class="text-white font-medium">${formData.companySize || 'Not provided'}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Status:</span>
              <span class="text-green-400 font-medium">✓ Successfully Registered</span>
            </div>
            ${formData.timestamp ? `
            <div class="flex justify-between">
              <span class="text-gray-400">Registered:</span>
              <span class="text-white font-medium">${formatDate(formData.timestamp)}</span>
            </div>
            ` : ''}
          </div>
        `;
      } else {
        userDetails.innerHTML = '<p class="text-gray-500 text-center">No user information found</p>';
      }
    }

    console.log('👤 User data loaded successfully');

  } catch (error) {
    console.error('❌ Error loading user data:', error);
    if (userDetails) {
      userDetails.innerHTML = '<p class="text-red-400 text-center">Error loading user information</p>';
    }
  }
}

// Download user data
function downloadUserData() {
  try {
    // Collect all relevant data
    const userData = {
      authData: {
        authToken: localStorage.getItem('authToken'),
        userEmail: localStorage.getItem('userEmail'),
        userName: localStorage.getItem('userName')
      },
      formData: JSON.parse(localStorage.getItem('flyproxFormData') || '{}'),
      submissionHistory: JSON.parse(localStorage.getItem('flyproxSubmissions') || '[]'),
      exportDate: new Date().toISOString()
    };

    // Create JSON string
    const dataStr = JSON.stringify(userData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Create download link
    const a = document.createElement('a');
    a.href = url;
    a.download = `flyprox-user-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Show success feedback
    const originalText = downloadDataBtn.textContent;
    downloadDataBtn.textContent = '✓ Downloaded';
    downloadDataBtn.classList.add('bg-green-600', 'border-green-600');

    setTimeout(() => {
      downloadDataBtn.textContent = originalText;
      downloadDataBtn.classList.remove('bg-green-600', 'border-green-600');
    }, 2000);

    console.log('📥 User data downloaded successfully');

  } catch (error) {
    console.error('❌ Error downloading user data:', error);

    // Show error feedback
    const originalText = downloadDataBtn.textContent;
    downloadDataBtn.textContent = '✗ Error';
    downloadDataBtn.classList.add('bg-red-600', 'border-red-600');

    setTimeout(() => {
      downloadDataBtn.textContent = originalText;
      downloadDataBtn.classList.remove('bg-red-600', 'border-red-600');
    }, 2000);
  }
}

// Create confetti effect
function createConfetti() {
  const colors = ['#facc15', '#f59e0b', '#fbbf24', '#fde047'];
  const confettiCount = 50;

  for (let i = 0; i < confettiCount; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 3 + 's';
      confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
      document.body.appendChild(confetti);

      // Remove confetti after animation
      setTimeout(() => {
        if (confetti.parentNode) {
          confetti.parentNode.removeChild(confetti);
        }
      }, 6000);
    }, i * 50);
  }

  console.log('🎊 Confetti effect created');
}

// Format date
function formatDate(timestamp) {
  try {
    const date = new Date(timestamp);
    return date.toLocaleString();
  } catch (error) {
    return 'Invalid date';
  }
}

// Check authentication status
function checkAuthentication() {
  const authToken = localStorage.getItem('authToken');
  if (!authToken) {
    // If not authenticated, redirect to sign-in
    console.log('🔐 No authentication token found, redirecting to sign-in...');
    window.location.href = 'sign-in.html';
    return false;
  }
  return true;
}

// Auto-redirect if not authenticated
setTimeout(() => {
  if (!checkAuthentication()) {
    return;
  }
}, 1000);

// Clean up old data (optional)
function cleanupOldData() {
  try {
    // Keep only the latest 30 submissions
    const submissions = JSON.parse(localStorage.getItem('flyproxSubmissions') || '[]');
    if (submissions.length > 30) {
      const recentSubmissions = submissions.slice(-30);
      localStorage.setItem('flyproxSubmissions', JSON.stringify(recentSubmissions));
      console.log('🧹 Cleaned up old submission data');
    }
  } catch (error) {
    console.error('❌ Error cleaning up old data:', error);
  }
}

// Run cleanup
setTimeout(cleanupOldData, 2000);

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
  // Ctrl/Cmd + D for download
  if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
    e.preventDefault();
    downloadUserData();
  }

  // ESC to go home
  if (e.key === 'Escape') {
    window.location.href = 'index.html';
  }
});

// Performance monitoring
if ('performance' in window) {
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0];
    console.log(`🚀 Thank You page loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
  });
}

// Error handling
window.addEventListener('error', (e) => {
  console.error('❌ JavaScript Error on Thank You page:', e.error);
});

// Analytics tracking (placeholder)
function trackEvent(eventName, data) {
  console.log('📊 Analytics Event:', eventName, data);
  // This would integrate with Google Analytics, Mixpanel, etc.
}

// Track page view
trackEvent('thank_you_page_viewed', {
  timestamp: new Date().toISOString(),
  userAgent: navigator.userAgent
});