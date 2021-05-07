// Refatorar código e fazer requisito 14: Local Storage
const textoTarefa = document.querySelector('#texto-tarefa');

const corFundo = (newTask) => {
  const cont = document.querySelectorAll('.selected');
  const myNewTask = newTask.target;
  if (cont.length === 0) {
    myNewTask.className += ' selected';
    myNewTask.style.backgroundColor = 'rgb(128,128,128)';
  } else {
    const ant = document.querySelector('.selected');
    ant.classList.remove('selected');
    ant.style.backgroundColor = 'white';
    myNewTask.className += ' selected';
    myNewTask.style.backgroundColor = 'rgb(128,128,128)';
  }
};

const riskItemOrNot = (newTask) => {
  const myNewTask = newTask.target;
  if (myNewTask.style.textDecoration === '') {
    myNewTask.className += ' completed';
    myNewTask.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  } else {
    myNewTask.classList.remove('completed');
    myNewTask.style.textDecoration = '';
  }
};

const list = document.querySelector('#lista-tarefas');

function createNewItem() {
  const newTask = document.createElement('li');
  newTask.innerHTML = textoTarefa.value;
  list.appendChild(newTask);
  newTask.className += 'created';
  newTask.addEventListener('click', corFundo);
  newTask.addEventListener('dblclick', riskItemOrNot);
}

function eraseItem() {
  textoTarefa.value = '';
}

const theButton = document.querySelector('#criar-tarefa');
theButton.addEventListener('click', createNewItem);
theButton.addEventListener('click', eraseItem);

const buttonReset = document.querySelector('#apaga-tudo');
buttonReset.addEventListener('click', () => {
  list.innerHTML = '';
});

const buttonFinalizados = document.querySelector('button#remover-finalizados');
buttonFinalizados.addEventListener('click', () => {
  const allFinalizados = document.querySelectorAll('li.completed');
  for (let index = 0; index < allFinalizados.length; index += 1) {
    allFinalizados[index].remove();
  }
});

const buttonSelecionado = document.querySelector('button#remover-selecionado');
buttonSelecionado.addEventListener('click', () => {
  const selectedItem = document.querySelector('.selected');
  selectedItem.remove();
});

const buttonCima = document.querySelector('button#mover-cima');
const listELement = document.querySelector('#lista-tarefas');
buttonCima.addEventListener('click', () => {
  const selectedItemToUp = document.querySelector('.selected');
  listELement.insertBefore(selectedItemToUp, selectedItemToUp.previousElementSibling);
// A função insertBefore foi retirada do seguinte site:
// https://pt.stackoverflow.com/questions/150305/como-mudar-a-posi%C3%A7%C3%A3o-de-um-elemento-html-com-javascript
});

function insertAfter(newNode, existingNode) {
  if (existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  } else {
    // existingNode.parentNode.insertBefore(existingNode, list.firstElementChild);
    listELement.insertBefore(newNode, list.firstElementChild);

  }
// A lógica dentro do if foi tirada do seguinte site:
// https://www.javascripttutorial.net/javascript-dom/javascript-insertafter/
}

const buttonBaixo = document.querySelector('button#mover-baixo');
buttonBaixo.addEventListener('click', () => {
  const selectedItemToDown = document.querySelector('.selected');
  insertAfter(selectedItemToDown, selectedItemToDown.nextElementSibling);
});
