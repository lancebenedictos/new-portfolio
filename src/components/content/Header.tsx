import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavStore } from "../../store/store";

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all" });
  const changeSection = useNavStore((state) => state.changeSection);
  const section = useNavStore((state) => state.currentSection);
  const setIsChangeable = useNavStore((state) => state.setIsChangeable);
  useEffect(() => {
    if (section === "about" && isInView) {
      setIsChangeable(true);
    }
    if (isInView) changeSection("header");
  }, [changeSection, isInView, section, setIsChangeable]);

  return (
    <div
      className="h-[calc(100vh-56px)] flex items-center justify-center relative overflow-x-clip"
      id="header"
      ref={ref}
    >
      <motion.div className="  relative bottom-[56px] text-center space-y-6 flex items-center justify-center flex-col">
        <motion.div
          className="text-6xl md:text-9xl font-black "
          animate={{
            scale: 1,
          }}
          initial={{
            scale: 3,
          }}
          transition={{
            duration: 1,
            type: "spring",
          }}
        >
          PORTFOLIO
        </motion.div>
        <motion.div
          className=" text-xl space-y-2 font-medium"
          animate={{
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
          transition={{
            delay: 1,
            duration: 1,
            type: "spring",
          }}
        >
          <p>Lance Benedictos</p>
          <p>Fullstack Developer</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
