import profile from "../assets/sangeetha.png";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="
      relative
      min-h-screen
      flex items-center
      justify-center
      px-6
      bg-gradient-to-br
      from-violet-50
      via-purple-50
      to-pink-50
      overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-violet-600 font-semibold mb-4 tracking-wide">
            Full Stack Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Hi, I'm
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
              A.Sangeetha
            </span>
          </h1>

          <h2 className="text-2xl mt-6 text-gray-700 font-semibold">
            <Typewriter
              words={[
                "Full Stack Developer",
                "Frontend Developer",
                "Backend Developer",
                "MERN Stack Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
            />
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">
            Passionate Full Stack Developer skilled in
            React.js, Node.js, Express.js and MongoDB.
            I enjoy building responsive, modern and
            user-friendly web applications while
            continuously learning new technologies.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8 flex-wrap">

            {/* View Resume */}
            <a
              href="/sangeetha-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
              px-8 py-4
              rounded-xl
              bg-violet-600
              text-white
              font-semibold
              hover:bg-violet-700
              transition
              shadow-lg
              "
            >
              View Resume
            </a>

            {/* Download Resume */}
            <a
              href="/sangeetha-resume.pdf"
              download
              className="
              px-8 py-4
              rounded-xl
              border-2
              border-violet-600
              text-violet-600
              font-semibold
              hover:bg-violet-600
              hover:text-white
              transition
              "
            >
              Download Resume
            </a>

            {/* View Projects */}
            <a
              href="#projects"
              className="
              px-8 py-4
              rounded-xl
              bg-pink-500
              text-white
              font-semibold
              hover:bg-pink-600
              transition
              shadow-lg
              "
            >
              View Projects
            </a>

          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Background Shape */}
            <div
              className="
              absolute
              -top-6
              -right-6
              w-full
              h-full
              bg-violet-100
              rounded-[40%]
              "
            ></div>

            {/* Profile Image */}
            <img
              src={profile}
              alt="Profile"
              className="
              relative
              w-[350px]
              md:w-[450px]
              rounded-[40%]
              shadow-2xl
              border-8
              border-white
              "
            />
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Arrow */}
    
    <div
        className="
        absolute
        bottom-8
        right-10
        animate-bounce
        "
      >
        <a href="#about">
          <FaArrowDown
            size={24}
            className="text-violet-600 hover:text-violet-800 transition"
          />
        </a>
      </div>

    </section>
  );
}

export default Hero;