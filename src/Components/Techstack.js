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
  return (
    <>
      <br />
      <div className="project-heading text-3xl font-mono font-extrabold">
        Professional <strong className="text-green-100">Skillset </strong>
      </div>
      <div className="flex flex-wrap space-x-5 space-y-5">
        <span></span>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <SiTypescript size={50} />
        </div>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <BiLogoReact size={50} />
        </div>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <SiNextdotjs size={50} />
        </div>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <BiLogoTailwindCss size={50} />
        </div>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <TbBrandThreejs size={50} />
        </div>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <SiTensorflow size={50} />
        </div>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <BiLogoNodejs size={50} />
        </div>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <SiPrisma size={50} />
        </div>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <SiRedis size={50} />
        </div>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <BiLogoMongodb size={50} />
        </div>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <BiLogoPostgresql size={50} />
        </div>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <GrMysql size={50} />
        </div>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <FaAws size={50} />
        </div>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <SiAwslambda size={50} />
        </div>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <BsFillBucketFill size={50} />
        </div>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <SiSocketdotio size={50} />
        </div>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <TbBrandOauth size={50} />
        </div>
        <div xs={4} md={2} className="p-5 w-min rounded-md border hover:scale-105 hover:border-green-300">
          <SiTrpc size={50} />
        </div>
      </div>
    </>
  );
}

export default Techstack;
