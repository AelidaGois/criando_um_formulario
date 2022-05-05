
// let btnEnter = document.getElementById ('btnEnter');


function VerifyUser() {
  console.log('clicked')
  if (document.getElementById ('email').value === 'tryber@teste.com' && document.getElementById ('password').value === '123456') {
    alert('Olá, Tryber!');
  }
  else {
    alert('Email ou senha inválidos.')
  }
}

// document.getElementById ('btnEnter').addEventListener('click', VerifyUser)