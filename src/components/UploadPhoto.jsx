import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const FileUpload = () => {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const handleFileChange = (event) => {
        event.preventDefault();
        console.log(event.target.files);
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        console.log(formData, 'this is formdat');
        try {
            const response = await axios.post(
                'http://127.0.0.1:3000/api/v1/users/uploadMe',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                    },
                }
            );
            // console.log(response);
            localStorage.setItem('photo', response.data.user.photo);
            toast.success(response.data.message);
            return navigate('/');
            // console.log(response);
            // Handle response from server
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div className="absolute top-1/2  left-1/2  -translate-x-1/2 -translate-y-1/2 rounded-lg p-10 shadow-2xl">
            <p className="mb-8 text-2xl font-semibold">UploadPhoto</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input
                    type="file"
                    className="p-4 hover:border-blue-200 block border-4 border-blue-400/30 rounded-md"
                    onChange={handleFileChange}
                />
                <button
                    type="submit"
                    className="self-start block px-8 py-4 bg-orange-500 text-white/50 rounded-md"
                >
                    Upload
                </button>
            </form>
        </div>
    );
};

export default FileUpload;

/*
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axiosInstance2 from './axiosInstance2';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function uploadPhoto({ setLogInState }) {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-300 bg-opacity-75 z-20">
            <Formik
                initialValues={{
                    file: '',
                }}
                // validationSchema={Yup.object({
                //     photo: Yup.file.required('Required'),
                // })}
                onSubmit={async (values, options) => {
                    try {
                        const formData = new FormData();
                        formData.append('file', values.file);
                        console.log(formData);
                        const data = await axiosInstance2.post(
                            '/users/uploadMe',
                            formData,
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
                        Uloadphoto
                    </label>
                    <label
                        htmlFor="file"
                        className="block  font-semibold text-xl"
                    >
                        Photo
                    </label>
                    <Field
                        type="file"
                        placeholder="photo..."
                        name="file"
                        id="file"
                        className=" p-3 bg-[rgb(241,241,241)] focus:outline-blue-300"
                    />
                    <ErrorMessage name="photo" className="block" />

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

*/

83;
/*
Formik doesnot support fileupload by default, But you can try the following

<input id="file" name="file" type="file" onChange={(event) => {
  setFieldValue("file", event.currentTarget.files[0]);
}} />
Here "file" represents the key that you are using for holding the file

And on submit you can get the filename, size etc for the file by using

onSubmit={(values) => {
        console.log({ 
              fileName: values.file.name, 
              type: values.file.type,
              size: `${values.file.size} bytes`
            })
If you want to set the file into components state then you can use

onChange={(event) => {
  this.setState({"file": event.currentTarget.files[0]})};
}}
According to your code, you have to handle file upload as below

In AccountInfo add a function to handle file upload

handleFileUpload = (event) => {
this.setState({WAHTEVETKEYYOUNEED: event.currentTarget.files[0]})};
}
And pass the same function to Step1 Component as below

    <Step1 
      currentStep={this.state.currentStep} 
      handleChange={this.handleChange}
      file= {this.state.image}
      handleFileUpload={this.handleFileUpload}
      />
In Step1 Component where you upload the file, Change the input as

<input id="file" name="file" type="file" accept="image/*" onChange={props.handleFileUpload}/>
If you need to preview the uploaded image then you can create a blob and pass the same as source for image as below

<img src={URL.createObjectURL(FILE_OBJECT)} /> 
EDIT-1

As URL.createObjectURL method is deprecated due to security issues, we need to use srcObject for Media Elements, to use that you can use ref to assign srcObject, for example

Assuming you are using class Components,

Constructor

in constructor you can use

constructor(props) {
  super(props)
  this.imageElRef = React.createRef(null)
}
HANDLE CHANGE FUNCTION

handleFileUpload = (event) => {
  let reader = new FileReader();
let file = event.target.files[0];
reader.onloadend = () => {
  this.setState({
    file: reader.result
  });
};
reader.readAsDataURL(file);
}
Element

<img src={this.state.file} /> 
*/
