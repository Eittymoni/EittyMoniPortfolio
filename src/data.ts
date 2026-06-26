import {
  Atom,
  Boxes,
  Cloud,
  Code2,
  FileCode2,
  GitBranch,
  Globe,
  Layers,
  type LucideIcon,
  Plug,
  Send,
  ShieldCheck,
  Type,
} from "lucide-react";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  repoUrl: string;
  featured?: boolean;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
};

export type Education = {
  degree: string;
  field: string;
  institution: string;
  period: string;
  description: string;
};

export type Skill = {
  name: string;
  icon: LucideIcon;
  level: number;
};

export const profile = {
  name: "Dilruba Yasmin Eitty",
  title: "Frontend Developer",
  tagline: "I build fast, accessible, and scalable web applications.",
  intro:
    "Frontend developer specializing in React.js, Next.js, and TypeScript. I turn complex problems into clean, performant interfaces with a sharp eye for detail and a focus on the user experience.",
  location: "Dhaka, Bangladesh",
  email: "eitty.t@gmail.com",
  linkedin: "https://www.linkedin.com/in/eitty-moni/",
  github: "https://github.com/Eittymoni",
  resumeUrl: "/resume.pdf",
};

export const skills: Skill[] = [
  { name: "React.js", icon: Atom, level: 95 },
  { name: "Next.js", icon: Layers, level: 90 },
  { name: "TypeScript", icon: Type, level: 90 },
  { name: "JavaScript", icon: FileCode2, level: 93 },
  { name: "HTML5", icon: Code2, level: 96 },
  { name: "CSS3", icon: Boxes, level: 94 },
  { name: "Tailwind CSS", icon: Layers, level: 95 },
  { name: "Redux Toolkit", icon: Boxes, level: 88 },
  { name: "React Hook Form", icon: ShieldCheck, level: 85 },
  { name: "REST API Integration", icon: Plug, level: 90 },
  { name: "Git & GitHub", icon: GitBranch, level: 92 },
  { name: "Deployment", icon: Cloud, level: 80 },
];

export const experience: Experience[] = [
  {
    role: "Web Developer",
    company: "Travel Business Portal",
    period: "July 2025 — Present",
    location: "Dhaka, Bangladesh",
    description:
      "Develop and maintain responsive web applications with a focus on performance, usability, and scalable frontend solutions. Collaborate with backend developers and designers to deliver high-quality digital products.",
    achievements: [
      "Develop responsive and user-friendly web interfaces using modern frontend technologies",
      "Integrate REST APIs and optimize application performance for better user experience",
      "Implement UI/UX designs into functional and interactive web applications",
      "Collaborate with cross-functional teams to deliver reliable and scalable solutions",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Softvence Agency",
    period: "January 2025 — June 2025",
    location: "Dhaka, Bangladesh",
    description:
      "Built responsive web interfaces and interactive features using React.js, JavaScript, HTML, and CSS. Worked closely with designers and backend developers to create efficient web solutions.",
    achievements: [
      "Developed responsive interfaces using React.js, JavaScript, HTML, and CSS",
      "Integrated REST APIs and managed application state using Redux Toolkit",
      "Ensured cross-browser compatibility and mobile responsiveness",
      "Performed debugging, testing, and code reviews to maintain code quality",
    ],
  },
  {
    role: "Operations Manager",
    company: "Rainbow Film Society",
    period: "December 2015 — December 2023",
    location: "Dhaka, Bangladesh",
    description:
      "Managed large-scale event operations, coordinated teams, international delegates, and ensured smooth execution of film festivals and cultural programs.",
    achievements: [
      "Managed end-to-end event operations and execution planning",
      "Coordinated with national and international participants and stakeholders",
      "Supervised teams and ensured smooth workflow during major events",
      "Developed strong leadership, communication, and project management skills",
    ],
  },
];

export const projects: Project[] = [
 {
  title: "Explore the World with Jafok",
  description:
    "A modern travel booking platform built with Next.js and TypeScript. Users can search flights, explore destinations, browse hotels, and enjoy a fast, responsive booking experience with server-side rendering and optimized performance.",
  tags: [
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "App Router",
    "REST API",
    "Responsive Design",
  ],
  image:
    "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1200",
  liveUrl: "https://deploy-preview-1--jafok.netlify.app/",
  repoUrl: "https://github.com/Eittymoni/Jafok.com",
  featured: true,
},
  {
    title: "AI Car Wrap Visualizer",
    description:
      "An AI-powered web application that allows users to visualize customized car wrap designs. Users can generate designs using AI prompts or upload artwork and preview different styles and color combinations interactively.",
    tags: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI API",
      "Zustand",
      "Cloudinary",
    ],
    image:
      "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1200",
    liveUrl: "https://wrapmyride.netlify.app/",
    repoUrl: "#",
    featured: true,
  },
  {
    title: "Orebi eCommerce Website",
    description:
      "A full-stack eCommerce platform where users can browse products, manage carts, place orders, and complete secure purchases. Includes admin management features for products, users, and orders.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
    liveUrl: "https://orebi-eitty.netlify.app/",
    repoUrl: "https://github.com/Eittymoni/Orebi-ecommerce-website",
    featured: true,
  },
  {
    title: "Coffee Shop Landing Page",
    description:
      "A visually appealing and responsive coffee shop landing page with smooth animations, modern UI design, and optimized user experience across devices.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1200",
    liveUrl: "https://coffee-shope-by-eitty.netlify.app/",
    repoUrl: "https://github.com/Eittymoni/Coffee-shop",
  },
];

export const education: Education[] = [
  {
    degree: "BSc",
    field: "Computer Science & Engineering",
    institution: "University of Information Technology & Science (UITS) ",
    period: "2011 — 2015",
    description:
      "Built a strong foundation in algorithms, data structures, software engineering, and web technologies. Graduated with a focus on human-computer interaction.",
  },
  {
    degree: "MBA",
    field: "Human Resource Management",
    institution: "Stamford University, Bangladesh (SUB)",
    period: "2016 — 2018",
    description:
      "Expanded leadership and organizational skills, with a focus on team dynamics, talent development, and management — complementing my technical work.",
  },
];

export const socials: { name: string; icon: LucideIcon; href: string }[] = [
  { name: "GitHub", icon: GitBranch, href: profile.github },
  { name: "LinkedIn", icon: Globe, href: profile.linkedin },
  { name: "Email", icon: Send, href: `mailto:${profile.email}` },
];
