import { configureStore } from '@reduxjs/toolkit';
import activeQuestionReducer from './activeQuestionSlice';
import answerSliceReducer from './answerSlice';
import timerSliceReducer from './timerSlice';

export default configureStore({
  reducer: {
    appControl: activeQuestionReducer,
    answers: answerSliceReducer,
    timer: timerSliceReducer,
  },
});