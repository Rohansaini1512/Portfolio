import ExperienceCard from './ExperienceCard';
import GDSC from '../assets/GDSC.png';
import cloud from '../assets/Cloud.png';

const experiences = [
  {
    imgSrc: GDSC,
    imgAlt: "Software Developer",
    tenure: "Aug 2023 - June 2024",
    position: "Cloud Lead",
    orgName: "Google Developer Student Clubs",
    description: "As the Cloud Lead in GDSC, I guide and mentor students in leveraging cloud technologies to build innovative solutions. My role involves organizing workshops, facilitating hands-on projects, and fostering a collaborative learning environment."
  },
  {
    imgSrc: cloud,
    imgAlt: "Project Manager",
    tenure: "Feb 2019 - Dec 2020",
    position: "Facilitator",
    orgName: "Google Cloud Study Jam",
    description: "As the facilitator of the Cloud Study Jam at my college, I led initiatives that significantly boosted our technical expertise, elevating our institution to Tier 1 status. My dedication and hard work have fostered a culture of excellence and innovation in cloud technologies."
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
