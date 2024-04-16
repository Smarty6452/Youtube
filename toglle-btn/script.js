document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.querySelector('.plane-switch input');
    const container = document.querySelector('.container');
  
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        container.classList.add('fire-border');
        document.documentElement.style.setProperty('--bg-color', '#272727'); // Dark background
      } else {
        container.classList.remove('fire-border');
        document.documentElement.style.setProperty('--bg-color', '#F5F5F5'); // Light background
      }
    });
  });
  