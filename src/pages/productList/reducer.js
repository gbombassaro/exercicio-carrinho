import { createSlice } from '@reduxjs/toolkit';
import productsMock from '../../mock.json';

export const productListService = createSlice({
  name: 'productList',
  initialState: [...productsMock],
  reducers: {
    addToCart: state => {
      state.availableProducts = [{modificou: true}];
    }
  }
})

export const { getProductList, addToCart } = productListService.actions;

export default productListService.reducer;