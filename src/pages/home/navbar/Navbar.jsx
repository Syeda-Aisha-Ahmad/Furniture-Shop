import React from 'react';
import { VscSearch } from "react-icons/vsc";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=' lg:px-10'>


            {/* navbar */}

            <div className="navbar bg-base-100">
                <div className="navbar-start">

                    <a className="btn btn-ghost text-3xl">Umea</a>

                    <ul className="menu menu-horizontal text-base px-1 hidden lg:flex font-semibold">
                        <li>
                            <details>
                                <summary><Link to={"/"}>Home</Link></summary>
                                <ul className="p-2 w-[250px] rounded-none">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end lg:gap-6">
                    <div className='hidden lg:flex items-center gap-1 font-semibold'>
                        <VscSearch className='text-xl' />
                    </div>

                    <div className='hidden lg:flex items-center gap-1 font-semibold'>
                        <IoPersonOutline className='text-xl' />
                    </div>

                    <div className='hidden lg:flex items-center gap-1 font-semibold'>
                        <CiShoppingCart className='text-2xl' />
                    </div>



                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-1">
                            <li>
                                <details>
                                    <summary><Link to={"/"}>Home</Link></summary>
                                    <ul className="p-2 w-[250px] rounded-none">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;