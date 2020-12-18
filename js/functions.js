function action() {
  const modal = document.querySelector('.modal');

  modal.style.display = 'block';
}

function save() {
  const cardapio = document.querySelector('.cardapio');
  const modal = document.querySelector('.modal');

  modal.style.display = 'none';
  cardapio.style.display = 'block';
}

function board() {
  const board = document.querySelector('.board');
  const cardapio = document.querySelector('.cardapio');

  cardapio.style.display = 'none';
  board.style.display = 'block';
}

function esvaziar() {
  const board = document.querySelector('.board');
  const negar = document.querySelector('.negar');

  board.style.display = 'none';
  negar.style.display = 'block';
}

function voltarCardapio() {
  const negar = document.querySelector('.negar');
  const cardapio = document.querySelector('.cardapio');

  negar.style.display = 'none';
  cardapio.style.display = 'block';
}

function voltarHome() {
  const negar = document.querySelector('.negar');

  negar.style.display = 'none';
}
