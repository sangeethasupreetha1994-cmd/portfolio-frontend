import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav
      className="
        sticky
        top-0
        z-50
        bg-white/90
        backdrop-blur-md
        shadow-sm
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-indigo-600">
          A.Sangeetha
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">

          <li>
            <a
              href="#about"
              className="hover:text-indigo-600 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-indigo-600 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-indigo-600 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-indigo-600 transition"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-5">

          {/* Resume Button */}
          <a
            href="/sangeetha-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden md:block
              bg-indigo-600
              text-white
              px-4
              py-2
              rounded-lg
              hover:bg-indigo-700
              transition
              shadow-md
            "
          >
            Resume
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/sangeetha-a-6a7876393"
            target="_blank"
            rel="noreferrer"
            className="
              text-2xl
              text-gray-700
              hover:text-indigo-600
              hover:scale-110
              transition
            "
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sangeethasupreetha1994-cmd"
            target="_blank"
            rel="noreferrer"
            className="
              text-2xl
              text-gray-700
              hover:text-indigo-600
              hover:scale-110
              transition
            "
          >
            <FaGithub />
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;