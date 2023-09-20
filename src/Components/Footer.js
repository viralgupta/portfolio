import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="flex md:flex-row flex-col items-center p-1 bg-opacity-50 bg-black z-50 absolute w-full justify-between px-2">
      <a href="https://github.com/soumyajit4419/Portfolio" target="_blank" rel="noreferrer" className="text-white font-large flex items-center">Inspiration from Soumyajit &nbsp;<BiLinkExternal/></a>
      <div className="text-white">
        Copyright © {year} VG
      </div>
      <ul className="footer-icons flex space-x-20 items-center">
        <li className="social-icons">
          <a
            href="https://github.com/viralgupta"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/viral-gupta-824b87226/"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.instagram.com/icecreamparlour____/"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
