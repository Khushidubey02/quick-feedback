const form = document.getElementById('feedback-form');
const thankYouBox = document.getElementById('thank-you');

form.addEventListener('submit', function (e) {
  e.preventDefault(); 

  
  const name = document.getElementById('user-name').value;
  const email = document.getElementById('user-email').value;
  const rating = document.getElementById('user-rating').value;
  const feedback = document.getElementById('user-feedback').value;

  
  console.log('Feedback submitted:', { name, email, rating, feedback });

  
  form.style.display = 'none';
  thankYouBox.classList.remove('hidden');
});
