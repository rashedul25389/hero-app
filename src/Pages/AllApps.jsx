import React from 'react';
import Download from '../assets/icon-downloads.png';
import Rating from '../assets/icon-ratings.png';
import { NavLink } from 'react-router';

const AllApps = () => {
    return (
        <div className="max-w-11/12 mx-auto text-center my-20">
            <h1 className="text-5xl font-bold mb-4">Our All Applications</h1>
            <p className="mb-10">
                Explore All Apps on the Market developed by us. We code for
                Millions
            </p>
            <div className="flex justify-between items-center">
                <p>(132) Apps Found</p>
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
                                    <img
                                        className="w-4 mr-1"
                                        src={Rating}
                                        alt=""
                                    />
                                    4.5
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default AllApps;
