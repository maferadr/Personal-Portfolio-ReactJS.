import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

export default function Icons(){
    return(
        <>
            <div id="icons" className="absolute flex justify-center p-3 space-x-4">
                <p>
                    <span><AiFillLinkedin/></span>
                    <span><AiFillGithub/></span>
                    <span><BiLogoGmail/></span>
                </p>
            </div>
        </>
    )
}
