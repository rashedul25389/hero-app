import React from 'react';

const Activity = () => {
    return (
        <div className="hero bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-inter">
            <div className="text-center max-w-11\12  mx-auto my-20 p-5">
                <h1 className="text-5xl font-bold">
                    Trusted by Millions, Built for You
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-around text-center mx-auto mt-10 gap-5 md:gap-10 lg:gap-0">
                    <div className="px-0 md:px-5 lg:px-20">
                        <p>Total Downloads</p>
                        <h1 className="text-5xl lg:text-[64px] font-[800]">
                            29.6M
                        </h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className="px-0 md:px-5 lg:px-20">
                        <p>Total Reviews</p>
                        <h1 className="text-5xl lg:text-[64px] font-[800]">
                            906K
                        </h1>
                        <p>46% more than last month</p>
                    </div>
                    <div className="px-0 md:px-5 lg:px-20">
                        <p>Active Apps</p>
                        <h1 className="text-5xl lg:text-[64px] font-[800]">
                            132+
                        </h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;
