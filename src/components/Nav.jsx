import React, { useState, useEffect} from "react";
import { AiOutlineMenu, 
        AiOutlineHome, 
        AiOutlineUser, 
        AiOutlineFolderOpen, 
        AiOutlineSolution } from 'react-icons/ai'
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'


export default function Nav(){

    const [nav, setNav ] = useState(false);
    const handleNav = () =>{
        setNav(!nav);
    };

    useEffect(()=>{
        Aos.init({duration: 1000})
    }, [])

    return(
        <>
            <div className="flex lg:flex-1">
                <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden"/>
                {/* Apply some conditionals => If our nav statement is true, display some html */}
                    {
                        nav ? (
                            <>
                             <div className="fixed w-full h-screen bg-white/80 flex flex-col justify-center items-center z-20">
                                <Link to='/' className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-brown-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200">
                                    <AiOutlineHome size={20}/>
                                    <span className="pl-4">HOME</span>
                                </Link>
                                <Link to='/about' className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-brown-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200">
                                    <AiOutlineUser size={20}/>
                                    <span className="pl-4">ABOUT ME</span>
                                </Link>
                                <Link to='/portfolio' className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-brown-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200">
                                    <AiOutlineFolderOpen size={20}/>
                                    <span className="pl-4">PORTFOLIO</span>
                                </Link>
                                <Link to='/education' className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-brown-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200">
                                    <AiOutlineSolution size={20}/>
                                    <span className="pl-4">EDUCATION</span>
                                </Link>
                            </div>
                            </>
                           
                        ) : (
                           ''
                        )}

                <div data-aos='fade-down' id="title-name" className="md:block hidden fixed top-[2%] z-10 right-4">
                    <div className="flex flex-row">
                            <Link id="navbar" to='/' className="justify-between m-3 border-b-2">HOME</Link>
                            <Link id="navbar" to='/about' className="justify-between m-3 border-b-2">ABOUT ME</Link>
                            <Link id="navbar" to='/portfolio' className="justify-between m-3 border-b-2">PORTFOLIO</Link>
                            <Link id="navbar" to='/education' className="justify-between m-3 border-b-2">EDUCATION</Link>
                    </div>
                </div>  
            </div>
        </>
    )
}