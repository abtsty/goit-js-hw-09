const btnStart = document.querySelector('.color-switcher-btn-start');
const btnStop = document.querySelector('.color-switcher-btn-stop');

let colorChanger = null;

btnStop.setAttribute('disabled', '');

btnStart.addEventListener('click', onBtnStart);
btnStop.addEventListener('click', onBtnStop);

function onBtnStart() {
  colorChanger = setInterval(changeBodyBackgroundColor, 777);
  btnStart.disabled = true;
  btnStop.disabled = false;
}

function onBtnStop() {
  clearInterval(colorChanger);
  btnStart.disabled = false;
  btnStop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
