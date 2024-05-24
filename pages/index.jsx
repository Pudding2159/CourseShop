"use client";
import React, { useEffect } from 'react';
import CustomCursor from '@components/Cursors';
import NavbarMenu from '@components/NavbarMenu';
import Main from "@components/Main";
import About from "@components/About";
import Skills from '@components/Skills';
import Projects from '@components/Projects';
import { Reveal } from '@components/Reveal';
import Select from '@components/Select';
import Slider from '@components/Slider';
import Template from '@components/template';
import { PanelScroll } from '@components/PanelScroll';

const Home = ({ children }) => {
    useEffect(() => {
        const setHeight = () => {
            const height = window.innerHeight;
            document.documentElement.style.height = `${height}px`;
            document.body.style.height = `${height}px`;
            const wrapper = document.getElementById('wrapper');
            if (wrapper) {
                wrapper.style.height = `${height}px`;
            }
        };

        // Initial set height
        setHeight();

        // Update height on resize
        window.addEventListener('resize', setHeight);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', setHeight);
        };
    }, []);

    useEffect(() => {
        PanelScroll();
    }, []);

    return (
        <div id="wrapper">
            <div className="hidden md:flex">
                {/* <CustomCursor /> */}
            </div>
            <NavbarMenu />
            <div className="circle"></div>
            <div className="main">
                <div className="gradient" />
            </div>
            <main className='app'>
                <div className="panel blue">
                    <Main />
                </div>
                <Reveal>
                    <div className="panel fiol">
                        <Select />
                    </div>
                </Reveal>
                <Reveal>
                    <div className="panel red">
                        <Slider />
                    </div>
                </Reveal>
                {children}
            </main>
        </div>
    );
}

export default Home;
