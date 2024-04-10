import About from "../sections/About";
import Contact from "../sections/Contact";
import Projects from "../sections/Projects";
import Services from "../sections/Services";

const Main = () => {
  return (
    <div className={` mx-auto`}>
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;
