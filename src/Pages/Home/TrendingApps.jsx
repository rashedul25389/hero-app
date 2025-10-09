import React from 'react';
import Download from '../../assets/icon-downloads.png';
import Rating from '../../assets/icon-ratings.png';
import { NavLink } from 'react-router';

const TrendingApps = () => {
    return (
        <div className="max-w-11/12 mx-auto text-center my-20">
            <h1 className="text-5xl font-bold mb-4">Trending Apps</h1>
            <p className="mb-10">
                Explore All Trending Apps on the Market developed by us
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-between items-center w-full gap-4">
                <div className="p-4 bg-white shadow-[0px_10px_20px_-12px_rgba(0,0,0,0.1)] rounded-[4px]">
                    <div className="bg-gray-300 h-[316px] rounded-[8px]">
                        <img className="w-full" src={Image} alt="" />
                    </div>
                    <div>
                        <p className="text-[20px] font-medium py-4 text-left">
                            company name: title
                        </p>
                        <div className="flex justify-between items-center">
                            <p className="btn border-0 shadow-soft bg-[rgba(241,245,232,1)] text-[#00d390] font-medium px-3">
                                <img
                                    className="w-4 mr-1"
                                    src={Download}
                                    alt=""
                                />
                                25M
                            </p>
                            <p className="btn border-0 shadow-soft font-medium bg-[#fff0e1] text-[#ff8811]  px-3">
                                <img className="w-4 mr-1" src={Rating} alt="" />
                                4.5
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 mx-auto w-fit rounded-sm bg-gradient-to-b from-[#632EE3] to-[#9F62F2] text-white font-semibold">
                <NavLink
                    to={'/allapps'}
                    // href="/allapps"
                    className="p-7 py-2 inline-block">
                    Show All
                </NavLink>
            </div>
        </div>
    );
};

export default TrendingApps;
