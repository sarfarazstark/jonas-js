// import { addItem as add } from './cart.js';
// console.log('Import');
// add('apple', 13);

import add, { cart } from './cart.js'; // never use default with other export
add('apple', 13);
add('bread', 8);
add('banana', 18);
console.log(cart);

/*
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  // console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// not clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 100;
  const totalPrice = 4000;
  const totalQuantity = 70;
  const addToCart = function (item, quantity) {
    cart.push({ item, quantity });
    console.log(`${item} is added in cart`);
  };

  const orderStock = function (item, quantity) {
    console.log(`${quantity} ${item} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart('apple', 2);
shoppingCart2.addToCart('pizza', 3);
console.log(shoppingCart2.cart);
*/
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'apple', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const s = new Person('Sarfaraz');
Promise.resolve('TEST').then(res => console.log(res));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

import 'regenerator-runtime/runtime';
