import React from "react";

export default function Main(){
    return(
        <div id="main" className="">
            <div className="img-container grid ml-10">
                <img className="col-start-1 row-start-1 w-70 h-screen object-cover scale-y-[-1] opacity-70" src="../src/assets/orange-powder.png"></img>
                <img className="col-start-1 row-start-1 my-60 w-30 h-70 object-cover scale-x-[-1] opacity-70" src="../src/assets/blue.png"></img>
                <div id="main-text" className="absolute justify-center my-[10%] ml-[55%]">
                    <h1><span id="title-1">FULL</span> <br></br><span id="title-2">Stack</span>
                    <br></br><span id="title-3">DEVELOPER</span>
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
                <div className="absolute bottom-10">
                    <h2 id="title-name">MARIA ANGULO.</h2>
                </div>
                <div id="date" className="transform rotate-90 absolute top-10">
                    <h3 id="title-name"> 2024 </h3>
                </div>
            </div>
        </div>
    )
}