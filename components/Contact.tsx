import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faLine,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <span className="my-8 font-bold text-5xl">
        CO
        <span className="underline underline-offset-[1rem] decoration-[#FD014E]">
          NTA
        </span>
        CT
      </span>
      <div className="grid grid-cols-2 gap-16 w-full">
        <div className="grid gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-2xl">NAME</span>
            <input
              type="text"
              placeholder="your name"
              className="input border-2 border-gray-400 w-full bg-card"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-2xl">EMAIL</span>
            <input
              type="text"
              placeholder="Type here"
              className="input border-2 border-gray-400 w-full bg-card"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-2xl">MESSAGE</span>
            <textarea
              className="textarea h-24 input border-2 border-gray-400 w-full bg-card"
              placeholder="Bio"
            ></textarea>
          </div>
          <button className="btn btn-outline btn-accent btn-xl text-white">
            Send
          </button>
        </div>
        <div className="grid">
          <div className="flex flex-col gap-4">
            <p className="text-2xl">CONTACT DETAILS</p>

            <div className="flex gap-4 ml-10">
              <FontAwesomeIcon
                icon={faEnvelope}
                className=""
                style={{ fontSize: "2.3rem" }}
              />
              <p className="text-2xl opacity-50">ongsuwannoo@gmail.com</p>
            </div>

            <div className="flex gap-4 ml-10">
              <FontAwesomeIcon
                icon={faLine}
                className=""
                style={{ fontSize: "2.3rem" }}
              />
              <p className="text-2xl opacity-50">ongsuwannoo1</p>
            </div>

            <div className="flex gap-4 ml-10">
              <FontAwesomeIcon
                icon={faGlobe}
                className=""
                style={{ fontSize: "2.3rem" }}
              />
              <p className="text-2xl opacity-50">nocgy.com</p>
            </div>

            <p className="text-2xl mt-6">SOCIAL</p>

            <div className="flex gap-4 ml-10">
              <FontAwesomeIcon
                icon={faFacebook}
                className=""
                style={{ fontSize: "2.3rem" }}
              />
              <p className="text-2xl opacity-50">Jakkrapat Suwanno</p>
            </div>

            <div className="flex gap-4 ml-10">
              <FontAwesomeIcon
                icon={faInstagram}
                className=""
                style={{ fontSize: "2.3rem" }}
              />
              <p className="text-2xl opacity-50">ongsuwannoo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
