import techDev from "../assets/technologies-dev.png";

// React Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaServer,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiPostman,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { RiShieldKeyholeLine } from "react-icons/ri";

function Technologies() {
  const frontend = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  ];

  const backend = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "JWT Auth", icon: <RiShieldKeyholeLine className="text-red-500" /> },
    { name: "bcrypt", icon: <FaServer className="text-indigo-500" /> },
  ];

  const tools = [
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
  ];

  const deployment = [
    { name: "Netlify", icon: <SiNetlify className="text-cyan-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
  ];

  const Card = ({ title, items, color }) => (
    <div
      className="
        relative
        bg-white dark:bg-gray-900
        p-6 rounded-3xl
        shadow-md

        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-2xl

        z-0 hover:z-10
        overflow-hidden
      "
    >
      <h3 className={`text-xl font-bold mb-4 ${color}`}>
        {title}
      </h3>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="
              flex items-center gap-3
              px-3 py-2
              rounded-xl

              bg-gray-50 dark:bg-gray-800
              hover:bg-cyan-50 dark:hover:bg-gray-700

              transition-colors duration-200
              cursor-pointer
              font-medium
            "
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-gray-800 dark:text-gray-100">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-black overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT CARDS */}
          <div className="grid gap-6">
            <Card title="💻 Frontend" items={frontend} color="text-blue-600" />
            <Card title="⚙ Backend" items={backend} color="text-green-600" />
            <Card title="🛠 Tools" items={tools} color="text-purple-600" />
            <Card title="☁ Deployment" items={deployment} color="text-orange-500" />
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-[520px] rounded-3xl overflow-hidden">
              <img
                src={techDev}
                alt="Technologies Illustration"
                className="
                  w-full
                  h-auto
                  drop-shadow-xl

                  transition-transform duration-500
                  hover:-translate-y-3
                "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Technologies;