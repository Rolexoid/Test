import React from 'react';
import { Formik, Field } from 'formik';
import { Form } from 'react-bootstrap';

const CheckboxAnswer = (props) => {
  const {question, options} = props;
  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <div className='w-50 mt-3'>
      <div className='d-flex flex-column h-100'>
        <div className='container-fluid h-100'>
          <div className='row justify-content-center align-content-center h-100'>
            <div className='col-12 col-md-8 col-xxl-6'>
              <Formik onSubmit={onSubmit} initialValues={{ answer: []}}>
                {({
                  handleSubmit, handleChange, value,
                }) => (
                <Form onSubmit={handleSubmit}>
                  <h5>{question}</h5>
                  <div role="group" aria-labelledby="checkbox-group">
                    {options.map((option) => (
                      <div className="form-check" key={option.id}>
                        <Field type="checkbox" name="answer" id={option.id} value={option.text} className="form-check-input" />
                        <label htmlFor={option.id} className='form-check-label'>{option.text}</label>
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

export default CheckboxAnswer;