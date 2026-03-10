// JavaScript for handling tab switching on the authentication page (snoopy.html)

// Get references to the tab buttons and forms
const tabSignIn = document.getElementById('tab-signin');
const tabSignUp = document.getElementById('tab-signup');
const signinForm = document.getElementById('signin-form');
const signupForm = document.getElementById('signup-form');

// Check if elements exist before adding event listeners
if (tabSignIn && tabSignUp) {
  // Event listener for sign-in tab click
  tabSignIn.addEventListener('click', () => {
    // Add active class to sign-in tab, remove from sign-up tab
    tabSignIn.classList.add('active');
    tabSignUp.classList.remove('active');
    // Show sign-in form, hide sign-up form
    signinForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
  });

  // Event listener for sign-up tab click
  tabSignUp.addEventListener('click', () => {
    // Add active class to sign-up tab, remove from sign-in tab
    tabSignUp.classList.add('active');
    tabSignIn.classList.remove('active');
    // Show sign-up form, hide sign-in form
    signupForm.classList.remove('hidden');
    signinForm.classList.add('hidden');
  });
}