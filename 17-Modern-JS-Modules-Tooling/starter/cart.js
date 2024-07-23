// Export
console.log('Export');
export const cart = [];

export default function (item, quantity) {
  cart.push({ item, quantity });
  console.log(`${item} is added in cart`);
}
