import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      confirmPassword: "",
      birthDate: "",
      gender: "",
      age: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      password: Yup.string().min(6, "Min 6 chars").required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
      birthDate: Yup.date().required("Required"),
      gender: Yup.string().required("Required"),
      age: Yup.number().positive().integer().required("Required"),
      description: Yup.string().max(200, "Max 200 chars"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Name: <input type="text" {...formik.getFieldProps("name")} /></label>
      <label>Password: <input type="password" {...formik.getFieldProps("password")} /></label>
      <label>Confirm Password: <input type="password" {...formik.getFieldProps("confirmPassword")} /></label>
      <label>Birth Date: <input type="date" {...formik.getFieldProps("birthDate")} /></label>
      <label>Gender: <select {...formik.getFieldProps("gender")}>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select></label>
      <label>Age: <input type="number" {...formik.getFieldProps("age")} /></label>
      <label>Description: <textarea {...formik.getFieldProps("description")} /></label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
