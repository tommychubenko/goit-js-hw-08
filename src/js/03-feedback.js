import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const email = document.querySelector('.feedback-form input[type=email]');
const submit = document.querySelector('.feedback-form button[type=submit]');
const storageKey = "feedback-form-state";
const key = localStorage.getItem(storageKey);
const formData = {};


if (key) {
    const formData = JSON.parse(key);
    console.log(formData)
    textarea.value = formData.message;
    email.value = formData.email

} 


textarea.addEventListener('input', throttle(saveData, 1000));
email.addEventListener('input', throttle(saveData, 1000));




function saveData() {
    formData.message = form.elements.message.value;
    formData.email = form.elements.email.value;
    console.log(formData)
    localStorage.setItem(storageKey, JSON.stringify(formData));
}


submit.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear();
    textarea.value = "";
    email.value = "";
    console.log("Відправили не бекенд")
    console.log(formData)
});





