function VerifyUser() {// let btnEnter = document.getElementById ('btnEnter');
  console.log('clicked')
  if (document.getElementById ('email').value === 'tryber@teste.com' && document.getElementById ('password').value === '123456') {
    alert('Olá, Tryber!');
  }
  else {
    alert('Email ou senha inválidos.');
  }
};

function enableBtn() {
  document.getElementById('submit-btn').disabled = false;
}

function deleteForm() {
  let name = document.getElementById('input-name').value
  let lastName = document.getElementById('input-lastname').value
  let email = document.getElementById('input-email').value
  let house = document.getElementById('house').value
  let family =Array.from(document.getElementsByClassName('family'))
  
  for (let i=0; i<family.length; i++) {
    family
  }

}
// document.getElementById ('btnEnter').addEventListener('click', VerifyUser)

function contarCaracteres (elemento) {
  let limite = elemento.maxLength;
  let divCont = document.getElementById('cont');
  let campo = elemento.value.length;
  let restante = limite - campo;
  divCont.innerText = restante;
}