"use client";
import React, { useEffect, useRef } from 'react';
import '@styles/Fonts.css';
import '@styles/globals.css';

import Clef from '@models/Clef';
import { Canvas } from '@react-three/fiber';
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
                    { duration: 0.5, ease: 'power4.out', stagger: 0.5, types: 'words', y: '0%', start: "top 0%", end: "top 0%" },
                    { duration: 0, ease: 'power4.out', stagger: 0.4, types: 'words', y: '0%', start: "top 20%", end: "top 0%" },
                    { duration: 0.08, ease: 'power4.out', stagger: 0.4, types: 'words', y: '8%', start: "top -10%", end: "top -50%" },
                    { duration: 0.2, ease: 'expo.out', stagger: 0, types: 'lines', y: '0%', start: "top 20%", end: "top 0%" },
                    { duration: 0.1, ease: 'expo.out', stagger: 0, types: 'lines', y: '0%', start: "top 60%", end: "top 50%" },
                    { duration: 0.1, ease: 'expo.out', stagger: 0, types: 'lines', y: '0%', start: "top 60%", end: "top 50%" }
                ];
            } else {
                return [
                    { duration: 0.5, ease: 'power4.out', stagger: 0.4, types: 'words', y: '0%', start: "top 10%", end: "top 10%" },
                    { duration: 0.8, ease: 'power4.out', stagger: 0.3, types: 'words', y: '0%', start: "top 35%", end: "top -10%" },
                    { duration: 0.08, ease: 'expo.out', stagger: 0.3, types: 'lines', y: '0%', start: "top 0%", end: "top -50%" },
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

            <div className='gradient-background w-full h-screen mx-auto p-2 flex justify-center items-center '>

                <div className="xs:pt-[50vh] md:pt-[0vh] md:px-[8vw] h-full md:text-center xs:text-left ">

                    {/* <p ref={refs[2]} className='overflow-hidden md:pl-5  uppercase xs:text-2xl md:text-4xl tracking-widest text-[#D9DAD8] font-viola' >Let's work together</p> */}


                    <div > {/* Высота больше 100vh для демонстрации прокрутки */}
                        <div style={{ position: 'fixed', top: 0, left: "10%", width: '80vw', height: '100vh', pointerEvents: 'none' }}>
                            < Canvas ref={refs[2]} className='flex'>
                                <ambientLight color={"white"} intensity={1.8} />
                                <ambientLight intensity={0.8} />
                                <pointLight position={[0, -10, 0]} />
                                <Clef position={[-1, -7, -10]} scale={[0.2, 0.2, 1]} />
                                {/* OrbitControls удалены, чтобы предотвратить взаимодействие с сценой */}
                            </Canvas>

                            {/* Текстовый слой поверх Canvas */}
                            <div ref={refs[3]} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000 }}
                                className="xs:flex flex-col text-[#D9DAD8] font-viola xs:text-8xl md:text-[13vw]  text-center md:hidden">
                                            <span className='md:mr-20'>RITA</span><span className='md:mr-20'>HORY</span>
                            </div>

                            <div ref={refs[1]} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000 }}
                                className=" text-[#D9DAD8] font-viola xs:text-8xl md:text-[12vw]  text-center xs:hidden md:flex overflow-hidden">
                                            <span style={{ margin: '0 170px' }}>RITA</span><span style={{ margin: '0 80px' }}>HORY</span>

                            </div>

                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Main