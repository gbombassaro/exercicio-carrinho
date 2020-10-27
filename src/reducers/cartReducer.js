import {find, remove} from 'lodash';

const addToCart = (state, action) => {
  let productAmount = 0;
  action.payload.productAmount = productAmount + 1;
  return [...state, action.payload];
}

const increaseAmount = (state, action) => {
  let product = find(state, {id: action.payload.id})
  let productAmount = product.productAmount;
  product.productAmount = productAmount + 1;
  return [...state]
}

const decreaseAmount = (state, action) => {
  let product = find(state, {id: action.payload.id})
  let productAmount = product.productAmount;
  product.productAmount = productAmount - 1;
  if (productAmount === 1) remove(state, product);
  return [...state]
}

const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return addToCart(state, action);
    case 'INCREASE_AMOUNT':
      return increaseAmount(state, action);
    case 'DECREASE_AMOUNT':
      return decreaseAmount(state, action);
    default: 
      return [];
  }
}

export default cart;