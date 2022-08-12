export default function reservation() {
  const container = document.createElement('div');
  container.classList.add('reservation');

  const title = document.createElement('h1');
  title.textContent = 'book a table';

  const text = document.createElement('p');
  text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod';

  container.appendChild(title);
  container.appendChild(text);
  container.appendChild(form());

  return container;
}

function form() {
  const form = document.createElement('form');
  form.setAttribute('method', 'post');
  form.classList.add('reservation-form');

  const formContainer = document.createElement('div');
  formContainer.classList.add('form-container');

  const name = document.createElement('input');
  name.setAttribute('type', 'text');
  name.setAttribute('name', 'name');
  name.setAttribute('id', 'name');
  name.setAttribute('placeholder', 'Your Name');

  const phone = document.createElement('input');
  phone.setAttribute('type', 'tel');
  phone.setAttribute('name', 'phoneNumber');
  phone.setAttribute('id', 'phone');
  phone.setAttribute('placeholder', 'Your Phone Number');

  const date = document.createElement('input');
  date.setAttribute('type', 'date');
  date.setAttribute('name', 'date');
  date.setAttribute('id', 'date');

  const time = document.createElement('input');
  time.setAttribute('type', 'time');
  time.setAttribute('name', 'time');
  time.setAttribute('id', 'time');

  formContainer.appendChild(name);
  formContainer.appendChild(phone);
  formContainer.appendChild(date);
  formContainer.appendChild(time);

  const message = document.createElement('textarea');
  message.setAttribute('placeholder', 'Enter Your Requirements.');
  message.setAttribute('id', 'message');
  message.setAttribute('rows', '8');

  const submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.textContent = 'Submit';

  form.appendChild(formContainer);
  form.appendChild(message);
  form.appendChild(submit);

  return form;
}