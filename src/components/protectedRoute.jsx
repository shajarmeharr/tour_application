import { Children, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import axiosInstance from '../axiosinstance';
import toast from 'react-hot-toast';

export default function ProtectedRoute({ children }) {
    const [state, setState] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    // localStorage.removeItem('jwt');

    useEffect(function () {
        async function protect() {
            try {
                const token = localStorage.getItem('jwt');

                const data = await axiosInstance.get('/users/auth', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                    },
                });

                if (data.status === 200) {
                    setState(true);
                }
            } catch (err) {
                if (err.message === 'Network Error') {
                    toast.error(
                        'Please check your internet connection and Try again'
                    );
                    return navigate('/');
                }

                toast.error(err.response.data.message);
                setError(err.response.data.message);
                return navigate('/login');
            }
        }
        protect();
    }, []);

    return (
        <>
            {/* {error ? toast.error(error) : null} */}
            {state ? (
                children
            ) : (
                <div className="flex flex-col h-screen justify-center">
                    {' '}
                    <p className="self-center text-4xl">Loading...</p>{' '}
                </div>
            )}
        </>
    );
}
