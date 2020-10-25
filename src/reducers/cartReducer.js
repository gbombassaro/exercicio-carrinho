const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        action.payload
      ];
    default: 
      return [];
  }
}

export default cart;