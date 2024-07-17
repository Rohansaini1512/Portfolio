/* eslint-disable react/no-unescaped-entities */
// import ExperienceSection from "../Components/Card";
import CarouselSlide from "../Components/CarouselSlide";
import { celebrities } from "../Components/CelebrityData";
import ExperienceSection from "../Experience/Experiences";
import HomeLayout from "../Layout/HomeLayout";

function Home() {
    return (
        <HomeLayout>
            <div className="flex flex-row items-center justify-center space-y-16 py-8">
            <div className="w-full flex flex-col items-center text-center">
                    <h1 className="text-4xl font-bold mb-4">About Myself</h1>
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl">
                        <p className="text-lg leading-relaxed text-gray-700">
                            Welcome to my portfolio. Here you'll find information about my background, 
                            skills, and projects I've worked on. Feel free to browse through and 
                            learn more about me!
                        </p>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center">
                    {/* <h2 className="text-3xl font-semibold mb-8">My Projects</h2> */}
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

            <div className="App min-h-screen  overflow-auto">
                <div className="min-h-screen">
                    <div className="text-center">
                        <h1 className="text-9xl font-semibold mt-10 mb-10">Experience</h1>
                    </div>
                    <ExperienceSection />
                </div>
            </div>
        </HomeLayout>
    );
}

export default Home;
