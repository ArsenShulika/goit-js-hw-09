'use strict';

const formSubmit = document.querySelector('form.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
formSubmit.addEventListener('input', hadlerInput);
formSubmit.addEventListener('submit', hadlerSubmit);
const value = localStorage.getItem('feedback-form-state') ?? '';

try {
  const data = JSON.parse(value);
  email.value = data.email.trim();
  message.value = data.message.trim();
} catch (error) {}

function hadlerInput(event) {
  const feedbackForm = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  const jsn = JSON.stringify(feedbackForm);
  localStorage.setItem('feedback-form-state', jsn);
}

function hadlerSubmit(event) {
  event.preventDefault();
  if (email.value && message.value) {
    const value = localStorage.getItem('feedback-form-state');
    const data = JSON.parse(value);
    console.log(data);
    localStorage.removeItem('feedback-form-state');
    formSubmit.reset();
  } else {
    alert('Введіть обидва значення');
  }
}
