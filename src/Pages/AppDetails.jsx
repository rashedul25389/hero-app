import React from 'react';
import Download from '../assets/icon-downloads.png';
import Rating from '../assets/icon-ratings.png';

const AppDetails = () => {
    return (
        <div className="max-w-11/12 mx-auto my-20">
            <div className="flex items-center gap-10 border-b-1 border-gray-200 pb-7">
                <div className="bg-gray-300 h-[350px] rounded-[8px] w-[35%]">
                    <img className="w-full" src={Image} alt="" />
                </div>

                <div className="w-full">
                    <div className="border-b-1 border-gray-200 pb-7">
                        <h4 className="text-[32px] font-bold mb-2">
                            company name: title
                        </h4>
                        <p className="text-xl font-bold">
                            Developed by{' '}
                            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                                productive.io
                            </span>
                        </p>
                    </div>
                    <div className="flex justify-between items-center gap-10 py-7 w-fit">
                        <div className="text-[#00d390] font-medium ">
                            <img className="w-5" src={Download} alt="" />
                            <p className="my-1">Downloads</p>
                            <p>25M</p>
                        </div>
                        <div className="font-medium text-[#ff8811] ">
                            <img className="w-5" src={Rating} alt="" />
                            <p className="my-1">Average Ratings</p>
                            <p>4.9</p>
                        </div>
                        <div className="font-medium text-amber-900 ">
                            <img className="w-4" src={Rating} alt="" />
                            <p className="my-1">Total Reviews</p>
                            <p>54K</p>
                        </div>
                    </div>
                    <button className="bg-[#00d390] text-white px-7 py-[6px] rounded-sm cursor-pointer">
                        Install Now <span>(291Mb)</span>
                    </button>
                </div>
            </div>
            <div className="my-10">
                <h3>Rating</h3>
            </div>
            <div>
                <p>Description</p>
            </div>
        </div>
    );
};

export default AppDetails;
