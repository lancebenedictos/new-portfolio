import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useProjectStore } from "../../store/store";

type Props = {
  children: React.ReactNode;
  id: string;
};

const ProjectTitle = ({ children, id }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const setInViewProject = useProjectStore((state) => state.setInViewProject);
  const inViewProject = useProjectStore((state) => state.inViewProject);
  useEffect(() => {
    if (isInView) setInViewProject(id);
    if (!isInView && inViewProject === id) setInViewProject(null);
  }, [id, inViewProject, isInView, setInViewProject]);
  return (
    <p
      className={`text-xl md:text-5xl  font-bold py-16 project-title ${
        isInView ? "text-black" : "text-gray-500"
      }`}
      ref={ref}
    >
      {children}
    </p>
  );
};

export default ProjectTitle;
