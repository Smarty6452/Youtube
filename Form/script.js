const formCard = document.getElementById('formCard');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const submitBtn = document.getElementById('submitBtn');
const signupBtn = document.getElementById('signupBtn');

signupBtn.addEventListener('click', (event) => {
  event.preventDefault();
  formCard.classList.toggle('flipped');
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formCard.classList.toggle('flipped');
});
