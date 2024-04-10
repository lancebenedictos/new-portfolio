import { stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavStore, useProjectStore } from "../../store/store";
import ProjectTitle from "../projects/ProjectTitle";
import ProjectCard from "../projects/ProjectCard";

import FocusedProject from "../projects/FocusedProject";
import { projects } from "../../config/projects";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const {
    changeSection,
    currentSection: section,
    setIsChangeable,
  } = useNavStore(({ changeSection, currentSection, setIsChangeable }) => ({
    changeSection,
    currentSection,
    setIsChangeable,
  }));

  const { fullScreenProject, lastFullScreenProject } = useProjectStore(
    ({ fullScreenProject, lastFullScreenProject }) => ({
      fullScreenProject,
      lastFullScreenProject,
    })
  );

  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (fullScreenProject) {
      animate([
        [
          ".project-title",
          { opacity: 0, x: "-200px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [`.fullscreen-${lastFullScreenProject}`, { opacity: 1 }],
        [`.fullscreen-img`, { scale: 1 }, { type: "spring" }],
      ]);
    } else {
      animate([
        [`.fullscreen-img`, { scale: 0.9 }],

        [`.fullscreen-${lastFullScreenProject}`, { opacity: 0 }],
        [
          ".project-title",
          { opacity: 1, x: "0px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
      ]);
    }
  }, [animate, fullScreenProject, lastFullScreenProject]);

  useEffect(() => {
    if (isInView) changeSection("projects");

    if (section === "projects" && isInView) {
      setIsChangeable(true);
    }
  }, [changeSection, isInView, section, setIsChangeable]);

  return (
    <div className="min-h-[110vh]" id="projects" ref={ref}>
      <div ref={scope}>
        {projects.map((item) => (
          <FocusedProject key={`card-${item.id}`} project={item} />
        ))}
        <div>
          <h1 className=" text-5xl text-center">Projects</h1>

          <div className="flex w-full gap-20 items-start container mx-auto">
            <div className="w-full py-[50vh]">
              <ul>
                {projects.map((item) => (
                  <li key={item.id}>
                    <ProjectTitle id={item.id}>{item.title}</ProjectTitle>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full sticky top-0 h-screen flex items-center">
              <div className="relative w-full  aspect-video bg-gray-200 rounded-2xl ">
                {projects.map((item) => (
                  <ProjectCard
                    key={`card-${item.id}`}
                    id={item.id}
                    img={item.img}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
