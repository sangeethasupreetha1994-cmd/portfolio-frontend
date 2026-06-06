import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { 
  FaArrowUp 
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-violet-600">
              A.Sangeetha
            </h2>

            <p className="text-gray-600 mt-4 leading-7">
              Full Stack Developer passionate about
              creating modern, responsive and
              user-friendly web applications.
            </p>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Address
            </h3>

            <p className="text-gray-600">
              Chennai, Tamil Nadu
            </p>

            <p className="text-gray-600">
              India
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Contact
            </h3>

            <p className="text-gray-600">
              sangeethasupreetha1994@gmail.com
            </p>

            <p className="text-gray-600">
              +91 9361592859
            </p>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Follow Me
            </h3>

            <div className="flex gap-5 text-2xl">

              <a
                href="https://linkedin.com/in/sangeetha-a-6a7876393"
                target="_blank"
                rel="noreferrer"
                className="
                text-gray-600
                hover:text-violet-600
                transition
                "
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/sangeethasupreetha1994-cmd"
                target="_blank"
                rel="noreferrer"
                className="
                text-gray-600
                hover:text-violet-600
                transition
                "
              >
                <FaGithub />
              </a>

              <a
                href="mailto:sangeethasupreetha1994@gmail.com"
                className="text-gray-600 hover:text-violet-600 transition"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">

          <p className="text-gray-500">
            © 2026 A.Sangeetha. All Rights Reserved.
          </p>

        </div>

      </div>
           


          {/* Back To Top */}

        <a
          href="#top"
          className="
          fixed
          bottom-6
          right-6
          bg-violet-600
          text-white
          p-3
          rounded-full
          shadow-lg
          hover:bg-violet-700
          hover:-translate-y-1
          transition
          z-50
         "
        >
            <FaArrowUp />
        </a>
    </footer>
  );
}

export default Footer;