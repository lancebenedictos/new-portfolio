import shoe from "../assets/shoes.png";
import food from "../assets/food.png";
import blog from "../assets/blog.png";
import portfolio from "../assets/portfolio.png";
import resume from "../assets/resume.jpg";

import {
  SiAuth0,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion, TbCircleLetterT } from "react-icons/tb";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { GrStorage } from "react-icons/gr";
import { RiOpenaiFill } from "react-icons/ri";

const FEATURES = {
  react: {
    name: "React",
    img: <FaReact size={20} />,
  },
  express: {
    name: "Express",
    img: <SiExpress size={20} />,
  },
  mongoDb: {
    name: "MongoDB",
    img: <SiMongodb size={20} />,
  },
  tailwind: {
    name: "Tailwind",
    img: <SiTailwindcss size={20} />,
  },
  typescript: {
    name: "TypeScript",
    img: <SiTypescript size={20} />,
  },
  framer: {
    name: "Framer",
    img: <TbBrandFramerMotion size={20} />,
  },
  node: {
    name: "NodeJS",
    img: <FaNodeJs size={20} />,
  },
  zustand: {
    name: "Zustand",
    img: <GrStorage size={20} />,
  },
  stripe: {
    name: "Stripe",
    img: <SiStripe size={20} />,
  },
  auth0: {
    name: "Auth0",
    img: <SiAuth0 size={20} />,
  },
  query: {
    name: "React-Query",
    img: <TbCircleLetterT size={20} />,
  },
  jwt: {
    name: "JWT",
    img: <SiJsonwebtokens size={20} />,
  },
  openai: {
    name: "OpenAI",
    img: <RiOpenaiFill size={20} />,
  },
};

