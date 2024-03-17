'use strict';

const formSubmit = document.querySelector('form.feedback-form');
let email = document.querySelector('[name="email"]');
let message = document.querySelector('[name="message"]');
formSubmit.addEventListener('input', hadlerInput);
formSubmit.addEventListener('submit', hadlerSubmit);
let value = localStorage.getItem('feedback-form-state') ?? '';

try {
  let data = JSON.parse(value);
  email.value = data.email.trim();
  message.value = data.message.trim();
} catch {
  console.log('parse error');
}

function hadlerInput(event) {
  const feedbackForm = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  let jsn = JSON.stringify(feedbackForm);
  localStorage.setItem('feedback-form-state', jsn);
}

function hadlerSubmit(event) {
  event.preventDefault();
  if (email.value && message.value) {
    let value = localStorage.getItem('feedback-form-state');
    let data = JSON.parse(value);
    console.log(data);
    email.value = '';
    message.value = '';
    localStorage.removeItem('feedback-form-state');
  } else {
    alert('Введіть обидва значення');
  }
}
