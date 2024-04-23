"use client";
import React from 'react'
// import '@styles/Main.css';
import '@styles/Fonts.css';
import '@styles/Light_style.css'
import '@styles/More_button.css'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill, BsHouseAdd } from 'react-icons/bs'
import Link from 'next/link';


const Main = () => {
    return (
        <div id="Home" className="w-full h-screen text-center">
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center text-left' >

                <div className="">

                    <p className='uppercase text-ms tracking-widest text-[#D9DAD8] p-3 md:pt-10 xs:pt-4' >Let's work together</p>

                    <h1 className='uppercase text-5xl text-[#D9DAD8] ms:hidden font-viola'>
                        Rita <span className="text-[#D9DAD8]  font-viola">Hory</span>
                    </h1>

                    <h1 className='uppercase py-2 text-9xl text-[#D9DAD8] hidden ms:block font-viola'>
                        Rita <span className="text-[#D9DAD8]   ">Hory</span> 
                        {/* key-tag */}
                    </h1>

                    <h1 className='uppercase py-2 xs:text-lg ms:text-xl tracking-widest text-[#D9DAD8] '>
                        Experienced <span className="text-[#D9DAD8]">pianist and music composer</span> with
                        <span className="text-[#D9DAD8]"> over 10 years of experience</span> and a <span className="text-[#D9DAD8]">professional music teacher.</span>
                    </h1>


                    <div className="flex justify-center xs:p-7 md:p-14 ">
                    <Link href='/#Select'>
                        <button className="btn">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#2e2b2b"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    // fill-rule="evenodd"
                                    // clip-rule="evenodd"
                                    d="M22 6.00086C22 3.54932 19.8148 1.6746 17.3918 2.04737L10.3918 3.1243C8.44044 3.4245 7 5.1035 7 7.07778V15.8407C6.54537 15.6248 6.0368 15.5039 5.5 15.5039C3.567 15.5039 2 17.0709 2 19.0039C2 20.9369 3.567 22.5039 5.5 22.5039C7.43296 22.5039 8.99994 20.937 9 19.004V7.07778C9 6.09064 9.72022 5.25114 10.6959 5.10104L17.6959 4.02412C18.9074 3.83773 20 4.77509 20 6.00086V12.8407C19.5454 12.6248 19.0368 12.5039 18.5 12.5039C16.567 12.5039 15 14.0709 15 16.0039C15 17.9369 16.567 19.5039 18.5 19.5039C20.433 19.5039 21.9999 17.937 22 16.004V6.00086ZM20 16.0039C20 15.1755 19.3284 14.5039 18.5 14.5039C17.6716 14.5039 17 15.1755 17 16.0039C17 16.8323 17.6716 17.5039 18.5 17.5039C19.3284 17.5039 19.9999 16.8323 20 16.0039ZM7 19.0039C7 18.1755 6.32843 17.5039 5.5 17.5039C4.67157 17.5039 4 18.1755 4 19.0039C4 19.8323 4.67157 20.5039 5.5 20.5039C6.32839 20.5039 6.99994 19.8323 7 19.0039Z"
                                    // fill="currentColor"
                                />
                            </svg>
                            <span className="text-2xl text-[#2e2b2b] font-viola">More </span>
                        </button>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main