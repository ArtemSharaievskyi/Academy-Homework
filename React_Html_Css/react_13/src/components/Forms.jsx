import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './styles/Forms.css';

const Forms = () => {
  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Обов’язкове поле'),
    email: Yup.string().email('Невірний формат email').required('Обов’язкове поле'),
    message: Yup.string().min(10, 'Повідомлення має містити мінімум 10 символів').required('Обов’язкове поле')
  });

  const onSubmit = (values, actions) => {
    console.log('Дані форми:', values);
    actions.resetForm();
  };

  return (
    <div className="forms-container">
      <h2>Форма з використанням Formik та Yup</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {formik => (
          <Form className="form">
            <div className="form-control">
              <label htmlFor="name">Ім'я:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-control">
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-control">
              <label htmlFor="message">Повідомлення:</label>
              <Field as="textarea" id="message" name="message" />
              <ErrorMessage name="message" component="div" className="error" />
            </div>

            <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>
              Надіслати
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Forms;
