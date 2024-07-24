// Export
console.log('Export');

// blocking code
// console.log('Start fetching');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching');

export const cart = [];

export default function (item, quantity) {
  cart.push({ item, quantity });
  console.log(`${item} is added in cart`);
}
