function VerifyUser() {// let btnEnter = document.getElementById ('btnEnter');
  console.log('clicked')
  if (document.getElementById ('email').value === 'tryber@teste.com' && document.getElementById ('password').value === '123456') {
    alert('Olá, Tryber!');
  }
  else {
    alert('Email ou senha inválidos.');
  }
}VerifyUser();

function enableBtn() {
  document.getElementById('submit-btn').disabled = false;
}

// document.getElementById ('btnEnter').addEventListener('click', VerifyUser)