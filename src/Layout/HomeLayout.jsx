"use client";

import { useState, useEffect } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function HomeLayout({ children, toggle, setToggle }) {
  const [hoverX, setHoverX] = useState(0);
  const [hoverY, setHoverY] = useState(0);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [toggle]);

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
    <div className="w-full flex flex-col items-center min-h-screen">
      <div className="w-full pt-8 flex flex-row justify-between items-center px-4 md:px-8 lg:px-16 z-30">
        <div
          className="h-10 w-10 border-2 border-[#fefffa] text-[#fefffa] text-2xl flex justify-center items-center cursor-pointer"
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
          <ul className="flex flex-col items-center space-y-4">
            <motion.li onMouseMove={handleHover}>
              <Link
                to={"/"}
                className="text-4xl md:text-6xl lg:text-8xl leading-none text-[#fefffa] font-anton tracking-widest uppercase transition duration-500 nav-link"
                onClick={handleToggle}
              >
                <motion.h1 style={{ x: hoverX, y: hoverY }} className="hollow-bg absolute">About</motion.h1>
                About
              </Link>
            </motion.li>

            <motion.li onMouseMove={handleHover}>
              <Link
                to={"/projects"}
                className="text-4xl md:text-6xl lg:text-8xl leading-none text-[#fefffa] font-anton tracking-widest uppercase transition duration-500 nav-link"
                onClick={handleToggle}
              >
                <motion.h1 style={{ x: hoverX, y: hoverY }} className="hollow-bg absolute">Projects</motion.h1>
                Projects
              </Link>
            </motion.li>

            <motion.li onMouseMove={handleHover}>
              <Link
                to={"/skills"}
                className="text-4xl md:text-6xl lg:text-8xl leading-none text-[#fefffa] font-anton tracking-widest uppercase transition duration-500 nav-link"
                onClick={handleToggle}
              >
                <motion.h1 style={{ x: hoverX, y: hoverY }} className="hollow-bg absolute">Skills</motion.h1>
                Skills
              </Link>
            </motion.li>

            <motion.li onMouseMove={handleHover}>
              <a
                href={"https://hashnode.com/@Rohansaini1512"}
                className="text-4xl md:text-6xl lg:text-8xl leading-none text-[#fefffa] font-anton tracking-widest uppercase transition duration-500 nav-link"
                onClick={handleToggle}
              >
                <motion.h1 style={{ x: hoverX, y: hoverY }} className="hollow-bg absolute">Blogs</motion.h1>
                Blogs
              </a>
            </motion.li>

            <motion.li onMouseMove={handleHover}>
              <a
                href={"https://drive.google.com/file/d/1FO2lrB0-5tclNrm-AidszGTjwKcTEFLm/view?usp=drive_link"}
                className="text-4xl md:text-6xl lg:text-8xl leading-none text-[#fefffa] font-anton tracking-widest uppercase transition duration-500 nav-link"
                onClick={handleToggle}
              >
                <motion.h1 style={{ x: hoverX, y: hoverY }} className="hollow-bg absolute">Resume</motion.h1>
                Resume
              </a>
            </motion.li>

            <motion.li onMouseMove={handleHover}>
              <Link
                to={"/connect"}
                className="text-4xl md:text-6xl lg:text-8xl leading-none text-[#fefffa] font-anton tracking-widest uppercase transition duration-500 nav-link"
                onClick={handleToggle}
              >
                <motion.h1 style={{ x: hoverX, y: hoverY }} className="hollow-bg absolute">Connect</motion.h1>
                Connect
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      )}

      <div className="w-full flex-grow overflow-auto px-4 md:px-8 lg:px-16">
        {children}
      </div>

      <Footer />
    </div>
  );
}

export default HomeLayout;
