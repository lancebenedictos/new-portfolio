import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { ServiceProps } from "../components/services/ServiceSection";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

import { IoLogoFigma } from "react-icons/io5";
import { BiLogoFirebase } from "react-icons/bi";

const SIZE = 40;
export const skills: ServiceProps[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", component: <FaReact size={SIZE} /> },
      { name: "TypeScript", component: <SiTypescript size={SIZE} /> },
      { name: "JavaScript", component: <SiJavascript size={SIZE} /> },
      { name: "Tailwind", component: <SiTailwindcss size={SIZE} /> },
      { name: "Framer", component: <TbBrandFramerMotion size={SIZE} /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "NodeJS", component: <FaNodeJs size={SIZE} /> },
      { name: "MySQL", component: <SiMysql size={SIZE} /> },
      { name: "MongoDB", component: <SiMongodb size={SIZE} /> },
      { name: "ExpressJS", component: <SiExpress size={SIZE} /> },
      { name: "Firebase", component: <BiLogoFirebase size={SIZE} /> },
    ],
  },
  {
    title: "Other",
    items: [
      { name: "Git", component: <FaGitAlt size={SIZE} /> },
      { name: "Figma", component: <IoLogoFigma size={SIZE} /> },
    ],
  },
];
