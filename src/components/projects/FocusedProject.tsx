import { useEffect } from "react";
import { useProjectStore } from "../../store/store";
import { motion } from "framer-motion";
import { Project } from "../../config/projects";
import { ExternalLink } from "lucide-react";
import FeatureCard from "./FeatureCard";

type Props = {
  project: Project;
};

const FocusedProject = ({ project }: Props) => {
  const { fullScreenProject, setFullScreenProject } = useProjectStore(
    ({ fullScreenProject, setFullScreenProject }) => ({
      fullScreenProject,
      setFullScreenProject,
    })
  );

  useEffect(() => {
    if (fullScreenProject === project.id)
      document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [fullScreenProject, project.id]);

  return (
    <>
      <motion.div
        onClick={() => setFullScreenProject(null)}
        className={`fixed overflow-scroll bg-gray-300 bg-opacity-30 inset-0 pt-4 top-[64px] opacity-0 ${
          fullScreenProject === project.id
            ? " pointer-events-auto"
            : " pointer-events-none"
        }  bg-white bg-opacity-90 mx-auto z-20 fullscreen-${project.id}`}
      >
        <div
          className="flex container bg-white mx-auto flex-col gap-6 min-h-screen p-4 md:p-20"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between">
            <button
              className="text-white bg-black  rounded-full px-4 py-1 shadow-xl ml-auto"
              onClick={() => setFullScreenProject(null)}
            >
              Close
            </button>
          </div>

          <img
            src={project.img}
            className=" aspect-video overflow-hidden self-start md:w-1/2 mx-auto rounded-md fullscreen-img scale-90"
          />

          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl text-center self-center">
              {project.title}
            </h1>

            <div className=" md:w-[50%] mx-auto space-y-2">
              <p>{project.description}</p>

              {project.warning && (
                <p className=" font-bold text-red-400">{project.warning}</p>
              )}

              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  className=" underline font-bold hover:text-[#ec4e39] flex items-center gap-2 underline-offset-4"
                >
                  GitHub
                  <ExternalLink size={15} />
                </a>

                <a
                  href={project.liveLink}
                  target="_blank"
                  className=" underline font-bold hover:text-[#ec4e39] flex items-center gap-2 underline-offset-4"
                >
                  Live site
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>

            <h2 className=" text-3xl mb-8">Features</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {project.features.map((feature) => (
                <FeatureCard
                  key={`feature-${feature.name}`}
                  feature={feature}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className=" text-3xl mb-8">Technologies used</h2>

            <div className="grid grid-cols-5 md:flex md:flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center justify-center flex-col gap-2"
                >
                  {tech.img}
                  <p className="font-bold">{tech.name}</p>
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FocusedProject;
