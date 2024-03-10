import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    increment: (state, action) => {
      const {id} = action.payload;
      const index = state.data.findIndex(item => item.id === id);
      if (index > -1) {
        const item = state.data[index];
        const {weight} = item;
        item.quantity += weight;
      }
    },
    addItem: (state, action) => {
      if (state.data === undefined) {
        state.data = [];
      }
      state.data.push(action.payload);
    },
    decrement: (state, action) => {
      const {id} = action.payload;
      const index = state.data.findIndex(item => item.id === id);
      if (index !== -1) {
        const item = state.data[index];
        const {quantity, weight} = item;

        if (quantity === weight) {
          state.data.splice(index, 1);
        } else {
          item.quantity -= weight;
        }
      }
    },
    clearCart: state => {
      state.data = [];
    },
  },
});

export const {addItem, increment, decrement, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
