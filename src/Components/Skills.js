import React from "react";
import {
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiArduino,
  SiRaspberrypi,
  SiPython,
  SiAutodesk
} from "react-icons/si";

function Toolstack() {
  const windowWidth = window.innerWidth;
  const size = windowWidth < 768 ? 20 : 50;
  return (
    <>
    {window.innerWidth > 768 && <br/>}
      <br/>
      <div className="project-heading text-xl md:text-3xl font-mono md:mb-3 font-extrabold">
        Other <strong className="text-green-100">Skills</strong>
      </div>
      <div className="flex flex-wrap space-x-2 md:space-x-5 space-y-2 md:space-y-5">
        <span></span>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 duration-200 hover:border-green-300">
          <SiAutodesk size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 duration-200 hover:border-green-300">
          <SiAdobepremierepro size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 duration-200 hover:border-green-300">
          <SiAdobeaftereffects size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 duration-200 hover:border-green-300">
          <SiArduino size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 duration-200 hover:border-green-300">
          <SiRaspberrypi size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 duration-200 hover:border-green-300">
          <SiPython size={size} />
        </div>
      </div>
    </>
  );
}

export default Toolstack;
