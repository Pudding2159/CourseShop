import React, { useEffect, useRef } from 'react';
import '@styles/Fonts.css';
import Image from 'next/image'; // Импорт Image из next/image
import '@styles/Music.css';
import "@styles/Button.sass"
import "@styles/new_button.css"
import gsap from 'gsap';
import SplitType from 'split-type';
import SmoothScroll from './SmoothScroll';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Course from './Course';



function Select() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const newElementRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Прекратить наблюдение после начала анимации
                }
            });
        }, { threshold: 0.5 });

        observer.observe(ref1.current);
        observer.observe(ref2.current);
        observer.observe(ref3.current);

        const elements = [newElementRef.current];

        const observer_1 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const typeSplit = new SplitType(entry.target, {
                        types: 'words',
                        tagName: 'span'
                    });

                    const words = entry.target.querySelectorAll('span');
                    gsap.set(words, { y: '100%', opacity: 0 });

                    gsap.to(words, {
                        duration: 1.2,
                        ease: 'power4.out',
                        stagger: 0.2,
                        y: '0%',
                        opacity: 1,
                    });
                    observer_1.unobserve(entry.target); // Прекратить наблюдение после начала анимации
                }
            });
        }, { threshold: 0.5 });

        elements.forEach(element => {
            observer_1.observe(element);
        });

        return () => { // Очистка
            observer.disconnect();
            observer_1.disconnect();
        };
    }, []);



    return (
        <div style={{ backgroundColor: '#FFFFFF' }} className=" rounded-3xl">

            <div className="flex flex-col w-screen h-auto m-auto max-w-[1240px] md:pb-[200px]">
                <div className="flex flex-row relative justify-center md:pt-16">
                    <div ref={newElementRef} className="uppercase text-[#3F3C38] text-center xs:text-5xl md:text-[100px] md:pt-20 font-viola p-3 col-span-5 col-start-1 col-end-5">
                        Select your type
                    </div>

                    <div className="col-start-6 xs:pt-3 pl-2 xs:hidden md:flex md:pt-16">
                        <svg width="120" height="100" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Music Icon</title>
                            <path className="bar1" fill="#96A2B4" d="M14 2h3.984v18H14" />
                            <path className="bar2" fill="#96A2B4" d="M8 20V2h3.984v18" />
                            <path className="bar3" fill="#96A2B4" d="M2 20V2h3.984v18" />
                        </svg>
                    </div>
                </div>

                <div className="w-full h-full md:grid grid-flow-col grid-cols-3 gap-10 pt-10 " id="Select">

                    <div className="relative flex w-full md:h-[75vh] xs:h-[60vh] justify-center xs:p-10 md:p-0 rounded-lg overflow-hidden group">

                        <div className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 z-10 bg-gradient-to-r from-[#3C3935] to-[#4d4d4d]"></div>
                        <Image
                            src="/images/type_1.jpg"
                            alt="1"
                            width={1000}
                            height={1000}
                            className="object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 opacity-100 group-hover:opacity-10 z-0 rounded-lg"
                        />

                        <div className="absolute inset-0 flex justify-center items-center">
                            <p className="text-white  text-5xl md:text-5xl font-viola">Type 1</p>
                        </div>

                        <div className="hidden group-hover:flex absolute inset-0 items-center justify-center flex-col z-20">
                            <div className="p-10" >
                                <p className="text-white  text-xl md:text-2xl font-viola text-center">Text Text Text Text Text Text Text Text Text</p>
                            </div>

                            <teg_1 ref={ref1} >
                                <span className="font-viola" >MORE INFO</span>
                            </teg_1>
                        </div>

                    </div>

                    <div className="relative flex w-full md:h-[75vh] xs:h-[60vh] justify-center xs:p-10 md:p-0 rounded-lg overflow-hidden group">
                        <div className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 z-10 bg-gradient-to-r from-[#3C3935] to-[#4d4d4d]"></div>
                        <Image
                            src="/images/type_2.webp"
                            alt="1"
                            width={1000}
                            height={1000}
                            className="object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 opacity-100 group-hover:opacity-10 z-0 rounded-lg"
                        />

                        <div className="absolute inset-0 flex justify-center items-center">
                            <p className="text-white  text-5xl md:text-5xl font-viola">Type 2</p>
                        </div>

                        <div className="hidden group-hover:flex absolute inset-0 items-center justify-center flex-col z-20">
                            <div className="p-10" >
                                <p className="text-white  text-xl md:text-2xl font-viola text-center">Text Text Text Text Text Text Text Text Text</p>
                            </div>

                            <teg_1 ref={ref2}>
                                <span className="font-viola" >MORE INFO</span>
                            </teg_1>
                        </div>

                    </div>


                    <div className="relative flex w-full md:h-[75vh] xs:h-[60vh] justify-center xs:p-10 md:p-0 rounded-lg overflow-hidden group">
                        <div className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 z-10 bg-gradient-to-r from-[#3C3935] to-[#4d4d4d]"></div>
                        <Image
                            src="/images/type_3.jpg"
                            alt="1"
                            width={1000}
                            height={1000}
                            className="object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 opacity-100 group-hover:opacity-10 z-0 rounded-lg"
                        />

                        <div className="absolute inset-0 flex justify-center items-center">
                            <p className="text-white  text-5xl md:text-5xl font-viola">Type 3</p>
                        </div>

                        <div className="hidden group-hover:flex absolute inset-0 items-center justify-center flex-col z-20">
                            <div className="p-10" >
                                <p className="text-white  text-xl md:text-2xl font-viola text-center">Text Text Text Text Text Text Text Text Text</p>
                            </div>

                            <teg_1 ref={ref3}>
                                <span className="font-viola" >MORE INFO</span>
                            </teg_1>
                        </div>

                    </div>


                </div>

            </div>

            <div>
                <AboutMe />
            </div>

            <div>
                <Course />
            </div>

        </div>
    )
}

export default Select;