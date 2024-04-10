import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavStore } from "../../store/store";
// import { motion } from "framer-motion";

import Banner from "../about/Banner";
import Details from "../about/Details";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const changeSection = useNavStore((state) => state.changeSection);
  const section = useNavStore((state) => state.currentSection);
  const setIsChangeable = useNavStore((state) => state.setIsChangeable);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (section === "about" && isInView) {
      setIsChangeable(true);
    }
    if (isInView) changeSection("about");
  }, [changeSection, isInView, section, setIsChangeable]);

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div
      className={`min-h-[calc(100vh-70px)]  mx-auto transition-opacity container ${
        isInView ? "opacity-100" : "opacity-0"
      }`}
      id="about"
      ref={ref}
    >
      <div>
        <h1 className=" text-white text-5xl">About me (Hover below me)</h1>

        <Banner mousePosition={mousePosition} />

        <Details />
      </div>
    </div>
  );
};

export default About;
