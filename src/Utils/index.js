/**
 * This function calculates total price of a new order
 * @param {Array} product cartProduct : Array of Objects
 * @returns {num} Total price
 */

export const totalPrice = (product) => {
  return product.reduce((acc, prodPrice) => acc + prodPrice.price, 0);
};
