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
    <div className="flex flex-row items-center p-1 bg-opacity-50 bg-black z-50 absolute w-full justify-between px-2">
      <a href="https://soumyajit.vercel.app/" target="_blank" rel="noreferrer" className="text-white font-large items-center hidden md:flex">Inspiration from Soumyajit &nbsp;<BiLinkExternal/></a>
      <div className="text-white">
        VG&nbsp;©&nbsp;{year}&nbsp;
      </div>
      <ul className="footer-icons flex md:space-x-20 space-x-2 items-center">
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
