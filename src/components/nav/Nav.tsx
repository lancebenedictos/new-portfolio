import logo from "../../assets/me (1).svg";
import logo_white from "../../assets/me-white.svg";

import { motion } from "framer-motion";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { NavSection } from "./DesktopNavButton";
import { useNavStore } from "../../store/store";
const Nav = () => {
  const currentSection = useNavStore((state) => state.currentSection);
  const isAbout = currentSection === "about";
  const navItems: NavSection[] = [
    { label: "Start ", section: "header" },
    { label: "About ", section: "about" },
    { label: "Services ", section: "services" },
    { label: "Projects ", section: "projects" },
    { label: "Contact ", section: "contact" },
  ];

  return (
    <motion.nav
      animate={{
        y: 0,
        opacity: 1,
      }}
      initial={{
        y: -56,
        opacity: 0,
      }}
      transition={{
        duration: 1,
        type: "spring",
        delay: 1,
      }}
      className={`sticky top-0  py-3 z-50  shadow-md ${
        isAbout ? "bg-black" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between relative px-4  md:px-0 max-w-screen">
        <img
          src={isAbout ? logo_white : logo}
          className=" aspect-square w-10"
        />

        <div
          className={`hidden md:block ${isAbout ? "text-white" : "text-black"}`}
        >
          <DesktopNav navItems={navItems} />
        </div>

        <div className="block md:hidden">
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
