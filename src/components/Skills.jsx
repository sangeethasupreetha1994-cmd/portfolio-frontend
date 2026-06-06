import skillsDev from "../assets/skills-dev.jpg";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaCode,
  FaTools,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-cyan-50 via-white to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Illustration */}
          <div>
            <img
              src={skillsDev}
              alt="Skills Illustration"
              className="
                w-full
                max-w-xl
                mx-auto
                hover:scale-105
                transition-all
                duration-300
              "
            />
          </div>

          {/* Skills Content */}
          <div className="space-y-10">

            {/* Frontend */}
            <div>
              <h3 className="text-3xl font-bold text-violet-600 mb-5">
                Frontend Development
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                <SkillCard
                  icon={<FaHtml5 className="text-orange-500" size={40} />}
                  title="HTML5"
                />

                <SkillCard
                  icon={<FaCss3Alt className="text-blue-500" size={40} />}
                  title="CSS3"
                />

                <SkillCard
                  icon={<FaJs className="text-yellow-500" size={40} />}
                  title="JavaScript"
                />

                <SkillCard
                  icon={<FaReact className="text-cyan-500" size={40} />}
                  title="React.js"
                />

                <SkillCard
                  icon={<SiTailwindcss className="text-sky-500" size={40} />}
                  title="Tailwind CSS"
                />

                <SkillCard
                  icon={<FaBootstrap className="text-purple-600" size={40} />}
                  title="Bootstrap"
                />

              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-3xl font-bold text-pink-600 mb-5">
                Backend Development
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                <SkillCard
                  icon={<FaNodeJs className="text-green-600" size={40} />}
                  title="Node.js"
                />

                <SkillCard
                  icon={<SiExpress className="text-gray-700" size={40} />}
                  title="Express.js"
                />

                <SkillCard
                  icon={<SiMongodb className="text-green-700" size={40} />}
                  title="MongoDB"
                />

                <SkillCard
                  icon={<FaCode className="text-red-500" size={40} />}
                  title="API Development"
                />

                <SkillCard
                  icon={<FaNodeJs className="text-green-500" size={40} />}
                  title="JWT Auth"
                />

              </div>
            </div>

            {/* Tools & Platforms */}
            <div>
              <h3 className="text-3xl font-bold text-cyan-600 mb-5">
                Tools & Platforms
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                <SkillCard
                  icon={<FaGitAlt className="text-orange-600" size={40} />}
                  title="Git"
                />

                <SkillCard
                  icon={<FaGithub className="text-gray-800" size={40} />}
                  title="GitHub"
                />

                <SkillCard
                  icon={<FaTools className="text-orange-500" size={40} />}
                  title="Apidog"
                />

                <SkillCard
                  icon={<SiPostman className="text-orange-500" size={40} />}
                  title="Postman"
                />

                <SkillCard
                  icon={<SiNetlify className="text-teal-500" size={40} />}
                  title="Netlify"
                />

                <SkillCard
                  icon={<SiVercel className="text-black" size={40} />}
                  title="Vercel"
                />

              </div>
            </div>

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
      bg-white
      p-5
      rounded-3xl
      shadow-md
      hover:shadow-2xl
      hover:-translate-y-2
      hover:scale-105
      transition-all
      duration-300
      text-center
      border border-gray-100
      "
    >
      <div className="flex justify-center mb-3">
        {icon}
      </div>

      <h4 className="font-semibold text-gray-800">
        {title}
      </h4>
    </div>
  );
}

export default Skills;