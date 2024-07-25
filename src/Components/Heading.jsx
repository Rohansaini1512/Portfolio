import "@fontsource/anton";
import "@fontsource/source-sans-pro";
// import { motion, useScroll, useTransform } from "framer-motion";

const Heading = ({ text }) => {
  return (
    <div className="flex justify-center z-20 hollow-heading pb-20">
      <p className="text-9xl leading-none text-[#fefffa] font-anton tracking-widest uppercase self-start">
        {text}
      </p>
    </div>
  );
};

export default Heading;
