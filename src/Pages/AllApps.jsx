import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import Loading from '../components/Loading/Loading';
import AppCard from './Home/AppCard';

const AllApps = () => {
    const { apps, loading } = useApps();
    const [search, setSearch] = useState('');
    const [filteredApps, setFilteredApps] = useState([]);
    const [searchLoading, setSearchLoading] = useState(false);

    useEffect(() => {
        setFilteredApps(apps);
    }, [apps]);

    useEffect(() => {
        if (!apps.length) return;

        setSearchLoading(true);
        const delay = setTimeout(() => {
            const searchTerm = search.trim().toLowerCase();
            const result = searchTerm
                ? apps.filter((app) =>
                      app.title.toLowerCase().includes(searchTerm)
                  )
                : apps;
            setFilteredApps(result);
            setSearchLoading(false);
        }, 400);

        return () => clearTimeout(delay);
    }, [search, apps]);

    return (
        <div className="max-w-11/12 mx-auto text-center my-20">
            <h1 className="text-5xl font-bold mb-4">Our All Applications</h1>
            <p className="mb-10">
                Explore All Apps on the Market developed by us. We code for
                Millions
            </p>

            <div className="max-sm:flex-col flex gap-5 justify-between items-center mb-5">
                <p className="text-2xl font-semibold">
                    ({filteredApps.length}) Apps Found
                </p>

                <div className="relative">
                    <label className="input flex items-center gap-2 border rounded px-2 py-1">
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
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="search"
                            placeholder="Search App"
                            className="outline-none"
                        />
                    </label>

                    {searchLoading && (
                        <div className="absolute left-[-30px] top-1/2 -translate-y-1/2">
                            <div className="w-5 h-5 border-2 border-gray-300 border-t-[#632EE3] rounded-full animate-spin"></div>
                        </div>
                    )}
                </div>
            </div>

            {loading ? (
                <Loading />
            ) : filteredApps.length === 0 ? (
                <p className="text-gray-500 text-4xl mt-10">No App Found 😢</p>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-between items-center w-full gap-4">
                    {filteredApps.map((app) => (
                        <AppCard key={app.id} app={app} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllApps;
