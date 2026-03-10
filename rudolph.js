// JavaScript for handling the account dropdown menu on the home pages (garfield.html, prefield.html)

// Get references to the account button and dropdown menu
const accountBtn = document.getElementById('account-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

// Check if elements exist before adding event listeners
if (accountBtn && dropdownMenu) {
  // Event listener for account button click to toggle dropdown
  accountBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
  });

  // Event listener for clicks outside the dropdown to close it
  document.addEventListener('click', (e) => {
    // Check if the click is outside the account dropdown container
    if (!e.target.closest('.account-dropdown')) {
      dropdownMenu.classList.remove('active');
    }
  });
}
