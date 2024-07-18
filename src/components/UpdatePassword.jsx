import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axiosInstance from '../axiosinstance';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function UpdatePassword() {
    const navigate = useNavigate();

    return (
        <div className=" fixed top-0 left-0 w-full h-full bg-gray-300 bg-opacity-75 z-20">
            <Formik
                initialValues={{
                    Newpassword: '',
                    OldPassword: '',
                }}
                validationSchema={Yup.object({
                    OldPassword: Yup.string()
                        .min(8, 'Atleast there shou;d be 8 charaects long')
                        .required('Required'),
                    Newpassword: Yup.string()
                        .min(8, 'Atleast there shou;d be 8 charaects long')
                        .required('Required'),
                })}
                onSubmit={async (values, options) => {
                    try {
                        const data = await axiosInstance.patch(
                            '/users/updatePassword',
                            values,
                            {
                                headers: {
                                    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                                },
                            }
                        );

                        toast.success('You have succesfully changed passowrd'),
                            localStorage.setItem('jwt', data.data.token);
                        // setLogInState ? setLogInState(false) : null;
                        return navigate('/');
                        // localStorage.setItem('jwt')
                    } catch (err) {
                        console.log(err);
                        toast.error(err.response.data.message);
                    }
                }}
            >
                <Form className="flex flex-col rounded-lg gap-4   w-2/3 md:w-1/3 lg:w-1/3 py-10 px-6 absolute shadow-2xl bg-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <label className="text-2xl mb-2 font-bold">LogIn</label>
                    <label
                        htmlFor="OldPassword"
                        className="block  font-semibold text-xl"
                    >
                        OldPassword
                    </label>
                    <Field
                        type="OldPassword"
                        placeholder="Password"
                        name="OldPassword"
                        id="OldPassword"
                        className=" p-3 bg-[rgb(241,241,241)] focus:outline-blue-300"
                    />
                    <ErrorMessage name="OldPassword" className="block" />
                    <label
                        htmlFor="Newpassword"
                        className="block  font-semibold text-xl"
                    >
                        NewPassword
                    </label>
                    <Field
                        type="text"
                        className=" p-3 bg-[rgb(241,241,241)] focus:outline-blue-300"
                        name="Newpassword"
                        id="Newpassword"
                        placeholder="NewPassword..."
                    />
                    <ErrorMessage className="block" name="Newpassword" />
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
