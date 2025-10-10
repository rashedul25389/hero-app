import React from 'react';
import Logo from '../../assets/logo.png';
import { FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar max-w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                {' '}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{' '}
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow">
                            <li className="">
                                <NavLink
                                    to={'/'}
                                    className="text-[16px] font-semibold p-0 border-b-3 border-transparent pb-[5px]">
                                    Home
                                </NavLink>
                            </li>
                            <li className="">
                                <NavLink
                                    to={'/allapps'}
                                    className="text-[16px] font-semibold p-0 border-b- border-transparent pb-[5px]">
                                    Apps
                                </NavLink>
                            </li>
                            <li className="">
                                <NavLink
                                    to={'/installation'}
                                    className="text-[16px] font-semibold p-0 border-b-3 border-transparent pb-[5px]">
                                    Installation
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink
                        to={'/'}
                        className="flex justify-between items-center gap-1 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-[16px] font-bold leading-[26px] tracking-normal">
                        <img className="w-10" src={Logo} alt="Hero.io" />{' '}
                        HERO.IO
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex justify-between items-center gap-5 p-3">
                        <li>
                            <NavLink
                                to={'/'}
                                className="text-[16px] font-semibold transition-transform duration-300 hover:scale-103 hover:shadow-xl">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/allapps'}
                                className="text-[16px] font-semibold transition-transform duration-300 hover:scale-103 hover:shadow-xl">
                                Apps
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/installation'}
                                className="text-[16px] font-semibold transition-transform duration-300 hover:scale-103 hover:shadow-xl">
                                Installation
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink
                        to={'https://github.com/'}
                        className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-inter text-[16px] font-semibold transition-transform duration-300 hover:scale-103 hover:shadow-xl">
                        <FaGithub className="w-5 h-5" />
                        Contribute
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
