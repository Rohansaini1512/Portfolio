"use client";
import { motion, } from "framer-motion";
// import ProjectCard from "../components/ProjectCard";
// import Heading from "../components/Heading";
import HomeLayout from "../Layout/HomeLayout";
import ProjectCard from "../Components/ProjectCard";
import { useState } from "react";
import Eks from "../assets/2048.png"
// import Heading from "../Components/Heading";

const projects = [
  {
    imgSrc: "Period.jpg",
    imgAlt: "Learning Managment System",
    repoURL: "https://github.com/Rohansaini1512/Learning-Managment-system",
    name: "LMS",
    description:
      "A platform designed to streamline and enhance the delivery of educational content and manage learning processes effectively.",
    // topics: "https://skillicons.dev/icons?i=dart,flutter,materialui,firebase",
  },
];

const Back = [
    {
        imgSrc: "Period.jpg",
        imgAlt: "Qissa",
        repoURL: "https://github.com/404-GS-IIIT-Kota/404-GS-Qissa/tree/main/server",
        name: "Qissa",
        description:
        "A dedicated backend for a social media platform exclusively designed to empower and connect the LGBTQ+ community.",
        // topics: "https://skillicons.dev/icons?i=dart,flutter,materialui,firebase",
    },
    {
        imgSrc: "Period.jpg",
        imgAlt: "Alumni-Portal",
        repoURL: "https://github.com/HTC2-0/Alumni-Portal",
        name: "Alumni-Portal",
        description:
        "A robust backend system for an alumni portal designed to facilitate connections and engagement among graduates.",
        // topics: "https://skillicons.dev/icons?i=dart,flutter,materialui,firebase",
    }
];

const Cloud = [
    {
        imgSrc: {Eks},
        imgAlt: "EKs",
        repoURL: "https://github.com/Rohansaini1512/AWS/tree/main/ProjectHostOnEKS",
        name: "2048",
        description:
        "Hosting a 2024 website on AWS using an EKS cluster and ALB controller for scalable and efficient management.",
        // topics: "https://skillicons.dev/icons?i=dart,flutter,materialui,firebase",
    },
    {
        imgSrc: "Period.jpg",
        imgAlt: "AWS-Lambda",
        repoURL: "https://github.com/Rohansaini1512/AWS/tree/main/Lambda_Function",
        name: "Cost Optimization",
        description:
        "Developing a cost optimization project using AWS Lambda functions to enhance efficiency and reduce expenses.",
        // topics: "https://skillicons.dev/icons?i=dart,flutter,materialui,firebase",
    }
];

const Projects = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <HomeLayout toggle={toggle} setToggle={setToggle}>
        <div className="text-8xl items-center justify-center text-center">
            <h1>Full Stack</h1>
        </div>
    <div className="w-full flex mt-5 py-8 justify-center">
      <div className="w-1/2 flex flex-col">
        {/* <div className="w-full flex justify-center">
          <Heading text="Projects" />
        </div> */}
        
        <div className="w-full relative grid ">
          {projects.map((project, index) => (
            <motion.div key={index}>
              <ProjectCard
                imgSrc={project.imgSrc}
                imgAlt={project.imgAlt}
                repoURL={project.repoURL}
                name={project.name}
                description={project.description}
                topics={project.topics}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    <div className="text-8xl items-center justify-center text-center mt-3">
        <h1>Backend</h1>
    </div>
    <div className="w-full flex mt-5 py-8 justify-center">
      <div className="w-3/4 flex flex-col">
        {/* <div className="w-full flex justify-center">
          <Heading text="Projects" />
        </div> */}
        
        <div className="w-full relative flex gap-20">
          {Back.map((project, index) => (
            <motion.div key={index}>
              <ProjectCard
                imgSrc={project.imgSrc}
                imgAlt={project.imgAlt}
                repoURL={project.repoURL}
                name={project.name}
                description={project.description}
                topics={project.topics}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    <div className="text-8xl items-center justify-center text-center mt-3">
        <h1>Cloud</h1>
    </div>
    <div className="w-full flex mt-5 mb-8 py-8 justify-center">
      <div className="w-3/4 flex flex-col">
        {/* <div className="w-full flex justify-center">
          <Heading text="Projects" />
        </div> */}
        
        <div className="w-full relative flex gap-20">
          {Cloud.map((project, index) => (
            <motion.div key={index}>
              <ProjectCard
                imgSrc={project.imgSrc}
                imgAlt={project.imgAlt}
                repoURL={project.repoURL}
                name={project.name}
                description={project.description}
                topics={project.topics}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </HomeLayout>
  );
};

export default Projects;
