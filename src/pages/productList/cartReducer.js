import { createSlice } from '@reduxjs/toolkit';

export const productListService = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: state => {
      console.log('cart reducer add')
      state = [{novoProduto: true}];
    }
  }
})

export const {addToCart} = productListService.actions;

export default productListService.reducer;