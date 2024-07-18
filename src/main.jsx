import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './components/signup.jsx';
import LogIn from './components/login.jsx';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './components/protectedRoute.jsx';
import CreateTours from './components/createTours.jsx';
import Tours from './components/Tours.jsx';
import UpdatePassword from './components/UpdatePassword.jsx';
import ResetPassword from './components/ResetPassword.jsx';
import UploadPhoto from './components/UploadPhoto.jsx';
const router = createBrowserRouter([
    {
        path: '/uploadphoto',
        element: (
            <ProtectedRoute>
                <Toaster />
                <UploadPhoto />
            </ProtectedRoute>
        ),
    },
    {
        path: '/',
        element: (
            <>
                <Toaster />
                <App />
            </>
        ),
    },
    {
        path: '/resetpassword',
        element: (
            <ProtectedRoute>
                <ResetPassword />
            </ProtectedRoute>
        ),
    },
    {
        path: 'signup',
        element: (
            <>
                <Toaster /> <SignUp />
            </>
        ),
    },
    {
        path: 'login',
        element: (
            <>
                <Toaster />
                <LogIn />
            </>
        ),
    },
    {
        path: '/product',
        element: (
            <>
                <Toaster />
                <ProtectedRoute>
                    <CreateTours />
                </ProtectedRoute>
            </>
        ),
    },
    {
        path: '/tours',
        element: (
            <>
                <Toaster />
                <ProtectedRoute>
                    <Tours />
                </ProtectedRoute>
            </>
        ),
    },
    {
        path: '/updatepassword',
        element: (
            <>
                <Toaster />
                <ProtectedRoute>
                    <UpdatePassword />
                </ProtectedRoute>
            </>
        ),
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
