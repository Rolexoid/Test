import { React } from 'react';
import { Stack } from 'react-bootstrap';
import getComponent from './questionTypes';
import test from '../data/index.js';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveQuestionId } from '../slices/activeQuestionSlice.js';

const renderQuestion = (activeQuestion, progressId) => {
  const { question, options, type, id } = activeQuestion;
  const Component = getComponent(type);
  return <Component  question={question} options={options} id={id} progressId={progressId}/>;
};

const Test = () => {
  const dispatch = useDispatch();
  const { activeId, progressId } = useSelector((state) => state.appControl);
  // const answers = useSelector((state) => state.answers);
  // console.log(answers);
  const activeQuestion = test.find(({ id }) => id === activeId);
  const setClasses = (id) => {
    const buttonClasses = cn('p-2', 'mt-2', 'que-btn', {
      'bg-dark': id < progressId,
      'active-btn': id === progressId,
    });
    return buttonClasses;
  }

  return (
    <div className='container'>
      <h1>Тестирование</h1>
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