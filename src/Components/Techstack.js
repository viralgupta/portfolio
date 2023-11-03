import React from "react";
import {
  SiRedis,
  SiPrisma,
  SiSocketdotio,
  SiTypescript,
  SiAwslambda,
  SiTensorflow,
  SiTrpc,
  SiNextdotjs
} from "react-icons/si";
import {
  TbBrandThreejs,
  TbBrandOauth
} from "react-icons/tb";
import {
  BiLogoReact,
  BiLogoPostgresql,
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoMongodb,
} from "react-icons/bi";
import {
  GrMysql
} from "react-icons/gr";
import {
  FaAws,
} from "react-icons/fa";
import {
  BsFillBucketFill,
} from "react-icons/bs";

function Techstack() {
  const windowWidth = window.innerWidth;
  const size = windowWidth < 768 ? 20 : 50;
  return (
    <>
      <br />
      <div className="project-heading text-xl md:text-3xl md:mb-3 font-mono font-extrabold">
        Professional <strong className="text-green-100">Skillset </strong>
      </div>
      <div className="flex flex-wrap space-x-2 space-y-2 md:space-x-5 md:space-y-5">
        <span></span>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <SiTypescript size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <BiLogoReact size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <SiNextdotjs size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <BiLogoTailwindCss size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <TbBrandThreejs size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <SiTensorflow size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <BiLogoNodejs size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <SiPrisma size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <SiRedis size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <BiLogoMongodb size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <BiLogoPostgresql size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <GrMysql size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <FaAws size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <SiAwslambda size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <BsFillBucketFill size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <SiSocketdotio size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <TbBrandOauth size={size} />
        </div>
        <div xs={4} md={2} className="md:p-5 p-2 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <SiTrpc size={size} />
        </div>
      </div>
    </>
  );
}

export default Techstack;
