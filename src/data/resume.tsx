import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Amrit Rai",
  initials: "AR",
  url: "https://dillion.io",
  location: "Mumbai, India",
  locationLink: "",
  description:
    "20 year old something guy. Welcome to my space.",
  summary:
  "electrical, electronics & telecommunication student.\n" +
  "a self taught programmer. i'm self taught, on most cases.\n" +
  "like learning how to breathe.\n" +
  "my passions range from art that involves painting, some instrument or math.\n" +
  "art is something i like. i'm just not good at it.\n" +
  "i was good, but then i lost touch.\n" +
  "i also just read books for days on end.\n" +
  "i like to build stuff using code.\n" +
  "i play football, sometimes.\n" +
  "i used to play good football, or so i like to think.\n" +
  "i hope to be useful for this world and make my time here worthwhile.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "C++",
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
    }
  ],
} as const;
