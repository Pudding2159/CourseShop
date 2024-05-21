"use client";
import React from 'react'
import '@styles/globals.css';
import CustomCursor from '@components/Cursors';
import NavbarMenu from '@components/NavbarMenu';
import Main from "@components/Main";
import About from "@components/About"
import Skills from '@components/Skills';
import Projects from '@components/Projects';
import { Reveal } from '@components/Reveal';
import Select from '@components/Select';
import Slider from '@components/Slider';
import Template from '@components/template';
const Home = ({ children }) => {
    return (
        <Template>

        <div>

            <div className="hidden md:flex">
                {/* <CustomCursor /> */}
            </div>
            <NavbarMenu />

            <div className="circle"></div>
            <div className="main">
                <div className="gradient" />
            </div>
            <main className='app'>

                <div>
                    <Main />

                    {/* <Reveal>
                        <About />
                    </Reveal> */}

                    <Reveal>
                        <Select />
                    </Reveal>
                    {/* <Reveal>
                        <Skills />
                    </Reveal>
                    */}
                    <Reveal>
                        <Slider />
                    </Reveal>

                    {children}
                </div>
            </main>


        </div>
        </Template>


    );
}

export default Home;
