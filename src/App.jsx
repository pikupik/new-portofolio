import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutMeSection from "./components/AboutMeSection";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <HomeSection />
      </div>
      <div id="about">
        <AboutMeSection />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="touch">
        <GetInTouch />
      </div>
      <Footer />
    </>
  );
};

export default App;
