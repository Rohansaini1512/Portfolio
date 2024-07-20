import { FaCss3Alt, FaGithub, FaHtml5, FaJs, FaNode } from "react-icons/fa6";
import HomeLayout from "../Layout/HomeLayout";
import { DiPython } from "react-icons/di";
import { SiAmazonaws, SiC, SiCplusplus, SiDaisyui, SiDocker, SiExpress, SiGit, SiGo, SiGrafana, SiJenkins, SiKubernetes, SiLinux, SiMongodb, SiPostman, SiPrometheus, SiReact, SiTailwindcss } from "react-icons/si";

const lang = [
  { icon: <SiC className="text-red-500" />, label: 'C' },
  { icon: <SiCplusplus className="text-blue-500" />, label: 'C++' },
  { icon: <FaJs className="text-yellow-500" />, label: 'JavaScript' },
  { icon: <DiPython className="text-green-500" />, label: 'Python' },
  { icon: <SiGo className="text-orange-500" />, label: 'Go' },
];

const front = [
  { icon: <FaHtml5 className="text-red-500" />, label: 'HTML5' },
  { icon: <FaCss3Alt className="text-blue-500" />, label: 'CSS3' },
  { icon: <SiReact className="text-blue-500" />, label: 'React' },
  { icon: <SiDaisyui className="text-green-500" />, label: 'DaisyUI' },
  { icon: <SiTailwindcss className="text-blue-500" />, label: 'TailwindCSS' },
];

const back = [
  { icon: <SiExpress className="text-red-500" />, label: 'Express' },
  { icon: <FaNode className="text-green-500" />, label: 'Node.js' },
  { icon: <SiMongodb className="text-green-500" />, label: 'MongoDB' },
  // { icon: <SiDaisyui className="text-green-500" />, label: 'DaisyUI' },
  // { icon: <SiTailwindcss className="text-blue-500" />, label: 'TailwindCSS' },
];

const Add = [
    { icon: <FaGithub className="text-red-500" />, label: 'Express' },
    { icon: <SiGit className="text-green-500" />, label: 'Node.js' },
    { icon: <SiPostman className="text-green-500" />, label: 'MongoDB' },
    // { icon: <SiDaisyui className="text-green-500" />, label: 'DaisyUI' },
    // { icon: <SiTailwindcss className="text-blue-500" />, label: 'TailwindCSS' },
  ];

  const Ops = [
    { icon: <SiDocker className="text-red-500" />, label: 'HTML5' },
    { icon: <SiLinux className="text-blue-500" />, label: 'CSS3' },
    { icon: <SiAmazonaws className="text-blue-500" />, label: 'React' },
    { icon: <SiJenkins className="text-green-500" />, label: 'DaisyUI' },
    { icon: <SiKubernetes className="text-blue-500" />, label: 'TailwindCSS' },
    { icon: <SiPrometheus className="text-blue-500" />, label: 'TailwindCSS' },
    { icon: <SiGrafana className="text-blue-500"/>,  label: 'Grafana'}
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
          Language
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
          Additional
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-20">
          {Add.map((item, index) => (
            <SkillIcon key={index} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mt-16">
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
