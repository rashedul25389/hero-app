import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import Download from '../assets/icon-downloads.png';
import Rating from '../assets/icon-ratings.png';
import {
    getInstalledApps,
    removeInstalledApp,
} from '../components/Utility/localStorage';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../components/Loading/Loading';

const Installation = () => {
    const { apps, loading } = useApps();
    const [installedApps, setInstalledApps] = useState([]);
    const [sortBy, setSortBy] = useState('High-Low');

    useEffect(() => {
        const installed = getInstalledApps();
        const matchedApps = apps.filter((app) =>
            installed.some((i) => i.id === app.id)
        );
        setInstalledApps(matchedApps);
    }, [apps]);

    const handleUninstall = (id) => {
        const app = installedApps.find((a) => a.id === id);
        if (!app) return;

        removeInstalledApp(id);
        setInstalledApps((prev) => prev.filter((a) => a.id !== id));

        toast.success(`${app.title} uninstalled successfully!`, {
            position: 'top-right',
            autoClose: 2000,
        });
    };

    // ✅ Convert K, M, B & MB sizes properly
    const parseNumber = (str) => {
        if (!str) return 0;
        const num = parseFloat(str.replace(/[^\d.]/g, ''));
        const lower = str.toLowerCase();
        if (lower.includes('k')) return num * 1_000;
        if (lower.includes('m') && !lower.includes('mb'))
            return num * 1_000_000;
        if (lower.includes('b')) return num * 1_000_000_000;
        if (lower.includes('mb')) return num; // size in MB
        if (lower.includes('gb')) return num * 1024; // convert GB to MB
        return num;
    };

    // ✅ Sorting logic (সব একসাথে ঠিকভাবে কাজ করবে)
    const sortedApps = [...installedApps].sort((a, b) => {
        switch (sortBy) {
            case 'High-Low':
                return parseNumber(b.downloads) - parseNumber(a.downloads);
            case 'Low-High':
                return parseNumber(a.downloads) - parseNumber(b.downloads);
            case 'sizeHighLow':
                return parseNumber(b.size) - parseNumber(a.size);
            case 'sizeLowHigh':
                return parseNumber(a.size) - parseNumber(b.size);
            case 'rating':
                return parseFloat(b.ratingAvg) - parseFloat(a.ratingAvg);
            case 'name':
                return a.title.localeCompare(b.title);
            default:
                return 0;
        }
    });

    if (loading) return <Loading />;

    return (
        <div className="max-w-11/12 mx-auto text-center my-20">
            <h1 className="text-5xl font-bold mb-4">My Installation</h1>
            <p className="mb-10">
                Explore all installed apps you have downloaded on your device.
            </p>

            {/* sorting options */}
            <div className="flex justify-between items-center mb-5">
                <p className="text-2xl font-semibold">
                    {installedApps.length} Apps Found
                </p>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 font-normal rounded p-1 cursor-pointer">
                    <option value="High-Low">Downloads: High → Low</option>
                    <option value="Low-High">Downloads: Low → High</option>
                    <option value="sizeHighLow">Size: High → Low</option>
                    <option value="sizeLowHigh">Size: Low → High</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="name">Sort by Name</option>
                </select>
            </div>

            {/* Installed apps list */}
            {installedApps.length === 0 ? (
                <p className="text-3xl text-gray-500 mt-10">
                    No apps installed yet 😢
                </p>
            ) : (
                <div className="w-full mt-5">
                    {sortedApps.map((app) => (
                        <div
                            key={app.id}
                            className="p-4 bg-white shadow-[0px_10px_20px_-12px_rgba(0,0,0,0.1)] rounded-[4px] max-sm:flex-col max-sm:gap-10 flex justify-between items-center mb-5">
                            <div className="flex gap-5 items-center">
                                <div className="bg-gray-300 h-[80px] w-[80px] rounded-[8px] overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={app.image}
                                        alt={app.title}
                                    />
                                </div>
                                <div className="text-left">
                                    <p className="text-[20px] font-medium mb-2">
                                        {app.title}: {app.companyName}
                                    </p>
                                    <div className="flex gap-5 items-center">
                                        <p className="text-[#00d390] font-medium flex items-center">
                                            <img
                                                className="w-4 mr-2"
                                                src={Download}
                                                alt=""
                                            />
                                            {app.downloads}
                                        </p>
                                        <p className="font-medium text-[#ff8811] flex items-center">
                                            <img
                                                className="w-4 mr-2"
                                                src={Rating}
                                                alt=""
                                            />
                                            {app.ratingAvg}
                                        </p>
                                        <p className="text-amber-900 font-medium">
                                            {app.size}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => handleUninstall(app.id)}
                                className="bg-green-400 hover:bg-red-500 text-white px-8 py-2 rounded-sm cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                Uninstall
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default Installation;
