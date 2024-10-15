import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CONTACT } from "../constants";
import Logo from "../assets/OkanLogobigger.png";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={Logo} alt="OkanShr" width={40} />
        <h1 className="text-2xl">Shr</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href={CONTACT.gitHub} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={CONTACT.linkedIn} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
