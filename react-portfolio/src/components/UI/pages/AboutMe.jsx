import React from "react";
import Icons from "../icons";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { SiDatabricks } from "react-icons/si";
import { IoLanguageSharp } from "react-icons/io5";

const Skills = [
    {
        id: 1,
        name: 'FrontEnd',
        description: 'HTML5, CSS, JavaScript, React JS, HandleBars',
        icon: <HiMiniCodeBracket/>
    },
    {
        id: 2,
        name: 'BackEnd',
        description: 'Express JS, Node JS, MERN Applications, MySQL, NoSQL, MongoDB',
        icon: <SiDatabricks/>
    },
    {
        id: 3,
        name: 'Languages',
        description: [
            'Spanish',
            ' ',
            'English'
        ],
        icon: <IoLanguageSharp/>
    },
]

export default function AboutMe(){
    return (
        <>
            <div id="aboutMe" className="bg-gray-100">
                <div className="img-container grid">
                    <img id="orange-powder" className="col-start-1 row-start-1 w-70 h-[50%] object-cover object-top-right scale-y-[-1] opacity-70" src="../src/assets/orange.png"></img>
                    <img id="blue-powder" className="col-start-1 row-start-1 my-60 w-30 h-[50%] object-cover scale-x-[-1] opacity-50" src="../src/assets/blue-powder.png"></img>
                    <div className="absolute justify-center my-[8%] ml-[45%]">
                        <h1>
                            <span id="about-title">MARIA</span>
                            <br></br>
                            <span id="about-subTitle">Angulo.</span>
                        </h1>
                    </div>
                    <div className="flex justify-center absolute text-description aboutME">
                        <p>
                            <span className="text-sub">Developing for a Reason.</span>
                            <br></br>
                            Counting over 2 years pursuing this path, and looking forward to keep growing in it, realized
                            there's nothing that can say more about you than the knowledge you DECIDE to acquire and the experience
                            you GO THROUGH.
                        </p>
                        <p className="ml-5">
                            Certified as a Full Stack Developer from the University of Central Florida’s Coding Bootcamp, plus some short-term certificates in coding. Extremely passionate about Front-End Code and increasingly delighted with BackEnd.
                            Soon to course Python, AI for Web Apps, and Mobile Applications Development.
                        </p>
                    </div>
                    <Icons/>

                    {/* Skills    */}
                    <div id="skills-container" className="flex justify-center absolute mx-auto px-4">
                        <h2 className="transform rotate-90 second-title py-5">What am I
                            <span className="good"> GOOD AT?</span></h2>
                        <div id="skill-display" className="mt-6 grid grid-cols-2">
                    {       Skills.map((skill) => (
                            <div key={skill.id} className="group relative">
                                <div className="icon-skill">
                                {skill.icon}
                                </div>  
                                <div className="mt-4 flex justify-between">
                                    <div className="skill-text">
                                        <h3 className="text-sub text-gray-700">
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {skill.name}
                                        </h3>
                                        <p className="mt-1 text-gray-500">{skill.description}</p>
                                    </div>
                                </div>
                            </div>
                             ))}
                        </div>
                        <img id="memoji" className="fixed object object-right-bottom bottom-0" src="../src/assets/memoji.png"></img>
                    </div>
                </div> 
                </div>
        </>
    )
};