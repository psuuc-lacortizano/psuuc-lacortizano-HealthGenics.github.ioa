const validEmail = 'noah';
const validPassword = 'password';

function login() {
  const username = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  if (username == validEmail && password == validPassword) {
    alert('Login successful!');
    window.location.href = 'dashboard.html';
  } else if(username == ""){
    alert('Please enter email address');
  return;  
  }
  else if(password == ""){
    alert('Please enter password');
    return;  
    }
    else{
      alert('Invalid email or password. Please try again.')
    return;
    }
}

