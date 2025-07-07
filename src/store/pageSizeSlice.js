// src/store/pageSizeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
  const raw = localStorage.getItem("pageSize");
  const parsed = parseInt(raw, 10);
  return !isNaN(parsed) ? parsed : 5;
};

const pageSizeSlice = createSlice({
  name: 'pageSize',
  initialState: loadFromLocalStorage(), // should be a number
  reducers: {
    changePageSize: (state, action) => {
      const val = Number(action.payload);
      if (typeof val !== 'number' || isNaN(val)) return state;
      localStorage.setItem("pageSize", val);
      console.log("changed pageSize")
      return val; // ✅ return new value (important!)
    },
  },
});

export const { changePageSize } = pageSizeSlice.actions;
export default pageSizeSlice.reducer;
