import projectDev from "../assets/projects-dev.png";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-cyan-50 via-white to-pink-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-6">
          My Projects
        </h2>

        <p className="text-center text-gray-600 mb-16">
          A collection of my academic, frontend, and backend development projects
        </p>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE (LOCAL IMAGE RESTORED) */}
          <div className="flex justify-center">
            <img
              src={projectDev}
              alt="Projects Illustration"
              className="w-[520px] md:w-[580px] lg:w-[620px] transition-transform duration-500 hover:scale-110 hover:drop-shadow-2xl"
            />
          </div>

          {/* RIGHT SIDE PROJECTS */}
          <div className="space-y-6">

            {/* ⭐ Project 1 */}
            <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold">🧠 Notes Keeper App</h3>

              <p className="text-gray-600 mt-2">
                Simple React notes app to add, delete and manage notes easily.
              </p>

              <div className="mt-3 flex gap-3">
                <a
                  href="https://notes-keeper-project.netlify.app"
                  target="_blank"
                  className="text-green-600 hover:underline font-medium"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/sangeethasupreetha-alt/Notes-Keeper-Project.git"
                  target="_blank"
                  className="text-blue-600 hover:underline font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* ⭐ Project 2 */}
            <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold">
                🛒 MERN E-Commerce App
              </h3>

              <p className="text-gray-600 mt-2">
                Full stack e-commerce app using MERN stack with cart & authentication.
              </p>

              <div className="mt-3 flex flex-col gap-2">

                <a
                  href="https://mern-stack-ecommerce-1.netlify.app"
                  target="_blank"
                  className="text-green-600 hover:underline font-medium"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/sangeethasupreetha1994-cmd/ecommerce-frontend-1.git"
                  target="_blank"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Frontend GitHub
                </a>

                <a
                  href="https://github.com/sangeethasupreetha1994-cmd/ecommerce-backend-1.git"
                  target="_blank"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Backend GitHub
                </a>

              </div>
            </div>

            {/* ⭐ Project 3 */}
            <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold">🌍 Travel Web App</h3>

              <p className="text-gray-600 mt-2">
                Responsive travel landing page with modern UI.
              </p>

              <div className="mt-3 flex gap-3">
                <a
                  href="https://sangeethasupreetha1994-cmd.github.io/Module-1-Assignment/"
                  target="_blank"
                  className="text-green-600 hover:underline font-medium"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/sangeethasupreetha1994-cmd/Module-1-Assignment.git"
                  target="_blank"
                  className="text-blue-600 hover:underline font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* ⭐ Project 4 */}
            <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold">🔐 Authentication System</h3>

              <p className="text-gray-600 mt-2">
                Signup & login system with validation and UI design.
              </p>

              <div className="mt-3 flex gap-3">
                <a
                  href="https://sangeethasupreetha-alt.github.io/Module-Assignment-2/"
                  target="_blank"
                  className="text-green-600 hover:underline font-medium"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/sangeethasupreetha1994-cmd/Module-Assignment-2.git"
                  target="_blank"
                  className="text-blue-600 hover:underline font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* ⭐ Project 5 */}
            <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold">
                🧾 Backend E-Commerce API
              </h3>

              <p className="text-gray-600 mt-2">
                Node.js + Express backend with authentication and product APIs.
              </p>

              <div className="mt-3 flex gap-3">
                <a
                  href="https://github.com/sangeethasupreetha1994-cmd/Module-Assignment-4.git"
                  target="_blank"
                  className="text-blue-600 hover:underline font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;