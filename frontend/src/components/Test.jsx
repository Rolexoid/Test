import { React, useEffect } from 'react';
import { Stack } from 'react-bootstrap';
import getComponent from './questionTypes';
import test from '../data/index.js';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveQuestionId } from '../slices/activeQuestionSlice.js';
import { decrement } from '../slices/timerSlice.js';

const renderQuestion = (activeQuestion, progressId) => {
  const { question, options, type, id } = activeQuestion;
  const Component = getComponent(type);
  return <Component  question={question} options={options} id={id} progressId={progressId}/>;
};

const Test = () => {
  const dispatch = useDispatch();
  const { seconds } = useSelector((state) => state.timer);
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsString = String(seconds % 60).padStart(2, '0');
  const { activeId, progressId } = useSelector((state) => state.appControl);
  const activeQuestion = test.find(({ id }) => id === activeId);
  const setClasses = (id) => {
    const buttonClasses = cn('p-2', 'mt-2', 'que-btn', {
      'bg-dark': id < progressId,
      'active-btn': id === progressId,
    });
    return buttonClasses;
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(decrement(seconds - 1));
    }, 1000);
  }, [dispatch, seconds]);

  return (
    <div className='container my-3 justify-content-start'>
      <div className='row'>
        <div className='col-md-auto'>
          <h1>Тестирование</h1>
        </div>
        <div className='col-md-auto d-flex justify-content-left align-items-center fs-4 border border-dark my-2'>
          {minutesString}:{secondsString}
        </div>
      </div>
      <Stack direction="horizontal" gap={3}>
        {test.map((problem) => (
          <button className={setClasses(problem.id)} key={problem.id} disabled={problem.id > progressId} onClick={() => dispatch(setActiveQuestionId(problem.id))}></button>
        ))}
      </Stack>
      {renderQuestion(activeQuestion, progressId)}
    </div>
  ); 
};

export default Test;