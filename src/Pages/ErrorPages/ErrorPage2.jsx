import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPage2 = () => {
    const error = useRouteError();

    return (
        <div className="text-center mt-20">
            <h1 className="text-4xl font-bold text-orange-500">
                Apps Page Error 😢
            </h1>
            <p className="text-gray-500 mt-2">
                {error?.statusText ||
                    error?.message ||
                    'কোনো অজানা সমস্যা ঘটেছে।'}
            </p>
        </div>
    );
};

export default ErrorPage2;
