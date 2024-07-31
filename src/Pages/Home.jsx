import { useState } from "react";
import ExperienceSection from "../Experience/Experiences";
import HomeLayout from "../Layout/HomeLayout";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import my from "../assets/1.jpeg";

function Home() {
  const [toggle, setToggle] = useState(false);

  const dynamicText = "I am a DevOps Learning Engineer currently in my third year at IIIT Kota. My journey so far has equipped me with a solid foundation in both backend and frontend technologies, and I am always ready to learn new things and expand my skill set.";
  const nextPara = " In addition to my technical expertise, I am a detail-oriented individual who takes pride in delivering high-quality work. My commitment to excellence is reflected in my portfolio, which showcases my ability to create user-friendly, functional, and visually appealing applications."
  const third = "I am passionate about tackling complex challenges and continuously seek opportunities to grow both personally and professionally. Contact me today to learn more about how I can contribute to your project and help bring your ideas to life. Let's explore new possibilities together and achieve excellence in every endeavor."


  return (
    <HomeLayout toggle={toggle} setToggle={setToggle}>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen py-0 px-40"> {/* Adjusted padding */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-0"> {/* Adjusted margin-bottom */}
          <div className="flex flex-col justify-center h-full md:h-screen md:justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-4">
              Hi, <br />I'm <span className="text-blue-500">Rohan</span>, <br />
              Web Developer
            </h1>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md md:max-w-2xl mb-4"> {/* Adjusted margin-bottom */}
              <div className="w-full py-4 bg-gray-100 text-lg text-gray-700">
                {dynamicText} <br /> <br />
                {nextPara} <br /> <br />
                {third}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mb-0"> {/* Adjusted margin-bottom */}
          <div className="border-4 border-gray-300 rounded-lg p-4 max-w-md">
            <div className="flex items-center justify-center h-96 w-64 bg-gray-200 overflow-hidden">
              <img src={my} alt="Rohan" className="object-cover h-full w-full" />
            </div>
          </div>
        </div>
      </div>

      {!toggle && (
        <div className="w-full min-h-screen overflow-auto py-8">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl lg:text-9xl font-semibold mb-8">Experience</h1>
            <ExperienceSection />
          </div>
        </div>
      )}

      <div className="flex flex-col items-center mb-10 px-4">
        <div className="text-xl md:text-2xl font-semibold text-center mb-7 tracking-widest">
          WANNA WORK TOGETHER?
        </div>
        <Link to="/connect" className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-widest space-x-4 hover:underline inline-flex items-center">
          LET'S <span className="ml-4">CONNECT</span>
          <FaArrowRight />
        </Link>
      </div>

      {/* Drawer Box */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${toggle ? 'translate-x-0' : 'translate-x-full'} z-50`}>
        <button onClick={() => setToggle(!toggle)} className="absolute top-4 right-4 p-2 bg-blue-500 text-white rounded-full">
          {toggle ? 'Close' : 'Open'}
        </button>
        <div className="p-6 mt-12">
          {/* Drawer content goes here */}
          <p>Drawer content goes here. Customize as needed.</p>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Home;
