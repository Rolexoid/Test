import { React, useState } from 'react';
import { Stack } from 'react-bootstrap';
import getComponent from './questionTypes';
import test from '../data/index.js';


const renderQuestion = (activeQuestion) => {
  const { question, options, type, number } = activeQuestion;
  const Component = getComponent(type);
  return <Component  question={question} options={options} number={number}/>;
};

const Test = () => {
  const [activeNumber, setActiveNumber] = useState(1);
  const activeQuestion = test.find(({ number}) => number === activeNumber);
  return (
    <div>
      <h1>Тестирование</h1>
      <Stack direction="horizontal" gap={3}>
        {test.map((problem) => (
          <button className="p-2 mt-2 que-btn" key={problem.id} disabled={problem.number > activeNumber} onClick={() => setActiveNumber(problem.number)}></button>
        ))}
      </Stack>
      {renderQuestion(activeQuestion)}
    </div>
  ); 
};

export default Test;