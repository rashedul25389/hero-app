import React from 'react';
import { NavLink } from 'react-router';
import useApps from '../Hooks/useApps';
import Loading from '../components/Loading/Loading';
import AppCard from './Home/AppCard';

const AllApps = () => {
    const { apps, loading } = useApps();

    return (
        <div className="max-w-11/12 mx-auto text-center my-20">
            <h1 className="text-5xl font-bold mb-4">Our All Applications</h1>
            <p className="mb-10">
                Explore All Apps on the Market developed by us. We code for
                Millions
            </p>
            <div className="flex justify-between items-center">
                <p>Apps Found: ({apps.length})</p>
                <label className="input">
                    <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
            </div>
            <NavLink to={'/appDetails'}>
                {loading ? (
                    <Loading />
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-between items-center w-full gap-4">
                        {apps.map((app) => (
                            <AppCard key={app.id} app={app} />
                        ))}
                    </div>
                )}
            </NavLink>
        </div>
    );
};

export default AllApps;
