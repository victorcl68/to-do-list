const textoTarefa = document.querySelector('#texto-tarefa');

function createNewItem() {
  const newTask = document.createElement('li');
  const list = document.querySelector('#lista-tarefas');
  newTask.innerHTML = textoTarefa.value;
  function corFundo() {
    const cont = document.querySelectorAll('.selected');
    if (cont.length === 0) {
      newTask.className = 'selected';
      newTask.style.backgroundColor = 'rgb(128,128,128)';
    } else {
      const ant = document.querySelector('.selected');
      ant.className = '';
      ant.style.backgroundColor = 'white';
      newTask.className = 'selected';
      newTask.style.backgroundColor = 'rgb(128,128,128)';
    }
  }
  newTask.addEventListener('click', corFundo);
  list.appendChild(newTask);
}

function eraseItem() {
  textoTarefa.value = '';
}

const theButton = document.querySelector('#criar-tarefa');
theButton.addEventListener('click', createNewItem);
theButton.addEventListener('click', eraseItem);
