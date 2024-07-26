import { useState } from "react";
import CarouselSlide from "../Components/CarouselSlide";
import { celebrities } from "../Components/CelebrityData";
import ExperienceSection from "../Experience/Experiences";
import HomeLayout from "../Layout/HomeLayout";
import Typewriter from 'typewriter-effect';
import { FaArrowRight } from "react-icons/fa"; 
import { Link } from "react-router-dom";

function Home() {
    const [toggle, setToggle] = useState(false);

    return (
        <HomeLayout toggle={toggle} setToggle={setToggle}>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-16 md:space-y-0 py-8">
                <div className="w-full flex flex-col items-center text-center px-4 md:px-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-4">
                        Hi, <br />I'm <span className="text-blue-500">Rohan</span>, <br />
                        Web Developer
                    </h1>
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md md:max-w-2xl mx-4">
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            <Typewriter
                                options={{
                                    strings: ['Hello!', 'Welcome to React Typewriter!', 'Enjoy typing effects.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </p>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center px-4">
                    <div className="carousel w-full md:w-3/4 lg:w-1/2">
                        {celebrities && celebrities.map(celebrity => (
                            <CarouselSlide
                                {...celebrity}
                                key={celebrity.slideNumber}
                                totalSlides={celebrities.length}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {!toggle && (
                <div className="w-full min-h-screen overflow-auto">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl lg:text-9xl font-semibold mt-20 mb-0">Experience</h1>
                        <ExperienceSection />
                    </div>
                </div>
            )}

            <div className="flex flex-col items-center mt-0 mb-10 px-4">
                <div className="text-xl md:text-2xl font-semibold text-center mb-7 tracking-widest">
                    WANNA WORK TOGETHER?
                </div>
                <Link to="/connect" className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-widest space-x-4 hover:underline inline-flex items-center">
                    LET'S <span className="ml-4">CONNECT</span>
                    <FaArrowRight />
                </Link>
            </div>
        </HomeLayout>
    );
}

export default Home;
