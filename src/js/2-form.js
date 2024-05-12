const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', handleInput);
messagelocalStorage();

let formData = {
  email: '',
  message: '',
};

function handleSubmit(event) {
  event.preventDefault();
  const { email, message } = event.target.elements;
  if (email.value === '' || message.value === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function handleInput(event) {
  const key = event.target.name;
  formData[key] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function messagelocalStorage() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!savedMessage) {
    return;
  }

  const { email, message } = form.elements;
  email.value = savedMessage.email;
  message.value = savedMessage.message;
}
