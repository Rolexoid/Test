import { React, useRef, useEffect } from 'react';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setNextQuestionId } from '../../slices/activeQuestionSlice.js';
import { setAnswer } from '../../slices/answerSlice.js';

const TextAreaAnswer = (props) => {
	const { question, id, progressId } = props;
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const onSubmit = ({ answer }) => {
    dispatch(setAnswer({ id, answer }));
    if (id === progressId) {
      dispatch(setNextQuestionId());
    }
  };

  return (
    <div className='w-100 mt-3'>
      <div className='d-flex flex-column h-100'>
        <div className='container-fluid h-100'>
          <div className='row h-100'>
            <div className='col-12 col-md-8 col-xxl-6'>
              <Formik onSubmit={onSubmit} initialValues={{ answer: ''}}>
                {({
                  handleSubmit, handleChange, value,
                }) => (
                <Form onSubmit={handleSubmit}>
                  <h5>{question}</h5>
                  <Form.Control
										as="textarea"
										rows={3}
                    name="answer"
                    type="text"
                    required
                    onChange={handleChange}
                    value={value}
                    ref={inputRef}
                  />
                  <button
                    type="submit"
                    className="w-20 mt-2 btn button"
                  >Отправить</button>
                </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default TextAreaAnswer;
