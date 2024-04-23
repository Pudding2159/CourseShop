import React from 'react';
import '@styles/Fonts.css';
import Image from 'next/image'; // Импорт Image из next/image
import '@styles/Music.css';

function Select() {
    return (

        <div  className="flex flex-col w-screen h-auto m-auto md:pt-[600px] max-w-[1240px] p-3">

            <div className="flex flex-row relative justify-center" id="Select">
                <div className="uppercase text-[#3F3C38] text-center xs:text-5xl md:text-6xl font-viola p-3 col-span-5 col-start-1 col-end-5">
                    Select your type
                </div>

                <div className="col-start-6 pt-3 pl-2 xs:hidden md:flex">
                    <svg width="50" height="50" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Music Icon</title>
                        <path className="bar1" fill="#96A2B4" d="M14 2h3.984v18H14" />
                        <path className="bar2" fill="#96A2B4" d="M8 20V2h3.984v18" />
                        <path className="bar3" fill="#96A2B4" d="M2 20V2h3.984v18" />
                    </svg>
                </div>
            </div>
            <div className="w-full h-full md:grid grid-flow-col grid-cols-3 gap-10 pt-10 ">

                <div className="relative flex w-full md:h-[75vh] xs:h-[60vh] justify-center xs:p-10 md:p-0">
                    <Image src="/images/type_1.jpg" alt="1" width={1000} height={1000} className='object-cover rounded-lg' />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <p className="text-white text-5xl md:text-5xl font-viola">Type 1</p>
                    </div>
                </div>

                <div className="relative flex w-full md:h-[75vh] xs:h-[60vh] justify-center xs:p-10 md:p-0">
                    <Image src="/images/type_2.webp" alt="1" width={1000} height={1000} className='object-cover rounded-lg' />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <p className="text-white  text-5xl md:text-5xl font-viola">Type 2</p>
                    </div>
                </div>


                <div className="relative flex w-full md:h-[75vh] xs:h-[60vh] justify-center xs:p-10 md:p-0">
                    <Image src="/images/type_3.jpg" alt="1" width={1000} height={1000} className='object-cover rounded-lg' />
                    <div className="absolute inset-0 flex justify-center items-center ">
                        <p className="text-white  text-5xl md:text-5xl font-viola">Type 3</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Select;
