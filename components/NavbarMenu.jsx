"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill, BsHouseAdd } from 'react-icons/bs'
import '@styles/Light_style.css'
import "@styles/Fonts.css"

const NavbarM = () => {
    const [nav, setNav] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleNav = () => {
        setNav(!nav);
    };

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShowNav(false);
                setNav(false);
            } else { // if scroll up show the navbar
                setShowNav(true);
                setNav(false);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function to remove the listener when the component unmounts
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
<div className={`fixed w-full h-20 shadow-xl z-[100] transition-all duration-[800ms] ${showNav ? 'top-0 opacity-100' : 'top-[-100%] opacity-0'}`}>
            <div className='fixed w-full h-20 bg-[#122e49] shadow-xl z-[100]'>
                <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>


                    <div className="py-5 w-full">
                        <ul className='hidden ms:flex flex-row justify-center gap-32' >
                            <Link href='/#Home'>
                                <h1>
                                    <span className="p-4  key-tag font-face-my38 text-xl" >
                                        Home
                                    </span>
                                </h1>
                            </Link>

                            <Link href='/#Skills'>
                                <h1>
                                    <span className="p-4 key-tag font-face-my38 text-xl" >
                                        Skills
                                    </span>
                                </h1>
                            </Link>

                            <Link href='/#Project'>
                                <h1>
                                    <span className="p-4 key-tag font-face-my38 text-xl" >
                                        Project
                                    </span>
                                </h1>
                            </Link>

                            <Link href='/#Home'>
                                <h1>
                                    <span className="p-4 key-tag font-face-my38 text-xl" >
                                        Contact
                                    </span>
                                </h1>
                            </Link>

                        </ul>
                    </div>

                    <div className="flex flex-none ms:px-10 xs:px-5">
                        <div onClick={handleNav}>
                            <Image
                                src='/icons/Home_Icon.png'
                                width={47}
                                height={47}
                                alt='Home'
                            />
                        </div>
                    </div>
                </div>


                <div className={nav ? 'fixed left-0 top-0 w-full bg-black/70' : ''} >
                    <div className={nav
                        ? 'fixed left-0 top-0 w-[60%] sm:w-[60%] ms:w-[25%] h-screen bg-[#8695a1] p-10 ease-in duration-500'
                        : 'fixed left-[-110%] top-0 p-10 ease-in duration-500'
                    } >

                        <div>
                            <div className="flex w-full items-center justify-between">
                                <div onClick={handleNav} className="bg-[#d0d0d0] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer" >
                                    <AiOutlineClose />
                                </div>
                            </div>

                            <div className="border-b border-gray-300 my-4 ms:pt-14" >
                                <p className="w-[85%] ms:w-[90%] py-4 text-[#DDC6B6] text-xl font-face-my38" >Lest  build something legendery</p>
                            </div>

                        </div >
                        <div>
                            <ul className = "ms:pt-20">
                                <Link href='/#Home'>
                                    <h1>
                                        <span className="p-4 key-tag font-face-my38 font-face-my38 text-xl" >
                                            Home
                                        </span>
                                    </h1>
                                </Link>
                                <Link href='/#Skills'>
                                    <h1>
                                        <span className="p-4 key-tag font-face-my38 text-xl" >
                                            Skills
                                        </span>
                                    </h1>
                                </Link>

                                <Link href='/#Project'>
                                    <h1>
                                        <span className="p-4 key-tag font-face-my38 text-xl" >
                                            Project
                                        </span>
                                    </h1>
                                </Link>

                                <Link href='/#Home'>
                                    <h1>
                                        <span className="p-4 key-tag font-face-my38 text-xl" >
                                            Contact
                                        </span>
                                    </h1>
                                </Link>
                            </ul>
                            <div className="xs:pt-10 sm:pt-28 ms:pt-40" >

                                <p className="p-4 font-face-my38 uppercase tracking-widest text-[#DDC6B6]" >
                                    Let's connect
                                </p>
                                <div className='flex items-center justify-between my-4 w-full sm:w-[40%]'>
                                    <div
                                        className='rounded-full shadow-lg shadow-gray-50 bg-[#303030] pt-3 cursor-pointer hover:scale-105 ease-in duration-300 w-10 h-10 flex items-center justify-center'
                                    >
                                        <FaLinkedinIn style={{ color: 'white', position: 'relative', top: '-4px', left: '-1px' }} />
                                    </div>
                                    <div
                                        className='rounded-full shadow-lg shadow-gray-50 bg-[#303030] pt-3 cursor-pointer hover:scale-105 ease-in duration-300 w-10 h-10 flex items-center justify-center'
                                    >
                                        <FaGithub style={{ color: 'white', position: 'relative', top: '-4px', left: '-1px' }} />
                                    </div>
                                    <div
                                        className='rounded-full shadow-lg shadow-gray-50 bg-[#303030] pt-3 cursor-pointer hover:scale-105 ease-in duration-300 w-10 h-10 flex items-center justify-center'
                                    >
                                        <AiOutlineMail style={{ color: 'white', position: 'relative', top: '-4px', left: '-1px' }} />
                                    </div>
                                    <div
                                        className='rounded-full shadow-lg shadow-gray-50 bg-[#303030] pt-3 cursor-pointer hover:scale-105 ease-in duration-300 w-10 h-10 flex items-center justify-center'
                                    >
                                        <BsFillPersonLinesFill style={{ color: 'white', position: 'relative', top: '-4px', left: '-1px' }} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </div>
    );
};

export default NavbarM;



