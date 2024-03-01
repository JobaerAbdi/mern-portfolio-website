import Header from "../components/Header";
import About from "./About";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Footer from "./Footer";
import Intro from "./Intro";
import LeftSideIcons from "./LeftSideIcons";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-primary px-40 sm:px-5">
        <Intro />
        <About />
        <Experiences />
        <Projects />
        <Contact />
        <Footer />
        <LeftSideIcons/>
      </div>
    </div>
  );
};

export default Home;
