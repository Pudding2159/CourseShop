"use client"; 
import React from 'react';
import Image from 'next/image';

const Contact = () => {
    return (
        <div className="w-full lg:s-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full" >

                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Contact
                </p>


                <h2 className="py-4"> Get IN Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">

                    <div className = "col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4" >
                        <div className = "lg:p-4 h-full">
                            <Image 
                            className = "rounded-xl hover:scale-105 ease-in duration-300"
                            src="/images/contact.jpg"
                            width={1000}
                            height={10}
                            alt = "/"
                            />


                        </div>
                        
                        <div className = "" >
                            <h2 className = "py-2">
                                Name heare
                            </h2>
                            <p>Backend developer</p>
                            <p className = "pt-4">I am availibale</p>

                            
                        </div>

                        <div className = "">
                            

                            
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact