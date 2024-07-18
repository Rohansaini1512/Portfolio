/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import CarouselSlide from "../Components/CarouselSlide";
import { celebrities } from "../Components/CelebrityData";
import ExperienceSection from "../Experience/Experiences";
import HomeLayout from "../Layout/HomeLayout";
import Typewriter from 'typewriter-effect';

function Home() {
    const [toggle, setToggle] = useState(false);

    return (
        <HomeLayout toggle={toggle} setToggle={setToggle}>
            <div className="flex flex-row items-center justify-center space-y-16 py-8">
                <div className="w-full flex flex-col items-center text-center">
                    <h1 className="text-8xl font-bold mb-4 ">Hi, <br />I'm <span className="text-blue-500">Rohan</span>, <br />
                        Web Developer
                     </h1>
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl">
                        <p className="text-lg leading-relaxed text-gray-700">
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

                <div className="w-full flex flex-col items-center">
                    <div className="carousel w-1/2">
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
                <div className="App min-h-screen  overflow-auto">
                    <div className="min-h-screen">
                        <div className="text-center">
                            <h1 className="text-9xl font-semibold mt-10 mb-10">Experience</h1>
                        </div>
                        <ExperienceSection />
                    </div>
                </div>
            )}
        </HomeLayout>
    );
}

export default Home;
