import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Amrit Rai",
  initials: "AR",
  url: "https://amritwt.me",
  location: "Mumbai, India",
  locationLink: "",
  birthDate: new Date("2004-04-06"), 
  description:
    "20 year old something guy",
  summary:
  "tldr; learnt by hacking around on the internet. \n\n" +
  "i like technology and deep science. they make a dent in the universe. \n\n" +
  "i write code and make zero mrr apps. \n\n" +
  "if you want to know more about me, [here are somethings i believe in](/blog/things-i-believe).",

  avatarUrl: "/me.png",
  skills: [
    "react",
    "next.js",
    "typescript",
    "python",
    "postgres",
    "shitposting",
    "can do hundred pushups"
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
      school: "mumbai university",
      href: "https://linkedin.com/in/amritwt",
      degree: "electronics & telecommunication",
      logoUrl: "/mu.png",
      start: "2022",
      end: "2025 (dropped out)",
    },
  ],

  work: [
    {
      company: "cracked devs",
      href: "https://crackeddevs.com/",
      badges: [],
      location: "remote",
      title: "software engineer | fulltime",
      logoUrl: "/cd.png",
      start: "august 2025",
      end: "present",
      description:
        "making apps at this studio!"
    },
    {
      company: "zero",
      href: "https://0.email/",
      badges: [],
      location: "remote",
      title: "software engineer | fulltime",
      logoUrl: "/zero.png",
      start: "june 2025",
      end: "august 2025",
      description:
        "let ai handle your email."
    },
    {
      company: "google summer of code",
      href: "https://summerofcode.withgoogle.com/",
      badges: [],
      location: "remote",
      title: "contributor under google deepmind",
      logoUrl: "/gsoc.png",
      start: "may 2025",
      end: "july 2025",
      description:
        "evaluating gemini on an open-source benchmark."
    },
    {
      company: "cal.com",
      href: "https://cal.com/",
      badges: [],
      location: "remote",
      title: "software engineer | intern",
      logoUrl: "/cal.png",
      start: "february 2025",
      end: "may 2025",
      description:
        "the best way to schedule meetings."
    },
    {
      company: "superteam, solana foundation",
      href: "https://superteam.fun/",
      badges: [],
      location: "remote",
      title: "member | grant recipient",
      logoUrl: "/superteam.png",
      start: "november 2024",
      end: "september 2025",
      description:
        "received a $3000 grant from the solana foundation for solving inheritance through an escrow contract.",
    },
  ],
  // projects: [

  //   {
  //     title: "Eternal Key",
  //     href: "https://eternalkey.xyz/",
  //     dates: "November 2024",
  //     active: true,
  //     description:
  //       "This is how you inherit your cryptocurrency. Backed by Solana Foundation.",
  //     technologies: [
  //       "Next.js",
  //       "Rust",
  //       "Anchor",
  //       "Typescript",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://eternalkey.xyz/",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //     ],
  //     image: "/eternalkey.png",
  //     video:
  //       "",
  //   },
  //   {
  //     title: "Scene AI",
  //     href: "https://scene-ai.amritwt.me/",
  //     dates: "December 2024",
  //     active: true,
  //     description:
  //       "Remove background from videos and replace it with a green screen. SaaS in works.",
  //     technologies: [
  //       "Next.js",
  //       "Pytorch",
  //       "Typescript",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://scene-ai.amritwt.me/",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //     ],
  //     image: "/scene.png",
  //     video:
  //       "",
  //   },
  //   {
  //     title: "Real Time Chat",
  //     href: "https://real-time-chat-liard.vercel.app/",
  //     dates: "November 2024",
  //     active: true,
  //     description:
  //       "A real time chat app that has temporary rooms. Scalable.",
  //     technologies: [
  //       "Next.js",
  //       "Socket.io",
  //       "Typescript",
  //       "TailwindCSS",
  //       "Shadcn UI",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://real-time-chat-liard.vercel.app/",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //     ],
  //     image: "/rlc.png",
  //     video:
  //       "",
  //   },
  //   {
  //     title: "Solana Developer Playground",
  //     href: "https://soldev-playground.vercel.app/",
  //     dates: "August 2024",
  //     active: true,
  //     description:
  //       "A one stop destination for all the tools a blockchain developer on Solana might need.",
  //     technologies: [
  //       "Next.js",
  //       "Typescript",
  //       "TailwindCSS",
  //       "Shadcn UI",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://soldev-playground.vercel.app/",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //     ],
  //     image: "/sol-dev.png",
  //     video:
  //       "",
  //   },
  //   {
  //     title: "Anon QnA",
  //     href: "https://anon-qna.vercel.app/",
  //     dates: "September 2024",
  //     active: true,
  //     description:
  //       "Ask your friends questions anonymously. Answer them yourself.",
  //     technologies: [
  //       "Next.js",
  //       "Typescript",
  //       "TailwindCSS",
  //       "PostgreSQL",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://anon-qna.vercel.app/",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //     ],
  //     image: "/anon-qna.png",
  //     video:
  //       "",
  //   }
  // ],
} as const;
