
class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(f) {
    this.observers.push(f);
  }

  unsubscribe(f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}

const input = document.querySelector('.js-input');
const p1 = document.querySelector('.js-p1');
const p2 = document.querySelector('.js-p2');
const p3 = document.querySelector('.js-p3');
const subscribeP1 = document.querySelector('.js-subscribe-p1');
const subscribeP2 = document.querySelector('.js-subscribe-p2');
const subscribeP3 = document.querySelector('.js-subscribe-p3');
const unsubscribeP1 = document.querySelector('.js-unsubscribe-p1');
const unsubscribeP2 = document.querySelector('.js-unsubscribe-p2');
const unsubscribeP3 = document.querySelector('.js-unsubscribe-p3');

const updateP1 = text => p1.textContent = text;

const updateP2 = text => p2.textContent = text;

const updateP3 = text => p3.textContent = text;

const headingsObserver = new Observable();

headingsObserver.subscribe(updateP1);
headingsObserver.subscribe(updateP2);
headingsObserver.subscribe(updateP3);


//p1
subscribeP1.addEventListener('click', () => {
  headingsObserver.subscribe(updateP1);


  //estilo
  subscribeP1.classList.add('active');
  unsubscribeP1.classList.remove('active');
});


unsubscribeP1.addEventListener('click', () => {
  headingsObserver.unsubscribe(updateP1)

  //estilo
  unsubscribeP1.classList.add('active');
  subscribeP1.classList.remove('active');
});


//p2
subscribeP2.addEventListener('click', () => {
  headingsObserver.subscribe(updateP2)

  //estilo
  subscribeP2.classList.add('active');
  unsubscribeP2.classList.remove('active');
});


unsubscribeP2.addEventListener('click', () => {
  headingsObserver.unsubscribe(updateP2)

  //estilo
  unsubscribeP2.classList.add('active');
  subscribeP2.classList.remove('active');
});


//p3
subscribeP3.addEventListener('click', () => {
  headingsObserver.subscribe(updateP3)

  //estilo
  subscribeP3.classList.add('active');
  unsubscribeP3.classList.remove('active');

});
unsubscribeP3.addEventListener('click', () => {
  headingsObserver.unsubscribe(updateP3)

  //estilo
  unsubscribeP3.classList.add('active');
  subscribeP3.classList.remove('active');
});


input.addEventListener('keyup', e => {
  headingsObserver.notify(e.target.value);
});