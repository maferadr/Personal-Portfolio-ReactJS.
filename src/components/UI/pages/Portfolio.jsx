import React from "react";
import Icons from "../icons";

const projects = [
    {
        name: 'CouchLock Movie Finder',
        description: 'Third Party API application that displays movies searches and store User preferences through Local Storage. BUILT with JavaScript and HTML only.',
        imageSrc: 'https://github.com/venecoderr/couchlock-movie-finder/blob/main/assets/img/bg-test2.jpg?raw=true',
        href: 'https://github.com/venecoderr/couchlock-movie-finder.git'
        },
   {
    name: 'Weather Dashboard Application',
    description: 'Weather Dashboard Application that forecasts through a third party API information about weather conditions from each city the User searches for.',
    imageSrc: 'https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    href: 'https://github.com/maferadr/weather-dashboard.git'
    },
    {
        name: 'Final Bootcamp Project',
        description: 'As part of a Bootcamp Graduated Student, have created this group project as a MERN Application. NOTE: Will add this later',
        imageSrc: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: ''
    },
    {
    name: 'Resume',
    description: 'GET to know more about me!',
    imageSrc: 'https://images.pexels.com/photos/16450744/pexels-photo-16450744/free-photo-of-telefono-inteligente-mesa-navegador-pantalla.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    href: 'https://www.linkedin.com/in/maria-angulo-5249552b5/'
    },
 
]
export default function Portfolio(){
    return(
        <>
    <div className="">
        <div className="absolute bg-gray-100 portfolio-display">
        <Icons/>
        <div className="mx-auto max-w-7xl px-14">
        <div className=" mx-auto max-w-2xl py-10 sm:py-20 lg:max-w-none lg:py-25">
          <div className="flex justify-between">
            <h2 id="about-title" className="portfolio">CRAFTING
            <span className="good"> SOME</span> ART</h2>
            <img id="memoji" className="fixed object object-right-bottom bottom-0 transform rotate-30" src="../src/assets/memoji.png"></img>
          </div>
          <div className="mt-6 space-y-12 gap gap-x-6 gap-y-3 lg:grid lg:grid-cols-2 lg:space-y-0">
            {projects.map((project) => (
              <div key={project.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={project.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                    <a href={project.href}>
                    <span className="absolute inset-0" />
                    {project.name}
                    </a>
                </h3>
                <p className="text-portfolio">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

        </div>
    </div>
      
        </>
    )
};