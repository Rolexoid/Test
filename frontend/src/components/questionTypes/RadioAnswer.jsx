import React from 'react';
import { Formik, Field } from 'formik';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setNextQuestionId } from '../../slices/activeQuestionSlice.js';
import { setAnswer } from '../../slices/answerSlice.js';

const RadioAnswer = (props) => {
	const { question, options, id, progressId } = props;
  const dispatch = useDispatch();
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
                  <div role="group" aria-labelledby="checkbox-group">
										{options.map((option) => (
											<div className="form-check" key={option.id}>
												<label className="form-check-label">
													<Field className="form-check-input" type="radio" name="answer" value={option.text} />
														{option.text}
												</label>
											</div>
										))}
                    </div>
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

export default RadioAnswer;
