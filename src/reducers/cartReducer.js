const addToCart = (state, action) => {
  let productAmount = 0;
  action.payload.productAmount = productAmount + 1;
  return [...state, action.payload];
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