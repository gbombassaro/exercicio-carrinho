import {find} from 'lodash';

const addToCart = (state, action) => {
  let hasProductInCart = find(state, action.payload);
  
  if (hasProductInCart) {
    hasProductInCart.productAmount ++;
    hasProductInCart.totalAmount = hasProductInCart.productAmount * hasProductInCart.price;
    return state;
  }

  return [...state, action.payload]
}

const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return addToCart(state, action);
    default: 
      return [];
  }
}

export default cart;