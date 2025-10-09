import React from 'react';
import Download from '../assets/icon-downloads.png';
import Rating from '../assets/icon-ratings.png';

const Installation = () => {
    return (
        <div className="max-w-11/12 mx-auto text-center my-20">
            <h1 className="text-5xl font-bold mb-4">Your Installed Apps</h1>
            <p className="mb-10">
                Explore All Trending Apps on the Market developed by us
            </p>
            <div className="flex justify-between items-center">
                <p>1 Apps Found</p>
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
                    <p>Sort by</p>
                </label>
            </div>
            <div className="w-full mt-5">
                <div className="p-4 bg-white shadow-[0px_10px_20px_-12px_rgba(0,0,0,0.1)] rounded-[4px] flex justify-between items-center mb-5">
                    <div className="flex justify-between items-center gap-5">
                        <div className="bg-gray-300 h-[80px] w-[80px] rounded-[8px]">
                            <img className="w-full" src={Image} alt="" />
                        </div>
                        <div>
                            <p className="text-[20px] font-medium mb-2 text-left">
                                company name: title
                            </p>
                            <div className="flex justify-between items-center gap-5">
                                <p className="text-[#00d390] font-medium flex justify-between items-center">
                                    <img
                                        className="w-4 mr-2"
                                        src={Download}
                                        alt=""
                                    />
                                    25M
                                </p>
                                <p className="font-medium text-[#ff8811] flex justify-between items-center">
                                    <img
                                        className="w-4 mr-2"
                                        src={Rating}
                                        alt=""
                                    />
                                    4.5
                                </p>
                                <p className="text-amber-900 font-medium px-3">
                                    25 Mb
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className="bg-[#00d390] text-white px-8 py-2 rounded-sm">
                        Uninstall
                    </button>
                </div>
                <div className="p-4 bg-white shadow-[0px_10px_20px_-12px_rgba(0,0,0,0.1)] rounded-[4px] flex justify-between items-center mb-5">
                    <div className="flex justify-between items-center gap-5">
                        <div className="bg-gray-300 h-[80px] w-[80px] rounded-[8px]">
                            <img className="w-full" src={Image} alt="" />
                        </div>
                        <div>
                            <p className="text-[20px] font-medium mb-2 text-left">
                                company name: title
                            </p>
                            <div className="flex justify-between items-center gap-5">
                                <p className="text-[#00d390] font-medium flex justify-between items-center">
                                    <img
                                        className="w-4 mr-2"
                                        src={Download}
                                        alt=""
                                    />
                                    25M
                                </p>
                                <p className="font-medium text-[#ff8811] flex justify-between items-center">
                                    <img
                                        className="w-4 mr-2"
                                        src={Rating}
                                        alt=""
                                    />
                                    4.5
                                </p>
                                <p className="text-amber-900 font-medium px-3">
                                    25 Mb
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className="bg-[#00d390] text-white px-8 py-2 rounded-sm">
                        Uninstall
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Installation;
