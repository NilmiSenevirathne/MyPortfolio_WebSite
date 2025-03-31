document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show loading indicator
    const loading = form.querySelector('.loading');
    const sentMessage = form.querySelector('.sent-message');
    const errorMessage = form.querySelector('.error-message');
    
    loading.style.display = 'block';
    sentMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    
    // Option 1: Use FormData and send directly to Web3Forms
    const formData = new FormData(form);
    
    // Web3Forms supports CORS, but needs additional configuration for local development
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
      mode: 'cors', // Important: this must be 'cors', not 'no-cors'
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      loading.style.display = 'none';
      
      if (data.success) {
        // Success - show the success message
        sentMessage.style.display = 'block';
        form.reset();
      } else {
        // Show specific error from Web3Forms
        errorMessage.textContent = data.message || "Form submission failed. Please try again.";
        errorMessage.style.display = 'block';
      }
    })
    .catch(error => {
      loading.style.display = 'none';
      
      // For local development, use the PHP fallback
      if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
        sendToLocalPHP(form);
      } else {
        errorMessage.textContent = "An error occurred. Please try again later.";
        errorMessage.style.display = 'block';
        console.error('Error:', error);
      }
    });
  });
  
  // Function to handle local development with PHP
  function sendToLocalPHP(form) {
    const formData = new FormData(form);
    const loading = form.querySelector('.loading');
    const sentMessage = form.querySelector('.sent-message');
    const errorMessage = form.querySelector('.error-message');
    
    // Send to your local PHP script instead
    fetch('process_form.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      loading.style.display = 'none';
      
      if (data.trim() === 'OK') {
        sentMessage.style.display = 'block';
        form.reset();
      } else {
        errorMessage.textContent = data || "Form submission failed. Please try again.";
        errorMessage.style.display = 'block';
      }
    })
    .catch(error => {
      loading.style.display = 'none';
      errorMessage.textContent = "An error occurred with the local PHP handler.";
      errorMessage.style.display = 'block';
      console.error('PHP Error:', error);
    });
  }
});