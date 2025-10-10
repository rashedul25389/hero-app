import React from 'react';
import Logo from '../../assets/logo.png';
import { RiTwitterXFill } from 'react-icons/ri';
import { TiSocialFacebook, TiSocialLinkedin } from 'react-icons/ti';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className="bg-[#001931]">
            <div className="max-w-11/12 mx-auto flex justify-between items-center border-b-1 border-gray-700">
                <div className="">
                    <a
                        href="/"
                        className="flex justify-between items-center gap-1  text-white text-[16px] font-bold leading-[26px] tracking-normal">
                        <img className="w-10" src={Logo} alt="Hero.io" />{' '}
                        HERO.IO
                    </a>
                </div>
                <div className="pt-8">
                    <h3 className="text-white mb-4">Social Links</h3>
                    <div className="flex justify-between items-center gap-4">
                        <NavLink to={'/'}>
                            <RiTwitterXFill className="bg-white rounded-full p-1 text-2xl" />
                        </NavLink>
                        <NavLink to={'/'}>
                            <TiSocialLinkedin className="bg-white rounded-full p-1 text-2xl" />
                        </NavLink>
                        <NavLink to={'/'}>
                            <TiSocialFacebook className="bg-white rounded-full p-1 text-2xl" />
                        </NavLink>
                    </div>
                </div>
            </div>
            <p className="text-center py-7 text-[#FAFAFA]">
                Copyright © 2025 - All right reserved
            </p>
        </div>
    );
};

export default Footer;
