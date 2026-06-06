import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contactDev from "../assets/contact-dev.png";

import {
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const form = useRef(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_obdh81l",
        "template_qp3euop",
        form.current,
        "ElF7ss_Rh_B6gwGqO"
      )
      .then(() => {
        setSuccess(true);

        if (form.current) {
          form.current.reset();
        }

        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-pink-50 via-white to-cyan-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={contactDev}
              alt="Contact Illustration"
              className="
                w-full
                max-w-md
                hover:scale-110
                transition-all
                duration-700
                drop-shadow-2xl
                animate-float
              "
            />
          </div>

          {/* Right Card */}
          <div
            className="
              bg-white/80
              backdrop-blur-lg
              border
              border-white/40
              rounded-3xl
              shadow-xl
              p-8
            "
          >

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="
                  w-full
                  p-4
                  rounded-xl
                  border
                  focus:ring-2
                  focus:ring-violet-500
                  outline-none
                "
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="
                  w-full
                  p-4
                  rounded-xl
                  border
                  focus:ring-2
                  focus:ring-violet-500
                  outline-none
                "
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                required
                className="
                  w-full
                  p-4
                  rounded-xl
                  border
                  focus:ring-2
                  focus:ring-violet-500
                  outline-none
                "
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  bg-violet-600
                  hover:bg-violet-700
                  text-white
                  py-4
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <div className="text-center text-green-600 font-medium">
                  ✅ Message sent successfully!
                </div>
              )}

            </form>

            {/* Contact Information */}
            <div className="mt-8 border-t pt-6">

              <h3 className="font-semibold text-lg mb-4">
                Connect With Me
              </h3>

              <div className="flex gap-6 text-3xl">

                <a
                  href="mailto:sangeethasupreetha1994@gmail.com"
                  className="text-red-500 hover:scale-125 transition"
                >
                  <FaEnvelope />
                </a>

                <a
                  href="https://wa.me/919361592859"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-500 hover:scale-125 transition"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://linkedin.com/in/sangeetha-a-6a7876393"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:scale-125 transition"
                >
                  <FaLinkedin />
                </a>

              </div>

              <div className="mt-5 space-y-2 text-gray-600">
                <p>📧 sangeethasupreetha1994@gmail.com</p>
                <p>📱 +91 9361592859</p>
                <p>💼 linkedin.com/in/sangeetha-a-6a7876393</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;