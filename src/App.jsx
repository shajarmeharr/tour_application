import { useCallback, useEffect, useState } from 'react';
import Header from './components/header';
import Container from 'postcss/lib/container';
import HeaderSection from './components/headerSection';
import ImageSection from './components/ImageSection';
import Cards from './components/cards';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { Container } from 'postcss'
import LogIn from './components/login';
import { toast, Toaster } from 'react-hot-toast';
function App() {
    // localStorage.removeItem('jwt');
    const [loginState, setLogInState] = useState(false);
    const [image, setImage] = useState(() => localStorage.getItem('photo'));
    console.log(image);
    useEffect(function () {
        document.documentElement.classList.add('dark');
    }, []);
    const handleSubmit = useCallback(() => {
        console.log('This is a login state', loginState);
        console.log('thhis is a sert login function');
    }, [loginState]);
    return (
        <main className=" px-20 bg-[rgb(251,246,234)]">
            {loginState ? (
                <LogIn
                    handleSubmit={handleSubmit}
                    setLogInState={setLogInState}
                />
            ) : null}
            <Header setLogInState={setLogInState} />

            <HeaderSection setImage={setImage} />
            {image ? (
                <img
                    src={`/images/users/${image}`}
                    alt="user iamge"
                    height={200}
                    width={200}
                />
            ) : null}
            <ImageSection />
            <Cards />
        </main>
    );
}

export default App;
