import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Viral Gupta",
  initials: "VG",
  url: "https://viralgupta.com",
  location: "UP, India",
  locationLink: "",
  birthDate: new Date("2004-05-21"), 
  description:
    `22 year old something guy`,
  summary:
  "tldr; learnt by hacking around on the internet. \n\n" +
  "I like technology. It makes a dent in the universe. \n\n" +
  "I write code agentically. A lot of it.\n\n" +
  "Speed ran content across socials when I was young.\n\n" +
  "Right now I just build stuff!\n\n" +
  "If you want to know more about me, [here are somethings I believe in](/blog/things-i-believe).",

  avatarUrl: "/me.png",
  skills: [
    "react",
    "next.js",
    "typescript",
    "postgres",
    "won 6 hackathons",
    "can do hundred pushups"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "guptaviral0@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/viralgupta",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/viral-gupta-824b87226/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/viralgp",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:guptaviral0@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  education: [
    {
      school: "srm institute of science and technology",
      href: "https://www.srmist.edu.in/",
      degree: "b.tech computer science, software engineering | 9.11 cgpa",
      logoUrl: "/srm.webp",
      start: "2022",
      end: "2026",
    },
  ],

  work: [
    {
      company: "indus",
      href: "https://investindus.com/",
      badges: [],
      location: "remote",
      title: "full stack engineer | fulltime",
      logoUrl: "/indus.png",
      start: "february 2025",
      end: "present",
      description:
        "took the landing page from 45 to 92 on pagespeed by rewriting it in next.js, then made it move with framer motion and glsl. shipped payments from scratch, pulled 8+ services off kubernetes onto serverless and knocked ~45% off the cloud bill, and cut build times ~80% with an nx monorepo running on bun. built the whole web app from an empty folder to 1000+ people using it every month.",
    },
    {
      company: "google summer of code",
      href: "https://summerofcode.withgoogle.com/archive/2024/projects/jznxtKv0",
      badges: [],
      location: "remote",
      title: "contributor at neutralinojs",
      logoUrl: "/gsoc.png",
      start: "may 2024",
      end: "august 2024",
      description:
        "wrote an npm package from scratch that lets you run node.js inside desktop apps. ci, docs, the whole thing, shipped to a project real people build on.",
    },
  ],
} as const;
