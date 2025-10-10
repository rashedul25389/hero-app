import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import Loading from '../components/Loading/Loading';
import Download from '../assets/icon-downloads.png';
import Rating from '../assets/icon-ratings.png';
import Review from '../assets/icon-review.png';
import {
    addInstalledApp,
    isAppInstalled,
} from '../components/Utility/localStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRatingChart from './Chart/AppRatingChart';

const AppDetails = () => {
    const { id } = useParams();
    const { apps, loading, error } = useApps();
    const [isInstalled, setIsInstalled] = useState(false);

    const app = apps.find((par) => par.id === Number(id));

    useEffect(() => {
        setIsInstalled(isAppInstalled(Number(id)));
    }, [id, apps]);

    if (loading) return <Loading />;
    if (error)
        return (
            <p className="text-center text-red-500 mt-10">
                Failed to load app data.
            </p>
        );
    if (!app)
        return (
            <h1 className="text-center text-4xl font-bold text-red-500 my-10">
                Oops, App not found!
            </h1>
        );

    const {
        image,
        companyName,
        title,
        downloads,
        ratingAvg,
        reviews,
        size,
        description,
        ratings,
    } = app;

    const handleInstall = () => {
        addInstalledApp(app);
        setIsInstalled(true);
        toast.success(`${title} installed successfully!`, {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div className="max-w-11/12 mx-auto my-20">
            <div className="flex max-md:flex-col items-center gap-10 border-b border-gray-300 pb-7">
                <div className="bg-gray-300 rounded-[8px]">
                    <img
                        className="w-[450px] object-center rounded-[8px]"
                        src={image}
                        alt={title}
                    />
                </div>

                <div className="w-full">
                    <div className="border-b border-gray-300 pb-6">
                        <h4 className="text-[32px] font-bold mb-2">
                            {title}: {companyName}
                        </h4>
                        <p className="text-xl font-bold">
                            Developed by{' '}
                            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                                productive.io
                            </span>
                        </p>
                    </div>

                    <div className="flex justify-between items-center gap-10 py-6 w-fit">
                        <div className="text-[#00d390] font-medium">
                            <img className="w-5" src={Download} alt="" />
                            <p className="my-1">Downloads</p>
                            <p>{downloads}</p>
                        </div>
                        <div className="font-medium text-[#ff8811]">
                            <img className="w-5" src={Rating} alt="" />
                            <p className="my-1">Average Ratings</p>
                            <p>{ratingAvg}</p>
                        </div>
                        <div className="font-medium text-amber-900">
                            <img className="w-5" src={Review} alt="" />
                            <p className="my-1">Total Reviews</p>
                            <p>{reviews}</p>
                        </div>
                    </div>

                    {isInstalled ? (
                        <button className="bg-green-400 text-white px-7 py-[6px] rounded-sm cursor-not-allowed">
                            Installed
                        </button>
                    ) : (
                        <button
                            onClick={handleInstall}
                            className="bg-[#00d390] text-white px-7 py-[6px] rounded-sm cursor-pointer transition-transform duration-300 hover:scale-103 hover:shadow-xl">
                            Install Now <span>({size})</span>
                        </button>
                    )}
                </div>
            </div>
            <div className="my-10">
                <h3 className="text-2xl font-semibold mb-5">Rating</h3>
                <AppRatingChart ratings={ratings} />
            </div>
            <div>
                <h3 className="text-2xl font-semibold mb-5">Description</h3>
                <p>{description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AppDetails;
