const textoTarefa = document.querySelector('#texto-tarefa');

// eslint-disable-next-line max-lines-per-function
function createNewItem() {
  const newTask = document.createElement('li');
  const list = document.querySelector('#lista-tarefas');
  newTask.innerHTML = textoTarefa.value;
  function lineOut() {
    newTask.style.textDecoration = 'none';
    newTask.classList.remove('risked');
  }
  function riskItem() {
    newTask.style.textDecoration = 'line-through';
    newTask.className += ' risked';
    newTask.addEventListener('dblclick', lineOut);
  }
  function corFundo() {
    const cont = document.querySelectorAll('.selected');
    if (cont.length === 0) {
      newTask.className = 'selected';
      newTask.style.backgroundColor = 'rgb(128,128,128)';
    } else {
      const ant = document.querySelector('.selected');
      ant.classList.remove('selected');
      ant.style.backgroundColor = 'white';
      newTask.className = 'selected';
      newTask.style.backgroundColor = 'rgb(128,128,128)';
    }
  }
  newTask.addEventListener('click', corFundo);
  newTask.addEventListener('dblclick', riskItem);
  list.appendChild(newTask);
}

function eraseItem() {
  textoTarefa.value = '';
}

const theButton = document.querySelector('#criar-tarefa');
theButton.addEventListener('click', createNewItem);
theButton.addEventListener('click', eraseItem);
