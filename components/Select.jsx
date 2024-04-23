import React from 'react';
import '@styles/Fonts.css';
import Image from 'next/image'; // Импорт Image из next/image

function Select() {
    return (

        <div className="flex flex-col w-screen h-auto m-auto md:pt-[600px] max-w-[1240px] p-3">

            <div className = "uppercase text-[#3F3C38] text-center xs:text-5xl md:text-6xl font-viola p-3">
                Select you type
            </div>


            <div className="w-full h-full md:grid grid-flow-col grid-cols-3 gap-10 pt-10">

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
