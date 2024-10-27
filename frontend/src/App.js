import React from 'react';
import './App.css';
import Test from './components/Test';
import Results from './components/Results.jsx';
import { useSelector } from 'react-redux';
import test from './data/index.js';

function App() {
  const { progressId } = useSelector((state) => state.appControl);
  const { seconds } = useSelector((state) => state.timer);
  const progressQuestion = test.find(({ id }) => id === progressId);
  console.log(seconds);
  if (progressQuestion && seconds > 0) {
    return <Test />;
  }
  return (
      <Results />
  );
}

export default App;
