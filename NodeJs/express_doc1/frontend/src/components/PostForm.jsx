import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import cls from './PostForm.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostForm = () => {

    const [succesCreated, setSuccesCreated] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const validationSchema = Yup.object({
        content: Yup.string()
            .max(500, 'Пост не може бути довшим за 500 символів')
            .required('Поле не може бути порожнім'),
    });

    return (
        <div className={cls.postFormContainer}>
            <h2>Створити пост</h2>
            <Formik
                initialValues={{ content: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    axios
                        .post('http://localhost:5000/api/posts', values)
                        .then((res) => {
                            if (res.status === 201) {
                                setSuccesCreated(true)
                                resetForm();
                            }

                        })
                        .catch((err) => {
                            setSuccesCreated(false)
                            setError(true)
                            console.error('Помилка при створенні поста:', err);
                        });
                }}
            >
                <Form className={cls.postForm}>
                    <Field
                        as="textarea"
                        name="content"
                        placeholder="Напиши щось..."
                        className={cls.textarea}
                    />
                    <ErrorMessage name="content" component="div" className={cls.error} />

                    <button type="submit" className={cls.submitButton}>
                        Опублікувати
                    </button>
                    {succesCreated && <div>Успішно створено пост</div>}
                    {error && <div>Помилка при створенні</div>}
                    <button className={cls.main} onClick={navigate('/')}>на головну</button>
                </Form>
            </Formik>
        </div>
    );
};

export default PostForm;