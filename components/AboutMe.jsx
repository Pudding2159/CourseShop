import React from 'react'

function AboutMe() {
    return (
        <div id="About">
            <div className="w-full flex flex-col md:h-full  items-center xs:p-5  md:py-48 z-[10] font-viola" >
                <div className='max-w-[1240px]'>
                    <div className=" text-[#3F3C38] mt-4 font-viola text-6xl md:text-9xl pb-8 text-center uppercase">Your musical mentor 𝄞</div>

                    <div className="m-auto ms:grid grid-cols-11 font-viola gap-20  z-[10]" >


                        <div className='flex  col-start-1 col-end-6 w-auto h-4/6 m-auto shadow-xl shadow-gray-900
                    rounded-xl  items-center justify-center p-6 pt-8 hover:scale-105 ease-in duration-300'>
                            <img className=' rounded-xl w-auto h-full' src="/images/Hory_image_cut.jpg" alt='/' />
                        </div>

                        <div className="col-start-6 col-end-7 flex flex-col items-center justify-center text-center h-full font-viola">
                            <div className="rounded-3xl w-2/12 h-5/6 bg-[#3F3C38]"></div>
                        </div>


                        <div className="flex flex-col pt-20  col-start-7 col-end-13 w-auto h-auto  items-center text-left font-viola">

                            <p className="xs:text-2xl sm:text-3xl md:text-5xl text-[#3F3C38] mt-4 ">
                                Hi! I'm Rita a pianist, vocalist, and songwriter. My career spans professional performances and teaching.
                                I offer piano lessons, vocal training, and custom songwriting services. I strive to inspire each student and assist
                                in bringing musical projects to life
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe