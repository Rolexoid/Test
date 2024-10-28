import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from "redux-persist";

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
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});

export const { decrement } = timerSlice.actions;
export default timerSlice.reducer;


