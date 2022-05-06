
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

function enableBtn() {
  document.getElementById('submit-btn').disabled = false
}

function saveData() {
const infos = {
  name: document.getElementById('input-name').value,
  lastName: document.getElementById('input-lastname').value,
  email: document.getElementById('input-email').value,
  house: document.getElementById('house').value,
  family: '',
  materias: '',
  avaliacao: '',
  observacoes: ''
}

  let familyArray = Array.from(document.getElementsByClassName('family'))

  for (let i=0; i<familyArray.length; i++) {
    if (familyArray[i].checked) {
     infos.family = familyArray[i].value
    }
    console.log(infos.family)
  }
}

  function deleteForm() {
    let main = document.getElementById('main')

    main.removeChild(main.firstChild)
  }

  function printInfos () {

  }
  

// document.getElementById ('btnEnter').addEventListener('click', VerifyUser)