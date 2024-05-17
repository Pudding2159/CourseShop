"use client";
import React, { useEffect, useRef } from 'react';
import '@styles/Fonts.css';
import '@styles/Light_style.css'
import '@styles/More_button.css'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill, BsHouseAdd } from 'react-icons/bs'
import Link from 'next/link';
import SplitType from 'split-type';
import gsap from 'gsap';


const Main = () => {
    // Создаем массив рефов
    const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        const createAnimation = (ref, timeline, params) => {
            const typeSplit = new SplitType(ref.current, {
                types: params.types, // Используем типы из параметров
                tagName: 'span'
            });

            // Устанавливаем начальное состояние текста
            const elements = typeSplit[params.types];
            gsap.set(elements, { y: '100%', opacity: 0 });

            // Добавляем анимацию в таймлайн с переданными параметрами
            timeline.to(elements, {
                y: params.y,
                opacity: 1,
                duration: params.duration,
                ease: params.ease,
                stagger: params.stagger,
                // clearProps: 'all'
            });

            return typeSplit;
        };

        const tl = gsap.timeline({ delay: 1.6 });

        const animationParams = [
            { duration: 0.5, ease: 'power4.out', stagger: 0.4, types: 'words', y: '0%' },
            { duration: 1.3, ease: 'power4.out', stagger: 0.4, types: 'words', y: '-25%' },
            { duration: 0.15, ease: 'expo.out', stagger: 0.3, types: 'words', y: '0%' },
            { duration: 0.7, ease: 'expo.out', stagger: 0, types: 'lines', y: '0%' },
            { duration: 0.5, ease: 'expo.out', stagger: 0, types: 'lines', y: '0%' }
        ];

        const splitTypes = refs.map((ref, index) => createAnimation(ref, tl, animationParams[index]));

        return () => {
            splitTypes.forEach(typeSplit => typeSplit.revert());
        };
    }, []);

    return (
        <div id="Home" className="w-full h-screen text-center">
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center text-left md:pt-[200px] xs:pt-[50%]' >

                <div className="">

                    <p ref={refs[2]} className='uppercase text-ms tracking-widest text-[#D9DAD8]' >Let's work together</p>

                    <h1 ref={refs[0]} className='uppercase text-5xl text-[#D9DAD8] ms:hidden font-viola'>
                        Rita <span className="text-[#D9DAD8]  font-viola">Hory</span>
                    </h1>

                    <h1 ref={refs[1]} className='py-10 overflow-hidden uppercase h-[200px] text-[200px] text-[#D9DAD8] hidden ms:block font-viola'>
                        Rita Hory
                        {/* key-tag */}
                    </h1>

                    <div ref={refs[3]} className='overflow-hidden'>
                        <h1 className='uppercase xs:py-3 md:py-14 md:pl-32 xs:text-lg ms:text-xl tracking-widest text-[#D9DAD8] '>
                            Experienced pianist and music composer with
                            over 10 years of experience  and a professional music teacher.
                        </h1>
                    </div>

                    <div className='flex justify-center' >

                        <div className="flex justify-center xs:p-14 md:p-14" ref={refs[4]}>
                            <Link href='/#Select'>
                                <button className="btn">
                                    <svg
                                        width="30"
                                        height="30"
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
                                    <span className="text-2xl text-[#2e2b2b] font-viola pl-3">More </span>
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main