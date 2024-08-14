import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [], 
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.cartItem = action.payload;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItem));
    },
    clearData:(state) =>{
        state.cartItem =[],
        localStorage.removeItem('cartItems');
    }
  },
});

export const { setData,clearData } = dataSlice.actions;

export default dataSlice.reducer;
