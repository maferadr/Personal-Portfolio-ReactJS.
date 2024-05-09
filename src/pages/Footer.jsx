import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

export default function Footer(){
    return(
        <div className="flex bg-black w-100 h-60 footer-container">
        <div className="container bottom" data-aos='fade-up-left' data-aos-delay="100">
            <h1 className="text-white py-5 flex justify-center" id="resume-btn">CONTACT ME</h1>
            <p className="text-white opacity-70 flex justify-center">Let's keep up the good work together!</p>
            <div className="flex justify-center text-white">
                    <span className="icon"><a href="https://www.linkedin.com/in/maria-angulo-5249552b5/"><AiFillLinkedin/></a></span>
                    <span className="icon"><a href="https://github.com/maferadr"><AiFillGithub/></a></span>
                    <span className="icon"><a href="mailto:maferadr0604@gmail.com"><BiLogoGmail/></a></span>
            </div>
        </div>
        </div>
    )
}