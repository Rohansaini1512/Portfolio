import { useState } from 'react';

const ExperienceCard = ({ imgSrc, imgAlt, tenure, position, orgName, description }) => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(!isHover);
  };

  return (
    <div
      className="relative w-full border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="p-4 md:p-8 bg-white">
        <div className="flex flex-col justify-end items-center gap-2 mt-4">
          <img src={imgSrc} alt={imgAlt} className="w-1/2 md:w-2/3 mb-4 rounded-full shadow-md" />
          <h4 className="text-lg md:text-xl text-gray-500">{tenure}</h4>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl text-gray-800 mt-2 mb-2 font-bold">{position}</h2>
          <h4 className="text-xl md:text-2xl text-gray-600 mb-4">{orgName}</h4>
        </div>
      </div>

      {isHover && (
        <div className="absolute inset-0 bg-gray-800 bg-opacity-90 transition-opacity duration-300 p-4 md:p-8 flex items-center justify-center">
          <p className="text-white text-base md:text-xl text-center">{description}</p>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
