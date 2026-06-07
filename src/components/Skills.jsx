import skillsDev from "../assets/skills-dev.jpg";

import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaLock,
  FaCode,
  FaGitAlt,
  FaBug,
  FaPuzzlePiece,
  FaUsers,
  FaBookOpen,
  FaGlobe,
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      title: "Responsive Web Design",
      icon: <FaLaptopCode className="text-blue-500" size={40} />,
    },
    {
      title: "REST API Development",
      icon: <FaServer className="text-green-500" size={40} />,
    },
    {
      title: "CRUD Operations",
      icon: <FaCode className="text-purple-500" size={40} />,
    },
    {
      title: "Authentication & Authorization",
      icon: <FaLock className="text-red-500" size={40} />,
    },
    {
      title: "Database Management",
      icon: <FaDatabase className="text-emerald-600" size={40} />,
    },
    {
      title: "API Integration",
      icon: <FaPuzzlePiece className="text-cyan-500" size={40} />,
    },
    {
      title: "Version Control",
      icon: <FaGitAlt className="text-orange-500" size={40} />,
    },
    {
      title: "Problem Solving",
      icon: <FaPuzzlePiece className="text-pink-500" size={40} />,
    },
    {
      title: "Debugging & Testing",
      icon: <FaBug className="text-red-600" size={40} />,
    },
    {
      title: "Cross-Browser Compatibility",
      icon: <FaGlobe className="text-indigo-500" size={40} />,
    },
    {
      title: "Team Collaboration",
      icon: <FaUsers className="text-teal-500" size={40} />,
    },
    {
      title: "Continuous Learning",
      icon: <FaBookOpen className="text-yellow-500" size={40} />,
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-cyan-50 via-white to-pink-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">
          Professional Skills
        </h2>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Illustration */}
          <div className="flex justify-center">
            <img
              src={skillsDev}
              alt="Skills Illustration"
              className="
                w-full
                max-w-xl
                drop-shadow-2xl
                hover:scale-105
                hover:-translate-y-2
                transition-all
                duration-500
              "
            />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ icon, title }) {
  return (
    <div
      className="
        group
        bg-white
        p-6
        rounded-3xl
        shadow-md
        border
        border-gray-100
        text-center
        cursor-pointer
        hover:shadow-2xl
        hover:-translate-y-3
        hover:scale-105
        transition-all
        duration-300
      "
    >
      <div className="flex justify-center mb-4 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>

      <h4 className="font-semibold text-gray-800 group-hover:text-violet-600 transition-all duration-300">
        {title}
      </h4>
    </div>
  );
}

export default Skills;