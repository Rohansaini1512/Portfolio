// import React from 'react';
import ExperienceCard from './ExperienceCard';
import Gdsc from "../assets/GDSC.png"

const experiences = [
  {
    imgSrc: {Gdsc},
    imgAlt: "Software Developer",
    tenure: "Aug 2023 - June 2024",
    position: "Cloud Lead",
    orgName: "Google Developer Student Clubs ",
    description: "Developed a web application using React and Node.js."
  },
  {
    imgSrc: "https://via.placeholder.com/150",
    imgAlt: "Project Manager",
    tenure: "Feb 2019 - Dec 2020",
    position: "Facilitator",
    orgName: "Google Cloud Study Jam  ",
    description: "Managed a team of 10 to deliver a project on time."
  },
  // Add more experiences as needed
];

const ExperienceSection = () => {
  return (
    <div className="flex flex-wrap justify-center mt-10 mb-10">
      {experiences.map((exp, index) => (
        <div key={index} className="p-4 w-full md:w-1/2 lg:w-1/3">
          <ExperienceCard
            imgSrc={exp.imgSrc}
            imgAlt={exp.imgAlt}
            tenure={exp.tenure}
            position={exp.position}
            orgName={exp.orgName}
            description={exp.description}
          />
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
