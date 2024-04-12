import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavStore } from "../../store/store";
import emailjs from "@emailjs/browser";
import { LinkedinIcon } from "lucide-react";
import { TiSocialGithubCircular } from "react-icons/ti";
import { HiOutlineDocument } from "react-icons/hi";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const changeSection = useNavStore((state) => state.changeSection);
  const section = useNavStore((state) => state.currentSection);
  const setIsChangeable = useNavStore((state) => state.setIsChangeable);

  const form = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const VITE_SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const VITE_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const VITE_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const personalData = {
    email: "lancebenedictos@gmail.com",
    phone: "(647)898-5203",
    location: "Mississauga, ON",
    github: "https://github.com/lancebenedictos",
    linkedIn: "https://www.linkedin.com/in/lancebenedictos/",
  };

  useEffect(() => {
    if (section === "contact" && isInView) {
      setIsChangeable(true);
    }
    if (isInView) changeSection("contact");
  }, [changeSection, isInView, section, setIsChangeable]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);
    emailjs
      .sendForm(
        VITE_SERVICE_ID,
        VITE_TEMPLATE_ID,
        form.current as HTMLFormElement,
        VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsLoading(false);
          setMessage("Thanks for leaving a message, I'll be sure to respond!");
          console.log(result.text);
        },
        (error) => {
          setIsLoading(false);
          setMessage("Something went wrong, please try again");

          console.log(error.text);
        }
      );
  };

  if (!VITE_PUBLIC_KEY || !VITE_TEMPLATE_ID || !VITE_SERVICE_ID)
    return <div>No key</div>;
  return (
    <div
      className="min-h-screen container mx-auto flex flex-col justify-center"
      id="contact"
      ref={ref}
    >
      <p className=" text-center text-5xl font-medium">Say Hello!</p>
      <div className="flex flex-col md:flex-row p-6 gap-10">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full md:w-1/2  mx-auto"
        >
          <label className="mt-4" htmlFor="user_name">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className="border-b-2 border-black p-2"
          />
          <label className="mt-4" htmlFor="user_email">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            required
            className="border-b-2 border-black p-2"
          />
          <label className="mt-4" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            className="border-b-2 border-black p-2"
          />

          {message && <p>{message}</p>}
          <input
            type="submit"
            value="Send"
            className={`mt-4  py-2 cursor-pointer ${
              isLoading ? "bg-red-100" : "bg-red-200"
            }`}
            disabled={isLoading}
          />
        </form>

        <div className="md:w-1/2 items-start flex flex-col gap-4 ">
          <div>
            <h3 className="font-medium text-xl">Contact</h3>
            <p>Lance Benedictos</p>
            <p>{personalData.email}</p>
            <p>{personalData.phone}</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href={personalData.linkedIn}
              target="_blank"
              className=" flex underline font-bold hover:text-[#ec4e39]  items-center gap-1 underline-offset-4"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
            <a
              href={personalData.github}
              target="_blank"
              className=" flex underline font-bold hover:text-[#ec4e39]  items-center gap-1 underline-offset-4"
            >
              <TiSocialGithubCircular size={25} />
              GitHub
            </a>
            <a
              href="./resume.pdf"
              target="_blank"
              className=" flex underline font-bold hover:text-[#ec4e39]  items-center gap-1 underline-offset-4"
            >
              <HiOutlineDocument size={25} />
              CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