export const projects: Project[] = [
  {
    title: "SkipTheDishes clone",
    warning: "This server runs on a free instance. It may take longer to load",
    id: "food",
    img: food,
    features: [
      {
        name: "Filter restaurants by city",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712770633/food-app/c7mqd7toqiovjupjbbcu.jpg",
      },
      {
        name: "Search by restaurant name or cuisine",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712770634/food-app/rbax9rnf25f2lwul8tpl.jpg",
      },
      {
        name: "Order food",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712770633/food-app/tczxc2a1qbfcqpxq2scs.jpg",
      },
      {
        name: "Checkout with Stripe",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712770633/food-app/vqzvmqtvewaj2tacl7tl.jpg",
      },
      {
        name: "Track all your food orders",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712770633/food-app/ehep7ueqwo8ryv7ijros.jpg",
      },
      {
        name: "Authenticate with Auth0",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712770633/food-app/lmuox6izzfn5tkezmgvi.jpg",
      },
      {
        name: "Create your own restaurant",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712770633/food-app/kohidx6aabhjggbocu8v.jpg",
      },
      {
        name: "See active restaurant orders",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712770633/food-app/mccqxzsob1eewqnmo72j.jpg",
      },
    ],
    technologies: [
      FEATURES.react,
      FEATURES.express,
      FEATURES.mongoDb,
      FEATURES.node,
      FEATURES.tailwind,
      FEATURES.typescript,
      FEATURES.stripe,
      FEATURES.auth0,
      FEATURES.query,
    ],
    github: "https://github.com/lancebenedictos/FoodOrderingApp",
    liveLink: "https://foodorderingapp-frontend.onrender.com/",
    description:
      "This app allows people to both order food and create a restaurant. It uses Stripe for payments and Auth0 for authentication. Users can select a city and search for restaurants based on name and cuisine",
  },
  {
    title: "Resume generator",
    warning: "This server runs on a free instance. It may take longer to load",
    id: "resume",
    img: resume,
    features: [
      {
        name: "Search for jobs",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712952258/resume/qlbqmwdmatbodxrfnu74.jpg",
      },
      {
        name: "JWT authentication",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712952258/resume/qlbqmwdmatbodxrfnu74.jpg",
      },
      {
        name: "Generate and download tailored resume",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712952258/resume/wxa2u8srcr0n9iftpd88.jpg",
      },
      {
        name: "Create profile",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712952258/resume/atowxpakfbfljntui8nh.jpg",
      },
      {
        name: "Save jobs",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712952257/resume/t4ed3bgmajyehavfd9jf.jpg",
      },
    ],
    technologies: [
      FEATURES.react,
      FEATURES.express,
      FEATURES.mongoDb,
      FEATURES.node,
      FEATURES.tailwind,
      FEATURES.typescript,
      FEATURES.query,
      FEATURES.jwt,
      FEATURES.openai,
    ],
    github: "https://github.com/lancebenedictos/resume-tracker",
    liveLink: "https://resume-tracker-686h.onrender.com/",
    description:
      "This app allows users to search for jobs using a web scraper API from RapidAPI. Users are able to save jobs and generate and download resumes tailored for a job. Authentication is done using JWT.",
  },
  {
    title: "Portfolio",
    id: "portfolio",
    img: portfolio,
    features: [
      {
        name: "Get to know me",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712777175/portfolio/ivqlk0vazhnh5uzvvlsv.jpg",
      },
      {
        name: "Check out my skills",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712777175/portfolio/i0tohdhjhx0m1c455p2v.jpg",
      },
      {
        name: "See some of my projects",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712777175/portfolio/dnwuozffew0dtrf6k0pe.jpg",
      },
    ],
    technologies: [
      FEATURES.react,
      FEATURES.framer,
      FEATURES.tailwind,
      FEATURES.typescript,
      FEATURES.zustand,
    ],
    github: "",
    liveLink: "https://lancebenedictos.dev/",
    description:
      "This website is dedicated to showcase my work. It is made using TypeScript and React. Animations are made with Framer Motion to give users a interactive user experience",
  },
  {
    title: "Elev",
    id: "elev",
    img: shoe,
    features: [
      {
        name: "See new inventory",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712777568/elev/gsat2vrznpgpsfq3t6z3.jpg",
      },
      {
        name: "Testimonies",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712777568/elev/bj85cenuzouvobzwns8c.jpg",
      },
      {
        name: "View all inventory",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712777568/elev/rvmz8bulaweupxq1iiks.jpg",
      },
      {
        name: "Cart and checkout",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712777568/elev/srdr0mirruc80xlmwu4s.jpg",
      },
      {
        name: "Pick shoe details",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712777568/elev/qhm5o0mmyn6joqzcnkwf.jpg",
      },
      {
        name: "About page",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712777568/elev/e9enueljifeocdm1nmfe.jpg",
      },
    ],
    technologies: [FEATURES.react, FEATURES.framer, FEATURES.tailwind],
    github: "https://github.com/lancebenedictos/elev",
    liveLink: "https://elev.vercel.app/",
    description:
      "Elev is a e-commerce shop that is dedicated to showcase shoes",
  },
  {
    title: "Film blog",
    id: "blog",
    img: blog,
    features: [
      {
        name: "Header",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712780030/blog/fxj9z5clwergrqilfaks.jpg",
      },
      {
        name: "Film strip",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712780030/blog/yw5fb839c4fftuhgjiq0.jpg",
      },
      {
        name: "Gallery",
        img: "https://res.cloudinary.com/flexibble/image/upload/v1712780030/blog/rbb3xjd1733h0qbt4sqn.jpg",
      },
    ],
    technologies: [
      FEATURES.react,
      FEATURES.framer,
      FEATURES.tailwind,
      FEATURES.typescript,
    ],
    github: "https://github.com/lancebenedictos/film-blog",
    liveLink: "https://film-blog-iota.vercel.app/",
    description: "This site is dedicated to showcase film photographs",
  },
];

export type Feature = { name: string; img: string };

export type Project = {
  title: string;
  liveLink: string;
  github: string;
  id: string;
  img: string;
  features: Feature[];
  technologies: { name: string; img: React.ReactNode }[];
  description: string;
  warning?: string;
};
