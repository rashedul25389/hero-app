import React from 'react';
import { NavLink, useRouteError } from 'react-router';
import Error from '../../assets/error-404.png';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';

const ErrorPage1 = () => {
    const error = useRouteError();

    return (
        <div>
            <Navbar />
            <div className="max-w-11/12 mx-auto text-center mt-20">
                <div className="flex flex-col justify-center items-center">
                    <img src={Error} alt="" />
                </div>
                <h1 className="text-4xl font-bold text-red-600">
                    Oops, page not found!
                </h1>
                <p className="text-gray-500 mt-2">
                    {error?.statusText ||
                        error?.message ||
                        'The page you are looking for is not available.'}
                </p>

                <div className="mt-10 mx-auto w-fit rounded-sm bg-gradient-to-b from-[#632EE3] to-[#9F62F2] text-white font-semibold">
                    <NavLink
                        to={'/'}
                        // href="/allapps"
                        className="p-7 py-2 inline-block">
                        Go Back
                    </NavLink>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ErrorPage1;
