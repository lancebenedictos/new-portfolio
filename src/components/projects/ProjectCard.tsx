import { useProjectStore } from "../../store/store";
import { motion } from "framer-motion";
type Props = {
  id: string;
  img: string;
};
const ProjectCard = ({ id, img }: Props) => {
  const inViewProject = useProjectStore((state) => state.inViewProject);
  const { setFullScreenProject } = useProjectStore(
    ({ setFullScreenProject }) => ({
      setFullScreenProject,
    })
  );

  const isActive =
    inViewProject === id
      ? "block pointer-events-auto"
      : "hidden pointer-events-none";

  return (
    <motion.div
      animate={{ opacity: inViewProject === id ? 1 : 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`absolute w-full h-full ${isActive}  overflow-hidden  rounded-md `}
    >
      <img src={img} className="w-full absolute" />

      <button
        className="text-white bg-black absolute rounded-full bottom-4  right-4 px-4 py-2 shadow-xl "
        onClick={() => {
          setFullScreenProject(id);
        }}
      >
        Show me
      </button>
    </motion.div>
  );
};

export default ProjectCard;
