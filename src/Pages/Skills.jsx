import { FaCss3Alt, FaGithub, FaHtml5, FaJs, FaNodeJs } from "react-icons/fa6";
import HomeLayout from "../Layout/HomeLayout";
import { DiPython } from "react-icons/di";
import { SiAmazonaws, SiC, SiCplusplus, SiDaisyui, SiDocker, SiExpress, SiGit, SiGo, SiGrafana, SiJenkins, SiKubernetes, SiLinux, SiMongodb, SiPostman, SiPrometheus, SiReact, SiTailwindcss } from "react-icons/si";

const lang = [
  { icon: <SiC className="text-red-600" />, label: 'C' },
  { icon: <SiCplusplus className="text-blue-600" />, label: 'C++' },
  { icon: <FaJs className="text-yellow-400" />, label: 'JavaScript' },
  { icon: <DiPython className="text-blue-500" />, label: 'Python' },
  { icon: <SiGo className="text-blue-400" />, label: 'Go' },
];

const front = [
  { icon: <FaHtml5 className="text-red-600" />, label: 'HTML5' },
  { icon: <FaCss3Alt className="text-blue-600" />, label: 'CSS3' },
  { icon: <SiReact className="text-blue-400" />, label: 'React' },
  { icon: <SiDaisyui className="text-emerald-500" />, label: 'DaisyUI' },
  { icon: <SiTailwindcss className="text-blue-400" />, label: 'TailwindCSS' },
];

const back = [
  { icon: <SiExpress className="text-gray-600" />, label: 'Express' },
  { icon: <FaNodeJs className="text-green-600" />, label: 'Node.js' },
  { icon: <SiMongodb className="text-green-600" />, label: 'MongoDB' },
];

const Add = [
  { icon: <FaGithub className="text-gray-800" />, label: 'GitHub' },
  { icon: <SiGit className="text-orange-500" />, label: 'Git' },
  { icon: <SiPostman className="text-orange-600" />, label: 'Postman' },
];

const Ops = [
  { icon: <SiDocker className="text-blue-500" />, label: 'Docker' },
  { icon: <SiLinux className="text-black" />, label: 'Linux' },
  { icon: <SiAmazonaws className="text-orange-500" />, label: 'AWS' },
  { icon: <SiJenkins className="text-orange-600" />, label: 'Jenkins' },
  { icon: <SiKubernetes className="text-blue-600" />, label: 'Kubernetes' },
  { icon: <SiPrometheus className="text-red-500" />, label: 'Prometheus' },
  { icon: <SiGrafana className="text-blue-700" />, label: 'Grafana' }
];

const SkillIcon = ({ icon, label }) => (
  <div className="flex flex-col items-center transition-all ease-in-out hover:scale-110 hover:text-blue-600">
    <div className="p-4 bg-gray-200 rounded-full text-6xl cursor-pointer border-4 border-blue-500 hover:border-blue-600 hover:bg-gray-300 transition-all ease-in-out">
      {icon}
    </div>
    <div className="font-mono text-white-500 text-2xl mt-2 cursor-pointer">{label}</div>
  </div>
);

function Skills() {
  return (
    <HomeLayout>
      <div className="flex flex-col items-center">
        <div className="text-6xl font-semibold text-center mb-8">
          Languages
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-20">
          {lang.map((item, index) => (
            <SkillIcon key={index} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mt-16">
        <div className="text-6xl font-semibold text-center mb-8">
          Frontend
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-20">
          {front.map((item, index) => (
            <SkillIcon key={index} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mt-16">
        <div className="text-6xl font-semibold text-center mb-8">
          Backend
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-20">
          {back.map((item, index) => (
            <SkillIcon key={index} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mt-16">
        <div className="text-6xl font-semibold text-center mb-8">
          Additional Tools
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-20">
          {Add.map((item, index) => (
            <SkillIcon key={index} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mt-16 mb-16">
        <div className="text-6xl font-semibold text-center mb-8">
          DevOps
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-20">
          {Ops.map((item, index) => (
            <SkillIcon key={index} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>
    </HomeLayout>
  );
}

export default Skills;
