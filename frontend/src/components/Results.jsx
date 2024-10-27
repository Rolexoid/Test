import { React } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import test from '../data/index.js';


const Results = () => {
  const answersObj = useSelector((state) => state.answers);
  const { answers } = answersObj;
  return (
    <div className='container mt-5'>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>№</th>
          <th>Твой ответ</th>
          <th>Верный ответ</th>
        </tr>
      </thead>
      <tbody>
        {test.map(({ id, rightAnswer }) => {
          const result = answers.find((item) => item.id === id);
          const answer = result ? result.answer : '';
         return (
        <tr key={id}>
          <td>{id}</td>
          <td>{Array.isArray(answer) ? answer.join(', ') : answer}</td>
          <td>{Array.isArray(rightAnswer) ? rightAnswer.join(', ') : rightAnswer}</td>
        </tr>)
        })}
      </tbody>
    </Table>
    </div>
  )
};

export default Results;