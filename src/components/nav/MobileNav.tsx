import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { NavSection } from "./DesktopNavButton";
import { Section, useNavStore } from "../../store/store";
import { motion, AnimatePresence } from "framer-motion";
type Props = {
  navItems: NavSection[];
};
const MobileNav = ({ navItems }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const currentSection = useNavStore((state) => state.currentSection);
  const isAbout = currentSection === "about";
  const onButtonClick = (section: Section) => {
    setOpen(false);
    const element = document.getElementById(section);

    console.log(section);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div
        className={`z-50 ${
          isOpen ? "  border-2 border-black rounded-full" : ""
        }`}
      >
        <Hamburger
          size={20}
          toggled={isOpen}
          onToggle={() => {
            setOpen(!isOpen);
          }}
          color={`${isAbout ? "white" : "black"}`}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: "0" }}
            exit={{ y: "100vh" }}
            transition={{ duration: 0.5, type: "spring" }}
            className=" fixed top-0 left-0 inset-0  -z-10 flex flex-col bg-white items-center pt-[80px] gap-3"
          >
            {navItems.map((nav) => (
              <button
                className=" font-bold text-xl"
                key={nav.section}
                onClick={() => onButtonClick(nav.section)}
              >
                {nav.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
