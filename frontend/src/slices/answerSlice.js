import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  answers: [],
};

const answerSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    setAnswer (state, { payload }) {
      state.answers = state.answers.filter((item) => item.id !== payload.id);
      state.answers.push(payload);
    },
  },
});

export const { setAnswer } = answerSlice.actions;
export default answerSlice.reducer;