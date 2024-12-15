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

  work: [
    {
      company: "Superteam, Solana Foundation",
      href: "https://superteam.fun/",
      badges: [],
      location: "Remote",
      title: "Blockchain Developer | Grant Recipient",
      logoUrl: "/superteam.png",
      start: "November 2024",
      end: "Present",
      description:
        "Working on the Solana blockchain. Building cool stuff. Helping others in the community do the same.",
    },
  ],
  projects: [

    {
      title: "Eternal Key",
      href: "https://eternalkey.xyz/",
      dates: "November 2024",
      active: true,
      description:
        "This is how you inherit your cryptocurrency. Backed by Solana Foundation.",
      technologies: [
        "Next.js",
        "Rust",
        "Anchor",
        "Typescript",
      ],
      links: [
        {
          type: "Website",
          href: "https://eternalkey.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/eternalkey.png",
      video:
        "",
    },
    {
      title: "Scene AI",
      href: "https://scene-ai.amritwt.me/",
      dates: "December 2024",
      active: true,
      description:
        "Remove background from videos and replace it with a green screen. SaaS in works.",
      technologies: [
        "Next.js",
        "Pytorch",
        "Typescript",
      ],
      links: [
        {
          type: "Website",
          href: "https://scene-ai.amritwt.me/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/scene.png",
      video:
        "",
    },
    {
      title: "Real Time Chat",
      href: "https://real-time-chat-liard.vercel.app/",
      dates: "November 2024",
      active: true,
      description:
        "A real time chat app that has temporary rooms. Scalable.",
      technologies: [
        "Next.js",
        "Socket.io",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://real-time-chat-liard.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/rlc.png",
      video:
        "",
    },
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
