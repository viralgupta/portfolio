import React from "react";
import {
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiArduino,
  SiRaspberrypi,
  SiPython
} from "react-icons/si";

function Toolstack() {
  return (
    <>
      <br />
      <br />
      <div className="project-heading text-3xl font-mono font-extrabold">
        Other <strong className="text-green-100">Skills</strong>
      </div>
      <div className="flex flex-wrap space-x-5 space-y-5">
        <span></span>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <SiAdobepremierepro size={50} />
        </div>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <SiAdobeaftereffects size={50} />
        </div>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <SiArduino size={50} />
        </div>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <SiRaspberrypi size={50} />
        </div>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <SiPython size={50} />
        </div>
      </div>
    </>
  );
}

export default Toolstack;
