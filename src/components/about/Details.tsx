import { ExternalLink } from "lucide-react";
import my_photo from "../../assets/my_photo.jpeg";

const Details = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-10">
      <img src={my_photo} className="w-full md:w-1/3 rounded-md object-cover" />
      <div className="text-white">
        <h2 className="  font-medium text-4xl">Who am I?</h2>
        <p className="   mt-2">
          My name is Lance. I graduated Computer Programming in Sheridan
          College. I am passionate in developing full-stack applications using
          MERN. I want to help create impactful technologies.
        </p>
        <h2 className=" text-2xl mt-4 underline underline-offset-4 font-medium">
          Awards
        </h2>
        <span className="flex justify-between flex-col">
          <p className=" font-bold mt-4 text-xl">
            Seneca 2023 Smart Cities Hackathon
          </p>

          <a
            href="https://factory.cancred.ca/v1/assertion/538640d3e75e12dc2c79007a83a755ca73d9e33c"
            target="_blank"
            className="hidden md:flex underline font-bold hover:text-[#ec4e39]  items-center gap-2 underline-offset-4"
          >
            See credential
            <ExternalLink size={15} />
          </a>
        </span>
        <span className="flex justify-between flex-col md:flex-row">
          <p>Second runner up & Category winner</p>
          <a
            href="https://factory.cancred.ca/v1/assertion/538640d3e75e12dc2c79007a83a755ca73d9e33c"
            target="_blank"
            className="flex md:hidden underline font-bold hover:text-[#ec4e39]  items-center gap-2 underline-offset-4"
          >
            See credential
            <ExternalLink size={15} />
          </a>

          <p>
            Verify with:
            <span className=" font-bold"> benedila@sheridancollege.ca</span>
          </p>
        </span>

        <div className="flex flex-col">
          <p className="mt-4">
            Created a GPT-powered language coach that is aimed to assist new
            English speakers by providing them with a space to practice
            conversing using English. The app is made using OpenAI's whisper API
            and Google Cloud's speech API - allowing users to interact with the
            application by speech
          </p>
          <a
            href="https://say-hello-next.vercel.app/"
            target="_blank"
            className=" underline font-bold hover:text-[#ec4e39] flex items-center gap-2 mt-2 ml-auto underline-offset-4"
          >
            See app
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
