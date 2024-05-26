"use client";
import React, { useEffect, useRef } from 'react';
import '@styles/Fonts.css';
import '@styles/globals.css';

import '@styles/Light_style.css'
import '@styles/More_button.css'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill, BsHouseAdd } from 'react-icons/bs'
import Link from 'next/link';
import '@styles/SliderAnimation.css'

import SplitType from 'split-type';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
    const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        const createAnimation = (ref, timeline, params) => {
            const typeSplit = new SplitType(ref.current, {
                types: params.types,
                tagName: 'span'
            });

            const elements = typeSplit[params.types];
            gsap.set(elements, { y: '100%', opacity: 0 });

            timeline.to(elements, {
                y: params.y,
                opacity: 1,
                duration: params.duration,
                ease: params.ease,
                stagger: params.stagger,
            });

            return typeSplit;
        };

        const getAnimationParams = () => {
            if (window.innerWidth <= 768) {
                return [
                    { duration: 0.5, ease: 'power4.out', stagger: 0.5, types: 'words', y: '0%', start: "top 15%", end: "top 10%" },
                    { duration: 0, ease: 'power4.out', stagger: 0.4, types: 'words', y: '-30%', start: "top 15%", end: "top 10%" },
                    { duration: 0.08, ease: 'expo.out', stagger: 0.4, types: 'lines', y: '0%', start: "top 15%", end: "top 5%" },
                    { duration: 0.2, ease: 'expo.out', stagger: 0, types: 'lines', y: '0%', start: "top 40%", end: "top 30%" },
                    { duration: 0.1, ease: 'expo.out', stagger: 0, types: 'lines', y: '0%', start: "top 60%", end: "top 50%" },
                    { duration: 0.1, ease: 'expo.out', stagger: 0, types: 'lines', y: '0%', start: "top 60%", end: "top 50%" }
                ];
            } else {
                return [
                    { duration: 0.5, ease: 'power4.out', stagger: 0.4, types: 'words', y: '0%', start: "top 10%", end: "top 10%" },
                    { duration: 0.8, ease: 'power4.out', stagger: 0.3, types: 'words', y: '-25%', start: "top 10%", end: "top -15%" },
                    { duration: 0.08, ease: 'expo.out', stagger: 0.3, types: 'lines', y: '0%', start: "top 10%", end: "top -15%" },
                    { duration: 0.2, ease: 'expo.out', stagger: 0, types: 'lines', y: '0%', start: "top 50%", end: "top 40%" },
                    { duration: 0.1, ease: 'expo.out', stagger: 0, types: 'lines', y: '0%', start: "top 70%", end: "top 60%" },
                    { duration: 0.1, ease: 'expo.out', stagger: 0, types: 'lines', y: '0%', start: "top 70%", end: "top 60%" }
                ];
            }
        };

        const tl = gsap.timeline({ delay: 1.6 });
        const animationParams = getAnimationParams();

        const splitTypes = refs.map((ref, index) => createAnimation(ref, tl, animationParams[index]));

        refs.forEach((ref, index) => {
            let params = animationParams[index];
            ScrollTrigger.create({
                trigger: ref.current,
                start: params.start,
                end: params.end,
                markers: 'true',
                onUpdate: (self) => {
                    gsap.to(ref.current, { opacity: 1 - self.progress, ease: 'power1.out', duration: 0.35 });
                }
            });
        });

        return () => {
            splitTypes.forEach(typeSplit => typeSplit.revert());
        };
    }, []);

    return (
        <div id="Home">

            <div className='gradient-background w-full h-screen mx-auto p-2 flex justify-center items-center text-left md:pt-[0px] xs:pt-[50%]'>

                <div className="max-w-[1800px] md:pl-20">

                    <p ref={refs[2]} className='overflow-hidden md:pl-5  uppercase xs:text-2xl md:text-4xl tracking-widest text-[#D9DAD8] font-viola' >Let's work together</p>

                    <h1 ref={refs[0]} className='uppercase text-5xl text-[#D9DAD8] ms:hidden font-viola'>
                        Rita <span className="text-[#D9DAD8]  font-viola">Hory</span>
                    </h1>

                    <h1 ref={refs[1]} className='md:py-10 text-center overflow-hidden uppercase h-[260px] text-[280px] text-[#D9DAD8] hidden ms:block font-viola'>
                        Rita Hory
                        {/* key-tag */}
                    </h1>

                    <div ref={refs[3]} className='overflow-hidden'>
                        <h1 className='uppercase xs:py-3 md:py-14 md:pl-5 md:text-4xl xs:text-lg tracking-widest text-[#D9DAD8] font-viola'>
                            Experienced pianist and music composer with
                            over 10 years of experience  and a professional music teacher.
                        </h1>
                    </div>


                    {/* md:p-14 */}
                    {/* ref={refs[4]} */}
                    <div className="overflow-hidden md:pt-10 flex flex-row justify-between text-sm md:text-3xl text-[#D9DAD8]  font-face-my69 ">
                        <div className="md:pl-5 w-auto h-auto  flex flex-col"  ref={refs[4]} >
                            <div>50.8136° S, 30.9631° E</div>
                            <div>KYIV, UKRAINE</div>
                        </div>

                        <div>
                            <p className="md:pr-10"  ref={refs[5]} >( SCROLL FOR MORE ↓ )</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Main