// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import pageSizeReducer from './pageSizeSlice';
import colorReducer from './colorSlice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    pageSize: pageSizeReducer,
    color:colorReducer,
  },
});
