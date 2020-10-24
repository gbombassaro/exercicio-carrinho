import { configureStore } from '@reduxjs/toolkit';
import productListReducer from './pages/productList/reducer';
import cartReducer from './pages/productList/cartReducer';

export default configureStore({
  reducer: {
    productsList: productListReducer,
    cart: cartReducer
  }
})