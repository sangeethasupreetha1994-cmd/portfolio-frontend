import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Skills />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;