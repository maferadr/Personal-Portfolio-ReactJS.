import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

export default function Footer(){
    return(
      <div className="h-60 bg-orange-50 p-5">
            <h1 className="flex justify-center contact pt-5 pb-3" data-aos='fade-up-left' data-aos-delay="100">Contact Me</h1>
            <p className="text-contact flex justify-center">Let's keep up the good work together!</p>
            <div className="flex justify-center" data-aos='fade-left' data-aos-duration='1500'>
                    <span className="icon"><a href="https://www.linkedin.com/in/maria-angulo-5249552b5/"><AiFillLinkedin/></a></span>
                    <span className="icon"><a href="https://github.com/maferadr"><AiFillGithub/></a></span>
                    <span className="icon"><a href="mailto:maferadr0604@gmail.com"><BiLogoGmail/></a></span>
            </div>
      </div>
    )
}