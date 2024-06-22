import React from "react";
import Icons from "../components/icons";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { SiDatabricks } from "react-icons/si";
import { IoLanguageSharp } from "react-icons/io5";
import { FaHandsHelping } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Skills = [
    {
        id: 1,
        name: 'FrontEnd',
        description: 'HTML5, CSS, JavaScript, React JS, HandleBars.',
        icon: <HiMiniCodeBracket/>
    },
    {
        id: 2,
        name: 'BackEnd',
        description: 'Express JS, Node JS, MERN Applications, MySQL, NoSQL, MongoDB.',
        icon: <SiDatabricks/>
    },
    {
        id: 3,
        name: 'Soft Skills',
        description: 'Team Work, Leadership, Enthusiastic, Communicative.',
        icon: <FaHandsHelping/>
    },
    {
        id: 4,
        name: 'Languages',
        description: [
            'Spanish - Native Language.',
            ' ',
            'English - Fluent.'
        ],
        icon: <IoLanguageSharp/>
    }
]

export default function AboutMe(){
    return (
        <>
            <div data-aos='fade-right' data-aos-delay="100" id="aboutMe" className="bg-orange-100 w-screen">
                <div className="img-container grid">
                    <img id="orange-powder" className="col-start-1 row-start-1 w-70 h-[50%] object-cover object-top-right scale-y-[-1] opacity-70" src="/assets/orange.png"></img>
                    <div className="picture-container left-0">
                        <img data-aos='fade-left' data-aos-delay="300" className="about-picture object-cover" src="/assets/about-me.png"></img>
                    <div className="absolute justify-center text-container">
                        <h1 className="ml-[65%]">
                            <span id="about-title">MARIA</span>
                            <br></br>
                            <span id="about-subTitle">Angulo.</span>
                        </h1>
                        <div className="absolute text-description">
                        <p className="py-4 px-2">
                            <span className="text-sub"> 
                            <TypeAnimation
                            sequence={['Developing for a reason.', 500, 'Developing for a reason.', 500]}
                            repeat={1}
                            speed={15}
                            /></span>
                            <br></br>
                            Passionate and extremely delighted about Front-End coding, cause everything is about FIRST Impressions and presentation.
                            Strong believer that knowledge and dedication can describe you more than the experience you can even have about something, and 
                            my curiousity in coding keeps growing with a non-ending goal. This is me, a 22 years old girl with over 3 years of experience in 
                            this coding path open to new opportunities and all the proficiency given out of it.
                            <br></br>
                            <br></br>
                            My work is what makes me feel mysefl, what makes me <strong>ME</strong>, dedicated, curious, problem solving, and interested about learning
                            new things every day, cause growing from that is the only way you can get the <strong>BEST</strong> version of yourself.
                        </p>
                        <div id="resume-btn" className="absolute button top-2">
                        <button className="bg-transparent rounded p-3">
                            <a href="https://docs.google.com/document/d/1jFxL14_I6nIb1b_2o-07CcRkAIAEAsXbKKZ-q-5C05E/edit?usp=sharing">
                                Resume
                            </a>
                        </button>
                    </div>
                        </div>
                    </div>
                    <Icons/>
                    </div>
                   
                </div>
                </div> 
        </>
    )
};