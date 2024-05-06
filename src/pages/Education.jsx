import React from "react";
import Icons from "../components/icons";
import { TypeAnimation } from "react-type-animation";

export default function Contact(){

    return(
        <>
          <div>
          <Icons/>
            <img src="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg" className="object-cover full zoom"></img>
            <img className="col-start-1 row-start-1 w-100 h-[80vh] object-cover scale-y-[-1] opacity-70 fixed z-[-1]" src="/assets/orange.png"></img>
            <div>
                <h1 className="title-edu">EDUCATION & <span className="experience"> 
                <TypeAnimation
                            sequence={['Expe', 500, 'Experience.', 500]}
                            repeat={1}
                            speed={15}
                            /></span></h1>
               
                </div>
        </div>  
        </>
    )
}