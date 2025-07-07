// src/redux/categorySlice.js
import { createSlice } from '@reduxjs/toolkit';

// Load initial data from localStorage
const loadFromLocalStorage = () => {
  const data = localStorage.getItem("category");
  return data ? JSON.parse(data) : [];
};

const categorySlice = createSlice({
  name: 'category',
  initialState: loadFromLocalStorage(),
  reducers: {
    addCategory: (state, action) => {
      const data = action.payload;
      if (typeof data !== 'string') throw new Error('Invalid data type: expected string');
      if (data.length > 24) throw new Error('Invalid data length: length out of limit');
      state.push(data);
      localStorage.setItem("category", JSON.stringify(state));
    },
    deleteCategory: (state, action) => {
      const index = action.payload;
      state.splice(index, 1);
      localStorage.setItem("category", JSON.stringify(state));
    },
  },
});

export const { addCategory, deleteCategory } = categorySlice.actions;
export default categorySlice.reducer;
