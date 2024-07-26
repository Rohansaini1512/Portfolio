import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    imgSrc: "path/to/Gdsc.png",
    imgAlt: "Software Developer",
    tenure: "Aug 2023 - June 2024",
    position: "Cloud Lead",
    orgName: "Google Developer Student Clubs",
    description: "Developed a web application using React and Node.js."
  },
  {
    imgSrc: "https://via.placeholder.com/150",
    imgAlt: "Project Manager",
    tenure: "Feb 2019 - Dec 2020",
    position: "Facilitator",
    orgName: "Google Cloud Study Jam",
    description: "Managed a team of 10 to deliver a project on time."
  },
  // Add more experiences as needed
];

const ExperienceSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-20 mb-0 px-4">
      {experiences.map((exp, index) => (
        <div key={index} className="p-4 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
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
