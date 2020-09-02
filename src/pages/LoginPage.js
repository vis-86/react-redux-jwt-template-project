import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import "./LoginPage.css"
import { ErrorMessage } from '../_components/';
import { userActions } from '../_actions';
import { useDispatch } from 'react-redux';


const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

export const LoginPage = (props) => {
    const dispatch = useDispatch();
    return (
        <div className="login-content">
            <Formik
                initialValues={{
                    email: 'as2@mai.com',
                    password: '123123',
                }}
                validationSchema={LoginSchema}
                onSubmit={values => {
                    dispatch(userActions.login(values.email, values.password));
                }}
            >
                {({ errors, touched }) => (
                    <Form className="form login-form">
                        <h3 className="mb-5 text-white text-center">Авторизация</h3>
                        <div className="form-group">
                            <Field id="email" name="email" placeholder="Email" type="email" className="form-control" />
                            {errors.email && touched.email ? <ErrorMessage css="text-center">{errors.email}</ErrorMessage> : null}
                        </div>

                        <div className="form-group">
                            <Field id="password" name="password" placeholder="Password" type="password" className="form-control" />
                            {errors.password && touched.password ? <ErrorMessage css="text-center">{errors.password}</ErrorMessage> : null}
                        </div>
                        <button className="btn btn-primary btn-block mt-5 shadow" type="submit">Login</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
