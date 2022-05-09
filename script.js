const infos = {};

function VerifyUser() {
  console.log('clicked');
  const emailValue = document.getElementById('email').value;
  const passwordValue = document.getElementById('password').value;
  if (emailValue === 'tryber@teste.com' && passwordValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function enableBtn() {
  document.getElementById('submit-btn').disabled = false;
}

function getRate() {
  const rate = Array.from(document.getElementsByClassName('rate'));
  infos.avaliacao = '';
  for (let i = 0; i < rate.length; i += 1) {
    if (rate[i].checked) {
      infos.avaliacao = rate[i].id;
      console.log(infos.avaliacao);
    }
  }
}

function getFamily() {
  const familyArray = Array.from(document.getElementsByClassName('family'));
  infos.family = '';
  for (let i = 0; i < familyArray.length; i += 1) {
    if (familyArray[i].checked) {
      infos.family = familyArray[i].value;
    }
  }
}

function saveData() {
  const languages = Array.from(document.getElementsByClassName('content'));
  infos.name = document.getElementById('input-name').value;
  infos.lastName = document.getElementById('input-lastname').value;
  infos.email = document.getElementById('input-email').value;
  infos.house = document.getElementById('house').value;
  infos.language = [];
  infos.observacoes = document.getElementById('textarea').value;

  for (let i = 0; i < languages.length; i += 1) {
    if (languages[i].checked === true) {
      infos.language.push(languages[i].value);
      console.log(infos.language);
    }
  }
  getRate();
  getFamily();
  // document.querySelectorAll("input:checkbox[type=text]:checked")
}

function contarCaracteres() {
  // const limite = elemento.maxLength;
  const limite = document.getElementById('textarea').maxLength;
  const divCont = document.getElementById('counter');
  // const campo = elemento.value.length;
  const campo = document.getElementById('textarea').value.length;
  const restante = limite - campo;
  divCont.innerText = restante;

  // function contarCaracteres(elemento) {
  //   const limite = elemento.maxLength;
  //   const divCont = document.getElementById('counter');
  //   const campo = elemento.value.length;
  // >>>>>>> b8bbb8d82d4a321bdebfa084b5185c0be8e1ead1
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

function deleteForm() {
  // document.getElementById('main').removeChild(main.children[0])
  document.getElementById('evaluation-form').innerHTML = '';
  printInfos();
}

const btn = document.getElementById('btnEnter');
const submitbtn = document.getElementById('submit-btn');
const textdiv = document.getElementById('textarea');
const agree = document.getElementById('agreement');
btn.addEventListener('click', VerifyUser);
submitbtn.addEventListener('click', saveData);
submitbtn.addEventListener('click', deleteForm);
textdiv.addEventListener('keyup', contarCaracteres);
agree.addEventListener('change', enableBtn);
