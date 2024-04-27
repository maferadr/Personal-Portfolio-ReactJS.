import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

export default function Icons(){
    return(
        <>
            <div id="icons" className="absolute flex justify-center p-3 space-x-4">
                <p>
                    <span className="icon"><a href="https://www.linkedin.com/in/maria-angulo-5249552b5/"><AiFillLinkedin/></a></span>
                    <span className="icon"><a href="https://github.com/maferadr"><AiFillGithub/></a></span>
                    <span className="icon"><a href="mailto:maferadr0604@gmail.com"><BiLogoGmail/></a></span>
                </p>
            </div>
        </>
    )
}
