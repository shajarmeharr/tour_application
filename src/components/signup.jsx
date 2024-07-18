import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import axiosInstance from '../axiosinstance.jsx';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    return (
        <div className="w-1/3 mx-auto border-2 py-4 px-2 ">
            <div className="flex flex-col gap-4 border-b-2 boder-b-2 ml-4">
                <h3 className="text-4xl font-bold ">Sign Up</h3>
                <p className="pb-2">
                    Please fill in this form to create an account.
                </p>
            </div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    passwordConfirm: '',
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('required'),
                    email: Yup.string().email().required('Required'),
                    password: Yup.string()
                        .min(8, 'Atleast there shou;d be 8 charaects long')
                        .required('Required'),
                    passwordConfirm: Yup.string().min(
                        8,
                        'Atelst it sho   uld be 8 chaarcters long'
                    ),
                })}
                onSubmit={async (values, options) => {
                    try {
                        const data = await axiosInstance.post(
                            '/users/signup',
                            values
                        );
                        console.log(data, 'data');

                        toast.success('You have succesfully signed up');
                        localStorage.setItem('jwt', data.data.token);

                        return navigate('/login');
                    } catch (err) {
                        if (err.message === 'Network Error') {
                            toast.error(
                                'Please check your internet connection and Try again'
                            );
                            return navigate('/');
                        }
                        toast.error(err.response.data.message);
                        // console.log(err.response.data.message);
                    }
                }}
            >
                <Form className="flex flex-col gap-2 p-4 ">
                    <label
                        htmlFor="name"
                        className="block  font-semibold text-xl"
                    >
                        Name
                    </label>
                    <Field
                        type="text"
                        name="name"
                        placeholder="Name"
                        className=" p-3 bg-[rgb(241,241,241)]"
                    />
                    <ErrorMessage name="name" className="block" />
                    <label
                        htmlFor="email"
                        className="block font-semibold text-xl"
                    >
                        Email
                    </label>
                    <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="p-3 bg-[rgb(241,241,241)] focus: focus:outline-offset-2"
                    />
                    <ErrorMessage name="email" className="block" />
                    <label
                        htmlFor="password"
                        className="block  font-semibold text-xl"
                    >
                        Password
                    </label>
                    <Field
                        type="text"
                        className="p-3 bg-[rgb(241,241,241)]"
                        placeholder="Name"
                        name="password"
                    />
                    <ErrorMessage className="block" name="password" />
                    <label
                        htmlFor="passwordConfirm"
                        className="block  font-semibold text-xl"
                    >
                        Password Confirm
                    </label>
                    <Field
                        className="p-3 bg-[rgb(241,241,241)]"
                        type="text"
                        name="passwordConfirm"
                        placeholder="Password Confirm"
                    />
                    <ErrorMessage className="block" name="passwordConfirm" />
                    <label
                        className="block  font-semibold text-xl"
                        htmlFor="phtot"
                    >
                        Photo
                    </label>
                    <Field
                        className="p-3 bg-[rgb(241,241,241)]"
                        type="file"
                        name="photo"
                        placeholder="photo"
                    />
                    <ErrorMessage name="photo" />

                    <div className="flex justify-end mt-4">
                        <button
                            className="py-3 px-6 bg-blue-700  text-white"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}
