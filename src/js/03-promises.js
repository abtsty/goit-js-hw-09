import Notiflix from 'notiflix';

const formEl = document.querySelector('form');
const delayEl = formEl.elements.delay;
const PromisesEL = formEl.elements.amount;
const StepEl = formEl.elements.step;

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  let delay = Number(delayEl.value);

  for (let i = 1; i <= Number(PromisesEL.value); i++) {
    createPromise(i, delay).then(success).catch(error);
    delay += Number(StepEl.value);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function success({ position, delay }) {
  Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
}
function error({ position, delay }) {
  Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
}
