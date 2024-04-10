import { motion } from "framer-motion";
import { Section, useNavStore } from "../../store/store";

type Props = {
  nav: NavSection;
  onButtonClick: (section: Section) => void;
};

export type NavSection = {
  label: string;
  section: Section;
};

const DesktopNavButton = ({ nav, onButtonClick }: Props) => {
  const section = useNavStore((state) => state.currentSection);
  const currentSection = useNavStore((state) => state.currentSection);
  const isAbout = currentSection === "about";

  const isActive = section === nav.section;

  return (
    <button
      className={`relative py-1 px-3 rounded-full block font-medium  ${
        !isActive ? "hover:text-black/50" : ""
      }`}
      onClick={() => onButtonClick(nav.section)}
    >
      {isActive && (
        <motion.div
          layoutId="nav-pill"
          className="inset-0 bg-slate-200 absolute  rounded-full"
          transition={{ type: "spring", duration: 0.7 }}
        ></motion.div>
      )}

      <p
        className={`relative  z-10 text-screen ${
          isActive && isAbout ? "text-black" : ""
        }`}
      >
        {nav.label}
      </p>
    </button>
  );
};

export default DesktopNavButton;
