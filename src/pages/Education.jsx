import React, {useState} from "react";
import Icons from "../components/icons";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

export default function Contact(){

    // Carrousel Logic
    const certificates = [
        {
            url: '/assets/Javascript.png'
        },
        {
            url: '/assets/ReactJS.png'
        },
        {
            url: '/assets/webDevelopment.png'
        }
    ];

    const [currentIndex, setCurrentIndex ] = useState(0);

    const prevSlide = () =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? certificates.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = ()=>{
        const isLastSlide = currentIndex === certificates.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex)
    };


    return(
        <>
            <div className="bg-amber-50">
            <div className="top-0 object-cover object-center right-0 absolute">
                    <img className="picture-education" src="https://images.pexels.com/photos/7944064/pexels-photo-7944064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
                </div>
                <div className="grid">
                <img id="powder-edu" className="col-start-1 row-start-1 w-100 h-screen object-cover scale-y-[-1] opacity-70 hidden" src="/assets/orange.png"></img>
                <Icons/>
                <div className="absolute grid grid-rows-2 grid-flow-col gap-4 education-container w-100">
                    <div className="row-span-2 px-5 container-edu">
                       <h1 className="edu-1-title">Major
                       <br></br>
                       <span className="edu-2-title">Education.</span></h1> 
                       <h2 className="edu-place">University of Central Florida</h2>
                      <p className="edu-text">Certificated as a Full Stack Developer counting on a Six Month intensive program, fulfilled of knowledge about FrontEnd and Backend code, 
                        GitFlow group projects strategies and MERN Applications.
                      </p>
                      <div>
                        <img></img>
                      </div>
                    </div>
                    <div className=" px-5 container-edu">
                        <h1 className="edu-2-title">
                        <TypeAnimation
                            sequence={['Certi', 500, 'Certificates.', 500]}
                            repeat={1}
                            speed={15}
                            />
                        </h1>
                        <a href="https://www.coderhouse.com/ar/"><h2 className="edu-place">CoderHouse</h2></a>
                        <div className="carousel w-full h-80 m-auto relative pt-3">
                <div style={{backgroundImage: `url(${certificates[currentIndex].url})`}} className="w-full h-full bg-center bg-cover duration-500 rounded">
                    {/* left arrow */}
                    <div id="icon-carousel" className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer">
                        <MdKeyboardDoubleArrowLeft onClick={prevSlide} size={30}/>
                    </div>

                    {/* right arrow */}
                    <div  id="icon-carousel" className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer">
                        <MdKeyboardDoubleArrowRight onClick={nextSlide} size={30}/>
                    </div>
                </div>
            </div>
                        <h2 className="edu-place">Harvard edx-Courses</h2>
                        <div className="pt-3">
                            <a href="https://courses.edx.org/certificates/186b9ae3e57c492bada671e6f73f1ef1?_gl=1*1e6rvhj*_ga*MTkyNDkzOTk3NC4xNzA3MjYyNDI3*_ga_D3KS4KMDT0*MTcxNDI0NDAwMy43LjEuMTcxNDI0NDEwNS4zNC4wLjA.">
                            <img className="rounded" src="/assets/harvard-certificate.png"></img>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
             </div>   
        </>
    )
}