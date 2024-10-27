import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  seconds: 15,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    decrement (state, {payload}) {
      state.seconds = payload;
    },
  },
});

export const { decrement } = timerSlice.actions;
export default timerSlice.reducer;


