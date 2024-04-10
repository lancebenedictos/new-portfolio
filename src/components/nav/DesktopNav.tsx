import { Section, useNavStore } from "../../store/store";
import DesktopNavButton, { NavSection } from "./DesktopNavButton";

type Props = {
  navItems: NavSection[];
};

const DesktopNav = ({ navItems }: Props) => {
  const currentSection = useNavStore((state) => state.currentSection);
  const isAbout = currentSection === "about";

  const changeSection = useNavStore((state) => state.changeSection);
  const setIsChangeable = useNavStore((state) => state.setIsChangeable);
  // const isChangeable = useNavStore((state) => state.isChangeable);

  const onButtonClick = (section: Section) => {
    changeSection(section);
    setIsChangeable(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-between ">
      <div
        id="desktop-nav-center "
        className={`gap-4 flex absolute -translate-x-1/2 left-1/2 clear-start border-2 p-1  rounded-full  ${
          isAbout ? "border-white" : "border-black"
        }`}
      >
        {navItems.map((nav) => (
          <DesktopNavButton
            nav={nav}
            key={nav.section}
            onButtonClick={onButtonClick}
          />
        ))}
      </div>

      <button
        className={`${
          isAbout ? "bg-white text-black" : "bg-black text-white"
        }  font-medium rounded-full px-4 py-2 hover:bg-black/50`}
        onClick={() => onButtonClick("contact")}
      >
        Let's talk
      </button>
    </div>
  );
};

export default DesktopNav;
