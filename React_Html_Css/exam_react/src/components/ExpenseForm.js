import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const validationSchema = Yup.object({
  title: Yup.string().required('Required'),
  amount: Yup.number().required('Required').positive('Must be positive'),
  category: Yup.string().required('Required'),
  date: Yup.date().required('Required'),
});

const ExpenseForm = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {() => (
      <Form className="expense-form">
        <div>
          <label>Title</label>
          <Field name="title" />
          <ErrorMessage name="title" component="div" className="error" />
        </div>
        <div>
          <label>Amount</label>
          <Field name="amount" type="number" />
          <ErrorMessage name="amount" component="div" className="error" />
        </div>
        <div>
          <label>Category</label>
          <Field name="category" />
          <ErrorMessage name="category" component="div" className="error" />
        </div>
        <div>
          <label>Date</label>
          <Field name="date" type="date" />
          <ErrorMessage name="date" component="div" className="error" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
);

ExpenseForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ExpenseForm;