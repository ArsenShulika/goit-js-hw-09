'use strict';

const formSubmit = document.querySelector('form.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
formSubmit.addEventListener('input', hadleInput);
formSubmit.addEventListener('submit', hadleSubmit);
const value = localStorage.getItem('feedback-form-state') ?? {};

try {
  const data = JSON.parse(value);
  if (data && data.email && data.message) {
    email.value = data.email.trim();
    message.value = data.message.trim();
  }
} catch (error) {
  console.log('error');
}

function hadleInput(event) {
  const feedbackForm = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  const jsn = JSON.stringify(feedbackForm);
  localStorage.setItem('feedback-form-state', jsn);
}

function hadleSubmit(event) {
  event.preventDefault();
  if (email.value && message.value) {
    const value = localStorage.getItem('feedback-form-state');
    const data = JSON.parse(value);
    if (data) {
      console.log(data);
    }
    localStorage.removeItem('feedback-form-state');
    formSubmit.reset();
  } else {
    alert('Введіть обидва значення');
  }
}
