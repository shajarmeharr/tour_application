import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import axiosInstance from '../axiosinstance.jsx';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export default function CreateTours() {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    return (
        <div className="w-1/3 mx-auto border-2 py-4 px-2 ">
            <div className="flex flex-col gap-4 border-b-2 boder-b-2 ml-4">
                <h3 className="text-4xl font-bold ">Create Tour</h3>
                <p className="pb-2">
                    Please fill in this form to create an Tours.
                </p>
            </div>
            <Formik
                initialValues={{
                    name: '',
                    price: 0,
                    difficulty: '',
                    maxGroupSize: 0,
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('required'),
                    price: Yup.number().required('Required'),
                    difficulty: Yup.string()
                        .min(2, 'Atleast there shou;d be 8 charaects long')
                        .required('Required'),
                    maxGroupSize: Yup.number().min(
                        3,
                        'Atelst it sho   uld be 8 chaarcters long'
                    ),
                })}
                onSubmit={async (values, options) => {
                    try {
                        console.log('this is running');
                        const data = await axiosInstance.post('/tours', values);
                        console.log(data, 'data');

                        toast.success('You have succesfully cfrerated a tour');
                        return navigate('/tours');
                    } catch (err) {
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
                        htmlFor="price"
                        className="block font-semibold text-xl"
                    >
                        Price
                    </label>
                    <Field
                        type="price"
                        name="price"
                        placeholder="Price"
                        className="p-3 bg-[rgb(241,241,241)] focus: focus:outline-offset-2"
                    />
                    <ErrorMessage name="price" className="block" />
                    <label
                        htmlFor="difficulty"
                        className="block  font-semibold text-xl"
                    >
                        Difficulty
                    </label>
                    <Field
                        type="text"
                        className="p-3 bg-[rgb(241,241,241)]"
                        placeholder="Difficulty"
                        name="difficulty"
                    />
                    <ErrorMessage className="block" name="difficulty" />
                    <label
                        htmlFor="maxGroupSize"
                        className="block  font-semibold text-xl"
                    >
                        Max Group Size
                    </label>
                    <Field
                        className="p-3 bg-[rgb(241,241,241)]"
                        type="text"
                        name="maxGroupSize"
                        placeholder="Max Group Size"
                    />
                    <ErrorMessage className="block" name="maxGroupSize" />

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
