import React from 'react';
import Hero from '../../assets/hero.png';
import playStore from '../../assets/play-store.png';
import appStore from '../../assets/app-store.png';

const Banner = () => {
    return (
        <div>
            <div className="hero max-w-11\12  mx-auto mt-20">
                <div className="text-center flex flex-col justify-center items-center">
                    <div className="max-w-xl">
                        <h1 className="text-5xl font-bold">
                            We Build <br />
                            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                                {' '}
                                Productive{' '}
                            </span>
                            Apps
                        </h1>
                        <p className="pt-6">
                            At HERO.IO, we craft innovative apps designed to
                            make everyday life simpler, smarter, and more
                            exciting.Our goal is to turn your ideas into digital
                            experiences that truly make an impact.
                        </p>
                        <div className="flex justify-center items-center gap-4 my-10">
                            <a
                                href="https://play.google.com/store/games?hl=en"
                                className="btn bg-white text-[#001931] border-[#d2d2d2] py-5 font-semibold text-[20px] transition-transform duration-300 hover:scale-103 hover:shadow-xl">
                                <img
                                    className="w-6"
                                    src={playStore}
                                    alt="Play Store"
                                />{' '}
                                Google Play
                            </a>
                            <a
                                href="https://www.apple.com/app-store/"
                                className="btn bg-white text-[#001931] border-[#d2d2d2] py-5 font-semibold text-[20px] transition-transform duration-300 hover:scale-103 hover:shadow-xl">
                                <img
                                    className="w-6"
                                    src={appStore}
                                    alt="App Store"
                                />{' '}
                                App Store
                            </a>
                        </div>
                    </div>
                    <img src={Hero} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
