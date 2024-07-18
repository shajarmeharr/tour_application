import { Link } from 'react-router-dom';

export default function Headers(props) {
    return (
        <header className="flex container mx-auto  justify-between h-20 border-b-2 alig items-center">
            <h1 className=" text-4xl text-[rgb(115,111,101)] font-serif">
                PatelStartup
            </h1>
            <ul className="flex justify-between gap-12 font-sans font-medium text-[rgb(115,111,101)] text-xl">
                <li>
                    <Link to={'/updatePassword'}>Update Password</Link>
                </li>
                <li>
                    <Link to={'/product'}>Create Tour</Link>
                </li>
                <li>
                    <Link to={'/tours'}>Get Tours</Link>
                </li>
                <li>
                    <Link to={'resetPassword'}>Reset Password</Link>
                </li>
            </ul>
            <div className="flex gap-4">
                <button
                    className="px-6 py-3 text-gray-600 text-base font-semibold hover:shadow-xl  shadow-md rounded-lg bg-[rgb(255,250,241)]"
                    onClick={() => props.setLogInState(true)}
                >
                    Login
                </button>
                <Link
                    to={'/signup'}
                    className="px-6 py-3 text-gray-100 text-base font-semibold hover:shadow-xl  shadow-md rounded-lg bg-[rgb(249,144,82)]"
                >
                    Sign Up
                </Link>
            </div>
        </header>
    );
}
