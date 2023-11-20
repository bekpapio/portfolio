import myImage from "../assets/cvPic.jpg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Hero() {
  return (
    <div className="flex justify-center items-center p-2">
      <div className="grid sm:grid-cols-2 gap-5 items-center mt-5 justify-center">
        <div className="">
          <div className="font-bold capitalize text-4xl mb-3">
            <h1 className="">Hi,I am Beka Tolesa</h1>
            <h1 className="">software developer</h1>
          </div>
          <p className="mb-5">
            When tailoring this CV to a specific job application, be sure to
            highlight relevant coursework, projects, and skills that align with
            the requirements of the position.
          </p>
          <div className="font-bold text-white capitalize cursor-pointer flex gap-2 flex-wrap items-center mb-5">
            <div className="bg-primary p-2 rounded">Download resume</div>
            <div className="border-primary p-2 rounded">hire me</div>
          </div>
          <div className="">
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-blue-600 text-2xl hover:text-blue-800" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-blue-400 text-2xl hover:text-blue-600" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-pink-600 text-2xl hover:text-pink-800" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-blue-800 text-2xl hover:text-blue-900" />
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <img src={myImage} alt="img" className="w-[300px] md:w-[400px] mx-auto" />
        </div>
      </div>
    </div>
  );
}
