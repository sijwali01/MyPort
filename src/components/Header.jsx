import React from "react";
import { FaFilePdf, FaGithub, FaHome } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiContactsBook3Line } from "react-icons/ri";
import { SiExpertsexchange } from "react-icons/si";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-blue-300">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">My Portfolio</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <FaHome />
            <Link to="/" className="mr-8 hover:text-black">
              Home
            </Link>

            <SiExpertsexchange />
            <Link to="/experience" className="mr-8 hover:text-black">
              Experience
            </Link>
            <RiContactsBook3Line />
            <Link to="/contact" className="mr-8 hover:text-black">
              Contact
            </Link>

            <FaFilePdf />
            <a
              href="https://drive.google.com/file/d/1ro9ourXXM8Y2M9h4_Au9o7HR7A193fQG/view"
              className="mr-8 hover:text-black"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>

            <FaLinkedin />
            <a
              href="https://www.linkedin.com/in/manish-sijwali-23b361196"
              className="mr-8 hover:text-black"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>

            <FaGithub />
            <a
              href="https://github.com/sijwali01"
              className="mr-8 hover:text-black"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
