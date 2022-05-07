const infos = {};

function VerifyUser() {
  console.log('clicked');
  const emailValue = document.getElementById('email').value;
  const passwordValue = document.getElementById('password').value;
  if (emailValue === 'tryber@teste.com' && passwordValue === '123456') {
    alert('Olá, Tryber!'); 
  }
  else {
    alert('Email ou senha inválidos.');
  }
};

function enableBtn() {
  document.getElementById('submit-btn').disabled = false;
}

function saveData() {
  const familyArray = Array.from(document.getElementsByClassName('family'));
  const languages = Array.from(document.getElementsByClassName('content'));
  const rate = Array.from(document.getElementsByClassName('rate'));

  infos.name = document.getElementById('input-name').value;
  infos.lastName = document.getElementById('input-lastname').value;
  infos.email = document.getElementById('input-email').value;
  infos.house = document.getElementById('house').value;
  infos.family = '';
  infos.language = [];
  infos.avaliacao = '';
  infos.observacoes = document.getElementById('textarea').value;

  for (let i = 0; i < familyArray.length; i += 1) {
    if (familyArray[i].checked) {
      infos.family = familyArray[i].value;
    }
    console.log(infos.family);
  }

  for (let i = 0; i < languages.length; i += 1) {
    if (languages[i].checked === true) {
      infos.language.push(languages[i].value);
      console.log(infos.language);
    }
  }

  for (let i = 0; i < rate.length; i += 1) {
    if (rate[i].checked) {
      infos.avaliacao = rate[i].id;
      console.log(infos.avaliacao);
    }
  }
  // document.querySelectorAll("input:checkbox[type=text]:checked")
}
// document.getElementById ('btnEnter').addEventListener('click', VerifyUser)

function contarCaracteres (elemento) {
  let limite = elemento.maxLength;
  let divCont = document.getElementById('cont');
  let campo = elemento.value.length;
  let restante = limite - campo;
  divCont.innerText = restante;
}

function deleteForm() {
  // document.getElementById('main').removeChild(main.children[0])
  document.getElementById('evaluation-form').innerHTML = '';
}

function printInfos() {
  const para = document.createElement('p');
  para.innerText = `Nome: ${infos.name} ${infos.lastName} 
    Email:${infos.email} 
    Casa: ${infos.house}
    Família: ${infos.family} 
    Matérias: ${infos.language} 
    Avaliação: ${infos.avaliacao} 
    Observações: ${infos.observacoes}`;

  document.getElementById('evaluation-form').appendChild(para);
}

// document.getElementById ('btnEnter').addEventListener('click', VerifyUser)
