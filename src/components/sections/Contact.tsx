import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavStore } from "../../store/store";
import emailjs from "@emailjs/browser";

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
    <div className="min-h-[110vh] container mx-auto" id="contact" ref={ref}>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-[80%] lg:w-[400px] p-4  bg-white border"
      >
        <label className="mt-4" htmlFor="user_name">
          Name
        </label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          className="border-2 border-black p-2"
        />
        <label className="mt-4" htmlFor="user_email">
          Email
        </label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          required
          className="border-2 border-black p-2"
        />
        <label className="mt-4" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          className="border-2 border-black p-2"
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
    </div>
  );
};

export default Contact;
