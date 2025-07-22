import { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from "react-router-dom";
import cls from './style.module.css'
import axios from "axios";

const Login = () => {

    const [error, setError] = useState(false)
    const [serverError, setServerError] = useState(false)

    const navigate = useNavigate();

    const validationSchema = Yup.object({
        username: Yup.string().required('Імʼя користувача обовʼязкове'),
        password: Yup.string().required('Пароль обовʼязковий')
    })

    return (
        <div className={cls.container}>
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={validationSchema} 
                onSubmit={(values) => {
                    axios.post('http://localhost:5000/api/auth/login', values).then((res) => {
                        const token = res.data.token
                        localStorage.setItem('token', res.data.token)
                        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                        navigate('/')
                    }).catch(err => {
                        if (err.response?.status === 400) {
                            setError(true)
                        } else {
                            setServerError(true)
                        }
                    })
                }}
            >
                <Form>
                    <div className={cls.input}>
                        <label>Імʼя користувача</label><br />
                        <Field type='text' name='username' />
                        <ErrorMessage name='username' component='div' style={{ color: 'red' }} />
                    </div>

                    <div className={cls.input}>
                        <label>Пароль</label><br />
                        <Field type='password' name='password' />
                        <ErrorMessage name='password' component='div' style={{ color: 'red' }} />
                    </div>

                    <button className={cls.submit} type='submit'>Увійти</button>
                    <button className={cls.noAcc} type="button" onClick={() => { navigate('/register') }}>Нема акаунту</button>
                    {error && <div className={cls.err}>Неправильний логін або пароль</div>}
                    {serverError && <div className={cls.err}>Помилка сервера</div>}
                </Form>
            </Formik>

        </div>
    )
}

export default Login;