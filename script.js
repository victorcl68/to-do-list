const textoTarefa = document.querySelector('#texto-tarefa');

function createNewItem() {
  const newTask = document.createElement('li');
  const list = document.querySelector('#lista-tarefas');
  newTask.innerHTML = textoTarefa.value;
  list.appendChild(newTask);
}

function eraseItem() {
  textoTarefa.value = '';
}

const theButton = document.querySelector('#criar-tarefa');
theButton.addEventListener('click', createNewItem);
theButton.addEventListener('click', eraseItem);
