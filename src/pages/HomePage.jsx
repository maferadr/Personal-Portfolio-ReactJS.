import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function HomePage(){
    return(
        <div id="main" className="">
            <div className="img-container grid">
                <img className="col-start-1 row-start-1 w-100 h-screen object-cover scale-y-[-1] opacity-70" src="/assets/orange.png"></img>
                <img className="col-start-1 row-start-1 my-60 w-30 h-[50%] object-cover scale-x-[-1] opacity-60" src="/assets/blue-powder.png"></img>
                <div id="main-text" className="absolute justify-center my-[10%] ml-[55%]">
                    <h1><span id="title-1">FULL</span> <br></br><span id="title-2">Stack</span>
                    <br></br><span id="title-3">
                    <TypeAnimation
                            sequence={['DEVEL', 500, 'DEVELOPER', 500]}
                            repeat={1}
                            speed={15}
                            />
                    </span>
                    </h1>
                </div>
                <div className="absolute text-description">
                    <p>Having a <span className="keyword">COLORFUL </span>mind,makes you <span className="keyword">DEVELOP </span>art.</p>
                    <p>Increasingly delighted with coding and Crafting for people.</p>
                </div>
                <div className="absolute button">
                <button class="bg-transparent text-brown-700 font-semibold py-2 px-4 border rounded">
                    Contact
                </button>
                </div>
                <div className="absolute bottom-10 ml-10">
                    <h2 id="title-name">MARIA ANGULO.</h2>
                </div>
                <div id="date" className="transform rotate-90 absolute top-10">
                    <h3 id="title-name"> 2024 </h3>
                </div>
            </div>
        </div>
    )
}