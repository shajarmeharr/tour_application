import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosinstance';
import toast from 'react-hot-toast';

const Tours = () => {
    const [tours, setTours] = useState([]);
    const [error, setError] = useState('');
    useEffect(function () {
        async function fetchData() {
            try {
                const data = await axiosInstance.get('/tours');
                console.log(data);
                setTours(data.data.tours);
            } catch (err) {
                // setError(err.response.data.message);
                console.log(err);
            }
        }
        fetchData();
    }, []);
    return (
        <div className="p-20">
            {error ? toast.error(error) : null}
            {tours ? (
                <div className="grid grid-cols-3 gap-8">
                    {tours.map((el) => {
                        return (
                            <div className="flex gap-4 flex-col p-10 border-2 border-blue-300 shadow-lg">
                                <h1 className="text-xl font-bold">{el.name}</h1>
                                <h3 className="text-lg font-semibold">
                                    {el.price}
                                </h3>
                                <p>{el.maxGroupSize}</p>
                                <p>{el.difficulty}</p>
                            </div>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
};

export default Tours;
