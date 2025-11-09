// FlyProx AI - Sign In Page JavaScript
console.log('🔐 Sign In Page Initialized');

// DOM Elements
let signupForm;
let submitBtn;
let btnText;
let btnSpinner;
let errorMessage;
let errorText;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('📱 Sign In DOM Loaded - Initializing components...');
  initializeElements();
  setupEventListeners();
  loadExistingData();
});

// Initialize DOM elements
function initializeElements() {
  signupForm = document.getElementById('signup-form');
  submitBtn = document.getElementById('submit-btn');
  btnText = document.getElementById('btn-text');
  btnSpinner = document.getElementById('btn-spinner');
  errorMessage = document.getElementById('error-message');
  errorText = document.getElementById('error-text');

  console.log('✅ Sign In elements initialized');
}

// Setup event listeners
function setupEventListeners() {
  // Form submission
  if (signupForm) {
    signupForm.addEventListener('submit', handleFormSubmit);
    console.log('📝 Form submission listener attached');
  }

  console.log('🎯 Sign In event listeners setup complete');
}

// Handle form submission
async function handleFormSubmit(e) {
  e.preventDefault();

  console.log('🚀 Form submission started');

  // Get form values
  const formData = getFormData();

  // Validate form
  const validationError = validateForm(formData);
  if (validationError) {
    showError(validationError);
    return;
  }

  // Show loading state
  setLoadingState(true);
  hideError();

  try {
    // Save to localStorage
    saveFormData(formData);

    console.log('✅ Form data saved successfully');

    // Simulate API call delay
    await simulateApiCall();

    // Save authentication data
    localStorage.setItem('authToken', 'demo-token-' + Date.now());
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('userName', formData.firstName);

    // Redirect to thank you page
    window.location.href = 'thank-you.html';

  } catch (error) {
    console.error('❌ Error during form submission:', error);
    showError('An error occurred during submission. Please try again.');
  } finally {
    setLoadingState(false);
  }
}

// Get form data
function getFormData() {
  return {
    timestamp: new Date().toISOString(),
    firstName: document.getElementById('firstName').value.trim(),
    email: document.getElementById('email').value.trim(),
    companySize: document.getElementById('companySize').value,
    willingToPay: getRadioValue('willingToPay'),
    wouldBuyAt1200: getRadioValue('wouldBuyAt1200'),
    fairPriceFor1000Calls: getRadioValue('fairPriceFor1000Calls'),
    agreeToTerms: document.getElementById('agreeToTerms').checked,
    agreeToMarketing: document.getElementById('agreeToMarketing').checked,
    userAgent: navigator.userAgent,
    page: 'sign-in'
  };
}

// Get radio button value
function getRadioValue(name) {
  const radioGroup = document.getElementsByName(name);
  for (let i = 0; i < radioGroup.length; i++) {
    if (radioGroup[i].checked) {
      return radioGroup[i].value;
    }
  }
  return '';
}

// Validate form data
function validateForm(data) {
  if (!data.firstName) {
    return 'Please enter your first name';
  }

  if (!data.email) {
    return 'Please enter your email address';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return 'Please enter a valid email address';
  }

  if (!data.companySize) {
    return 'Please select your company size';
  }

  if (!data.agreeToTerms) {
    return 'You must agree to the Terms of Service and Privacy Policy';
  }

  return null;
}

// Save form data to localStorage
function saveFormData(formData) {
  try {
    // Save individual form data
    localStorage.setItem('flyproxFormData', JSON.stringify(formData));

    // Save to submissions array
    const existingData = JSON.parse(localStorage.getItem('flyproxSubmissions') || '[]');
    existingData.push(formData);
    localStorage.setItem('flyproxSubmissions', JSON.stringify(existingData));

    // Keep only last 50 submissions to avoid storage limits
    if (existingData.length > 50) {
      existingData.splice(0, existingData.length - 50);
      localStorage.setItem('flyproxSubmissions', JSON.stringify(existingData));
    }

    console.log('💾 Form data saved to localStorage');
  } catch (error) {
    console.error('❌ Error saving form data:', error);
    throw error;
  }
}

// Simulate API call
function simulateApiCall() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });
}

// Set loading state
function setLoadingState(loading) {
  if (loading) {
    submitBtn.disabled = true;
    btnText.classList.add('hidden');
    btnSpinner.classList.remove('hidden');
    console.log('⏳ Loading state activated');
  } else {
    submitBtn.disabled = false;
    btnText.classList.remove('hidden');
    btnSpinner.classList.add('hidden');
    console.log('✅ Loading state deactivated');
  }
}

// Show error message
function showError(message) {
  errorText.textContent = message;
  errorMessage.classList.remove('hidden');
  console.log('❌ Error shown:', message);
}

// Hide error message
function hideError() {
  errorMessage.classList.add('hidden');
}


// Load existing data on page load
function loadExistingData() {
  try {
    // Check if user is already authenticated
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      console.log('🔑 User already authenticated');
      // You could redirect to dashboard here if it existed
    }

    // Log submission count
    const submissions = JSON.parse(localStorage.getItem('flyproxSubmissions') || '[]');
    console.log(`📊 Found ${submissions.length} existing submissions`);

  } catch (error) {
    console.error('❌ Error loading existing data:', error);
  }
}

// Export data function (can be called from browser console)
window.exportFlyProxData = function() {
  try {
    const submissions = JSON.parse(localStorage.getItem('flyproxSubmissions') || '[]');
    const dataStr = JSON.stringify(submissions, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `flyprox-submissions-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    console.log('📥 Data exported successfully');
    return true;
  } catch (error) {
    console.error('❌ Error exporting data:', error);
    return false;
  }
};

// Clear data function (can be called from browser console)
window.clearFlyProxData = function() {
  try {
    if (confirm('Are you sure you want to clear all FlyProx data? This cannot be undone.')) {
      localStorage.removeItem('flyproxFormData');
      localStorage.removeItem('flyproxSubmissions');
      localStorage.removeItem('authToken');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userName');
      console.log('🗑️ All FlyProx data cleared');
      return true;
    }
    return false;
  } catch (error) {
    console.error('❌ Error clearing data:', error);
    return false;
  }
};

// Error handling
window.addEventListener('error', (e) => {
  console.error('❌ JavaScript Error on Sign In page:', e.error);
});

// Performance monitoring
if ('performance' in window) {
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0];
    console.log(`🚀 Sign In page loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
  });
}