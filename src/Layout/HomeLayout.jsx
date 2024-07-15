"use client";
import { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function HomeLayout({ children }) {
  const [toggle, setToggle] = useState(false);
  const [hoverX, setHoverX] = useState(0);
  const [hoverY, setHoverY] = useState(0);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleHover = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoverX(x);
    setHoverY(y);
  };

  return (
    <div className="w-full flex flex-col items-center fixed top-0 z-40">
      <div className="w-11/12 pt-8 flex flex-row justify-between items-center z-30">
        <div
          className="h-10 w-10 border-2 border-[#fefffa] text-[#fefffa] text-2xl flex justify-center items-center"
          onClick={handleToggle}
        >
          <RxHamburgerMenu
            className={`absolute ${toggle ? "opacity-0" : "opacity-1"} ${
              toggle ? "rotate-0" : "rotate-[360deg]"
            } transition duration-500`}
          />
          <RxCross1
            className={`absolute ${toggle ? "opacity-1" : "opacity-0"} ${
              toggle ? "rotate-0" : "rotate-[360deg]"
            } transition duration-500`}
          />
        </div>
      </div>

      {toggle && (
        <motion.div className="bg-[#0C0C0F] opacity-[99%] w-full min-h-screen absolute z-20 transition duration-1000 flex justify-center items-center">
          <ul className="">
            <motion.li onMouseMove={handleHover} className="mb-4">
              <Link
                to={"/"}
                className="text-8xl leading-none text-[#fefffa] font-anton tracking-widest uppercase self-start transition duration-500 nav-link"
                onClick={handleToggle}
              >
                <motion.h1 style={{ x: hoverX, y: hoverY }} className="hollow-bg absolute">About</motion.h1>
                About
              </Link>
            </motion.li>
            

            <motion.li onMouseMove={handleHover} className="mb-4">
              <Link
                to={"/projects"}
                className="text-8xl leading-none text-[#fefffa] font-anton tracking-widest uppercase self-start transition duration-500 nav-link"
                onClick={handleToggle}
              >
                <motion.h1 style={{ x: hoverX, y: hoverY }} className="hollow-bg absolute">Projects</motion.h1>
                Projects
              </Link>
            </motion.li>


            <motion.li onMouseMove={handleHover} className="mb-4">
              <Link
                to={"/skills"}
                className="text-8xl leading-none text-[#fefffa] font-anton tracking-widest uppercase self-start transition duration-500 nav-link"
                onClick={handleToggle}
              >
                <motion.h1 style={{ x: hoverX, y: hoverY }} className="hollow-bg absolute">Skills</motion.h1>
                Skills
              </Link>
            </motion.li>


            <motion.li onMouseMove={handleHover} className="mb-4">
              <Link
                to={"/work"}
                className="text-8xl leading-none text-[#fefffa] font-anton tracking-widest uppercase self-start transition duration-500 nav-link"
                onClick={handleToggle}
              >
                <motion.h1 style={{ x: hoverX, y: hoverY }} className="hollow-bg absolute">Work</motion.h1>
                Work
              </Link>
            </motion.li>


            <motion.li onMouseMove={handleHover} className="mb-4">
              <Link
                to={"/resume"}
                href={"https://drive.google.com/file/d/1FO2lrB0-5tclNrm-AidszGTjwKcTEFLm/view?usp=drive_link"}
                className="text-8xl leading-none text-[#fefffa] font-anton tracking-widest uppercase self-start transition duration-500 nav-link"
                onClick={handleToggle}
              >
                <motion.h1 style={{ x: hoverX, y: hoverY }} className="hollow-bg absolute">Resume</motion.h1>
                Resume
              </Link>
            </motion.li>


            <motion.li onMouseMove={handleHover} className="mb-4">
              <Link
                to={"/connect"}
                className="text-8xl leading-none text-[#fefffa] font-anton tracking-widest uppercase self-start transition duration-500 nav-link"
                onClick={handleToggle}
              >
                <motion.h1 style={{ x: hoverX, y: hoverY }} className="hollow-bg absolute">Connect</motion.h1>
                Connect
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      )}

      {children}

      <Footer />
    </div>
  );
}

export default HomeLayout;
