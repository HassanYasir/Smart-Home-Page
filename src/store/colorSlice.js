
import { createSlice } from '@reduxjs/toolkit';

// Load initial data from localStorage
const loadFromLocalStorage = () => {
  const data = localStorage.getItem("color");
  return data ? data: "#0084f7e8";
};

const colorSlice = createSlice({
  name: 'color',
  initialState: loadFromLocalStorage(),
  reducers: {
    changeColor: (state, action) => {
      const data = action.payload;
      if (typeof data !== 'string') throw new Error('Invalid data type: expected string');
      localStorage.setItem("color",data);
      return data;
    },
  },
});

export const { changeColor } = colorSlice.actions;
export default colorSlice.reducer;
