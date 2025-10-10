import React from 'react';
import Download from '../../assets/icon-downloads.png';
import Rating from '../../assets/icon-ratings.png';
import { NavLink } from 'react-router';

const AppCard = ({ app }) => {
    const { image, companyName, title, downloads, ratingAvg, id } = app;
    return (
        <NavLink to={`/appDetails/${id}`}>
            <div className="p-4 bg-white shadow-[0px_10px_20px_-12px_rgba(0,0,0,0.1)] rounded-[4px]">
                <div className="bg-gray-300 h-[316px] rounded-[8px]">
                    <img
                        className="w-full h-full rounded-[8px] object-top "
                        src={image}
                        alt="App"
                    />
                </div>
                <div>
                    <p className="text-[20px] font-medium py-4 text-left">
                        {title}: {companyName}
                    </p>
                    <div className="flex justify-between items-center">
                        <p className="btn border-0 shadow-soft bg-[rgba(241,245,232,1)] text-[#00d390] font-medium px-3">
                            <img className="w-4 mr-1" src={Download} alt="" />
                            {downloads}
                        </p>
                        <p className="btn border-0 shadow-soft font-medium bg-[#fff0e1] text-[#ff8811]  px-3">
                            <img className="w-4 mr-1" src={Rating} alt="" />
                            {ratingAvg}
                        </p>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default AppCard;
