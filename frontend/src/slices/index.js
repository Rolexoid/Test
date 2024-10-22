import { configureStore } from '@reduxjs/toolkit';
import activeQuestionReducer from './activeQuestionSlice';
import answerSliceReducer from './answerSlice';

export default configureStore({
  reducer: {
    appControl: activeQuestionReducer,
    answers: answerSliceReducer,
  },
});