
const fullNameInput = document.getElementById('fullNameInput');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phoneInput');
const addressInput = document.getElementById('addressInput');
const saveChangesBtn = document.getElementById('saveChangesBtn');


saveChangesBtn.addEventListener('click', () => {

    const fullName = fullNameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const address = addressInput.value;


    document.querySelector('.main-body h4').textContent = fullName;
    document.querySelector('.main-body .text-secondary.mb-1').textContent = email;
    document.querySelector('.main-body .text-muted.font-size-sm').textContent = address;


});