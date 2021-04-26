// Refatorar código

const textoTarefa = document.querySelector('#texto-tarefa');

function createNewItem() {
  const newTask = document.createElement('li');
  const list = document.querySelector('#lista-tarefas');
  newTask.innerHTML = textoTarefa.value;
  function corFundo() {
    const cont = document.querySelectorAll('.selected');
    if (cont.length === 0) {
      newTask.className += ' selected';
      newTask.style.backgroundColor = 'rgb(128,128,128)';
    } else {
      const ant = document.querySelector('.selected');
      ant.classList.remove('selected');
      ant.style.backgroundColor = 'white';
      newTask.className += ' selected';
      newTask.style.backgroundColor = 'rgb(128,128,128)';
    }
  }
  function riskItemOrNot() {
    const conta = document.querySelectorAll('.completed');
    if (conta.length === 0) {
      newTask.className += ' completed';
      newTask.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
      newTask.className += ' lineThrough';
      newTask.addEventListener('dblclick', riskItemOrNot);
    } else {
      const anta = document.querySelector('.completed');
      anta.classList.remove('completed');
      newTask.style.textDecoration = '';
    }
  }
  newTask.addEventListener('click', corFundo);
  newTask.addEventListener('dblclick', riskItemOrNot);
  list.appendChild(newTask);
  newTask.className += 'created';
}

function eraseItem() {
  textoTarefa.value = '';
}

const theButton = document.querySelector('#criar-tarefa');
theButton.addEventListener('click', createNewItem);
theButton.addEventListener('click', eraseItem);

const buttonReset = document.querySelector('#apaga-tudo');
const listaTarefa = document.querySelector('#lista-tarefas');
buttonReset.addEventListener('click', () => listaTarefa.innerHTML = '');

const buttonFinalizados = document.querySelector('#remover-finalizados');

buttonFinalizados.addEventListener('click', () => {
  const allFinalizados = document.querySelectorAll('.lineThrough');
  for (let index = 0; index < allFinalizados.length; index += 1) {
    allFinalizados[index].remove();
  }
});
