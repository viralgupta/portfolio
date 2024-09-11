import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Amrit Rai",
  initials: "AR",
  url: "https://amritwt.me",
  location: "Mumbai, India",
  locationLink: "",
  description:
    "20 year old something guy.",
  summary:
  "electrical, electronics & telecommunication student. " +  
  "a self taught programmer. i'm self taught, on most cases. " +
  "like learning how to breathe. " +
  "my passions range from art that involves painting, some instrument or math. " +
  "art is something i like. i'm just not good at it. " +
  "i was good, but then i lost touch. " +
  "i also just read books for days on end. " +
  "i like to build stuff using code. " +
  "i play football, sometimes. " +
  "i used to play good football, or so i like to think. ", 
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "C++",
    "Shitposting",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "iamamrit27@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/retrogtx",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/amritwt",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/amritwt",
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
        url: "mailto:iamamrit27@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  education: [
    {
      school: "Mumbai University",
      href: "https://linkedin.com/in/amritwt",
      degree: "Electrical, Electronics & Telecommunication (BTech)",
      logoUrl: "/mu.png",
      start: "2022",
      end: "2026",
    },
  ],
   projects: [
    {
      title: "Solana Developer Playground",
      href: "https://soldev-playground.vercel.app/",
      dates: "August 2024",
      active: true,
      description:
        "A one stop destination for all the tools a blockchain developer on Solana might need.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://soldev-playground.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sol-dev.png",
      video:
        "",
    },
    {
      title: "Anon QnA",
      href: "https://anon-qna.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "Ask your friends questions anonymously. Answer them yourself.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://anon-qna.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/anon-qna.png",
      video:
        "",
    }
  ],
} as const;
