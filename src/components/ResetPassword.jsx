import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axiosInstance from '../axiosinstance';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function ResetPassword({ setLogInState }) {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-300 bg-opacity-75 z-20">
            <Formik
                initialValues={{
                    password: '',
                    email: '',
                }}
                validationSchema={Yup.object({
                    email: Yup.string().email().required('Required'),
                })}
                onSubmit={async (values, options) => {
                    try {
                        const data = await axiosInstance.post(
                            '/users/forgetpassword',
                            values,
                            {
                                headers: {
                                    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                                },
                            }
                        );

                        toast.success(
                            'Passord is sent to your email please check it there'
                        ),
                            localStorage.setItem('jwt', data.data.token);
                        setLogInState ? setLogInState(false) : null;
                        return navigate('/');
                        // localStorage.setItem('jwt')
                    } catch (err) {
                        if (err.message === 'Network Error') {
                            toast.error(
                                'Please check your internet connection and Try again'
                            );
                        }
                        toast.error(err.response.data.message);
                    }
                }}
            >
                <Form className="flex flex-col rounded-lg gap-4   w-2/3 md:w-1/3 lg:w-1/3 py-10 px-6 absolute shadow-2xl bg-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <label className="text-2xl mb-2 font-bold">
                        LForget Password
                    </label>
                    <label
                        htmlFor="email"
                        className="block  font-semibold text-xl"
                    >
                        Email
                    </label>
                    <Field
                        type="email"
                        placeholder="Email..."
                        name="email"
                        id="email"
                        className=" p-3 bg-[rgb(241,241,241)] focus:outline-blue-300"
                    />
                    <ErrorMessage name="email" className="block" />

                    <div className="flex justify-end mt-4 gap-4">
                        <button
                            className="py-3 px-6 bg-blue-700  text-white"
                            type="submit"
                        >
                            Submit
                        </button>
                        <button
                            className="py-3 px-6 bg-orange-700  text-white"
                            type="submit"
                            onClick={() => setLogInState(false)}
                        >
                            Cnacel
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}
