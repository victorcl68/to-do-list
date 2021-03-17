const textoTarefa = document.querySelector('#texto-tarefa');

function createNewItem() {
  const newTask = document.createElement('li');
  const list = document.querySelector('#lista-tarefas');
  newTask.innerHTML = textoTarefa.value;
  newTask.addEventListener('click', corFundo);
  function corFundo() {
    newTask.style.backgroundColor = 'rgb(128,128,128)';
  }
  list.appendChild(newTask);
}

function eraseItem() {
  textoTarefa.value = '';
}

const theButton = document.querySelector('#criar-tarefa');
theButton.addEventListener('click', createNewItem);
theButton.addEventListener('click', eraseItem);
