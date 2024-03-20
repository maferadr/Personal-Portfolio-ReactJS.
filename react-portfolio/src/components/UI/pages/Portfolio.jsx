import React from "react";
import Icons from "../icons";

const projects = [
    {
        name: 'CouchLock Movie Finder',
        description: '2 Group Project based on a third-party API application in which the user searches for movies getting all information about it. Making use of Local Storage, the user was able to save them in favorites for later view.',
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
    name: 'Resume',
    description: 'GET to know more about me!',
    imageSrc: 'https://images.pexels.com/photos/16450744/pexels-photo-16450744/free-photo-of-telefono-inteligente-mesa-navegador-pantalla.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    href: 'https://www.linkedin.com/in/maria-angulo-5249552b5/'
    }

 
]
export default function Portfolio(){
    return(
        <>
    <div className="">
        <div className="absolute bg-gray-100 portfolio-display">
        <Icons/>
        <div className="mx-auto max-w-7xl px-14">
        <div className=" mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 id="about-title" className="portfolio">CRAFTING
          <span className="good"> SOME</span> ART</h2>
            <p></p>
          <div className="mt-6 space-y-12 gap gap-x-6 lg:grid lg:grid-cols-2 lg:space-y-0">
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