import { useState } from 'react';

const ExperienceCard = ({ imgSrc, imgAlt, tenure, position, orgName, description }) => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(!isHover);
  };

  return (
    <div
      className="relative w-full border border-[#727C57] flex flex-col rounded-sm overflow-hidden z-20"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="p-4 md:p-8">
        <div className="flex flex-col justify-end items-start gap-2 mt-4">
          <img src={imgSrc} alt={imgAlt} className="w-1/4 md:w-1/6" />
          <h4 className="text-lg md:text-xl text-[#727C57] tracking-widest">{tenure}</h4>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl text-[#fefffa] mt-4 mb-2 font-bold">{position}</h2>
          <h4 className="text-xl md:text-2xl text-[#fefffa] mb-4 font-semibold">{orgName}</h4>
        </div>
      </div>

      {isHover && (
        <div className="absolute inset-0 bg-[#727C57] opacity-95 transition duration-500 p-4 md:p-8 flex items-center justify-center">
          <p className="font-sourceSans text-[#fefffa] text-base md:text-xl font-semibold text-center">{description}</p>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
