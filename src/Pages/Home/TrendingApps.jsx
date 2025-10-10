import React from 'react';

import { NavLink } from 'react-router';
import Loading from '../../components/Loading/Loading';
import AppCard from './AppCard';
import useApps from '../../Hooks/useApps';

const TrendingApps = () => {
    const {  apps, loading } = useApps();
    const trendingApp = apps.slice(0, 8);
    return (
        <div className="max-w-11/12 mx-auto text-center my-20">
            <h1 className="text-5xl font-bold mb-4">Trending Apps</h1>
            <p className="mb-10">
                Explore All Trending Apps on the Market developed by us
            </p>
            {loading ? (
                <Loading />
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-between items-center w-full gap-4">
                    {trendingApp.map((app) => (
                        <AppCard key={app.id} app={app} />
                    ))}
                </div>
            )}

            <div className="mt-10 mx-auto w-fit rounded-sm bg-gradient-to-b from-[#632EE3] to-[#9F62F2] text-white font-semibold transition-transform duration-300 hover:scale-103 hover:shadow-xl">
                <NavLink
                    to={'/allapps'}
                    className="p-7 py-2 inline-block">
                    Show All
                </NavLink>
            </div>
        </div>
    );
};

export default TrendingApps;
