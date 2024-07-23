// import { addItem as add } from './cart.js';
// console.log('Import');
// add('apple', 13);

import add, { cart } from './cart.js'; // never use default with other export
add('apple', 13);
add('bread', 8);
add('banana', 18);
console.log(cart);
