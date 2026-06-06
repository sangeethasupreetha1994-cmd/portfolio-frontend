import profile from "../assets/profile-image.png";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-white via-pink-50 to-cyan-50"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-violet-600 font-semibold mb-3">
            About Me
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Full Stack Developer
          </h2>

          <p className="text-gray-600 leading-8">
            I am a motivated Full Stack Developer passionate about
            building modern and responsive web applications. With
            knowledge of React.js, Node.js, Express.js, and MongoDB,
            I enjoy turning ideas into functional digital solutions and
            continuously enhancing my technical skills through projects
            and learning.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-10">

            <div className="bg-white p-6 rounded-3xl shadow-md">
              <h3 className="font-bold text-xl text-violet-600">
                Frontend
              </h3>

              <p className="mt-2 text-gray-600">
                React, JavaScript, Tailwind CSS
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-md">
              <h3 className="font-bold text-xl text-violet-600">
                Backend
              </h3>

              <p className="mt-2 text-gray-600">
                Node.js, Express.js, MongoDB
              </p>
            </div>

          </div>
        </div>

        <div className="relative">

          <div className="absolute inset-0 bg-violet-100 rounded-[40%]"></div>

          <img
            src={profile}
            alt="Profile"
            className="relative rounded-[40%] shadow-2xl border-8 border-white"
          />
        </div>

      </div>
    </section>
  );
}

export default About;