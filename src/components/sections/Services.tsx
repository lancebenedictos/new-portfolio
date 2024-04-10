import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavStore } from "../../store/store";
import ServiceSection from "../services/ServiceSection";
import { skills } from "../../config/skills";

const Services = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const changeSection = useNavStore((state) => state.changeSection);
  const section = useNavStore((state) => state.currentSection);
  const setIsChangeable = useNavStore((state) => state.setIsChangeable);

  useEffect(() => {
    if (section === "services" && isInView) {
      setIsChangeable(true);
    }
    if (isInView) {
      changeSection("services");
    }
  }, [changeSection, isInView, section, setIsChangeable]);

  return (
    <>
      <div
        className={`min-h-[110vh] my-[150px]  z-20 top-0 ${
          isInView ? "opacity-100" : "opacity-0"
        } transition-opacity`}
        id="services"
        ref={ref}
      >
        <h1 className="  text-5xl text-center  font-medium">Services</h1>

        <div className=" space-y-4 mt-4">
          {skills.map((item) => (
            <ServiceSection {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
