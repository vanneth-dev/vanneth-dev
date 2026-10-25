import {
  Award,
  Brain,
  Briefcase,
  Cloud,
  Code,
  Database,
  Facebook,
  FolderOpen,
  Github,
  Globe,
  GraduationCap,
  Heart,
  Home,
  Layers,
  LayoutGrid,
  Linkedin,
  Rocket,
  Server,
  Sparkles,
  Target,
  User,
  Zap,
} from "lucide-react";
import type {
  Certificate,
  Education,
  JourneyItem,
  NavItem,
  Project,
  SkillCategory,
  SocialLink,
  Tab,
  TechItem,
  TechStack,
  TopLink,
} from "../types";

export const EXPERIENCE_YEARS = new Date().getFullYear() - 2023;

export const ROUTES = {
  HOME: {
    INDEX: "/",
    BLOG: "/blog",
    COURSES: "/courses",
    CONTACT: "/contact",
  },
} as const;

export const SECTION_STRINGS = {
  title: "About Me",
  subtitle:
    "Results-driven Full-Stack Software Engineer specializing in delivering scalable, high-performance web applications.",
  overview: {
    title: "Engineer Profile & Current Impact",
    highlightText: (years: number) =>
      `Based in Phnom Penh, Cambodia, I am a dedicated Full-Stack Software Engineer with ${years} years of professional experience focused on the design and delivery of scalable web applications.`,
    bodyText:
      "I currently contribute to building high-performance solutions for the Ministry of Labour and Vocational Training. My role requires a blend of robust backend system design and elegant frontend implementation to ensure seamless, impactful digital services.",
  },
  backend: {
    title: "Specialization: Robust Backend Systems",
    apiService: {
      heading: "API & Service Design",
      body: "Proficient in building secure and high-throughput RESTful APIs using Node.js, Laravel, and FastAPI. Emphasis on latency reduction and reliable data integrity.",
    },
    database: {
      heading: "Database Architecture",
      body: "Experience in efficient DB schema design, optimization, and query tuning to support applications that demand both high volume and high availability.",
    },
  },
  techStack: {
    title: "Core Technical Expertise",
  },
  mindset: {
    title: "Professional Approach & Values",
  },
};

export const NAVIGATION_SECTIONS: NavItem[] = [
  {
    id: "hero",
    label: "Home",
    icon: Home,
    enabled_section: true,
    enabled_navigation: true,
  },
  {
    id: "aboutMe",
    label: "About",
    icon: User,
    enabled_section: true,
    enabled_navigation: true,
  },
  {
    id: "journey",
    label: "Journey",
    icon: GraduationCap,
    enabled_section: true,
    enabled_navigation: true,
  },
  {
    id: "skills",
    label: "Skills",
    icon: Code,
    enabled_section: true,
    enabled_navigation: true,
  },
  {
    id: "projects",
    label: "Projects",
    icon: FolderOpen,
    enabled_section: true,
    enabled_navigation: true,
  },
  {
    id: "certificates",
    label: "Certificates",
    icon: Heart,
    enabled_section: false,
    enabled_navigation: true,
  },
];

export const TOP_LINKS: TopLink[] = [
  { name: "Home", href: ROUTES.HOME.INDEX, hasDropdown: false },
  { name: "Blog", href: "#", hasDropdown: false },
  { name: "Contact", href: ROUTES.HOME.CONTACT, hasDropdown: false },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/vanneth-tak-bb8179225/",
    label: "LinkedIn",
    className:
      "hover:text-blue-600 hover:bg-gradient-to-br hover:from-blue-600/30",
  },
  {
    icon: Github,
    href: "https://github.com/vanneth-dev",
    label: "GitHub",
    className:
      "hover:text-gray-300 hover:bg-gradient-to-br hover:from-gray-700/30",
  },
  {
    icon: Facebook,
    href: "https://facebook.com",
    label: "Facebook",
    className:
      "hover:text-blue-500 hover:bg-gradient-to-br hover:from-blue-700/30",
  },
];

export const ABOUT_TABS: Tab[] = [
  { id: "overview", label: "Professional Summary", icon: User },
  { id: "backend", label: "Backend Architecture", icon: Server },
  { id: "techstack", label: "Core Tech Stack", icon: LayoutGrid },
  { id: "mindset", label: "Growth & Values", icon: Brain },
];

const backendTech: TechItem[] = [
  {
    name: "Node.js (Express)",
    icon: Zap,
    color: "from-green-500 to-green-600",
    description: "High-performance API development",
  },
  {
    name: "Laravel (PHP)",
    icon: Code,
    color: "from-red-500 to-pink-500",
    description: "Monolithic and microservices expertise",
  },
  {
    name: "NestJS (Node.js)",
    icon: Target,
    color: "from-cyan-400 to-blue-600",
    description: "Building robust, scalable services",
  },
  {
    name: "DB Design & APIs",
    icon: Layers,
    color: "from-purple-500 to-indigo-500",
    description: "Designing normalized, high-throughput databases",
  },
];

const frontendTech: TechItem[] = [
  {
    name: "ReactJs",
    icon: Sparkles,
    color: "from-blue-400 to-cyan-400",
    description: "Modern, dynamic user interfaces",
  },
  {
    name: "Angular",
    icon: Layers,
    color: "from-red-500 to-rose-600",
    description: "Building component-based web applications",
  },
  {
    name: "JavaScript",
    icon: Zap,
    color: "from-yellow-400 to-amber-500",
    description: "Creating interactive browser experiences",
  },

  {
    name: "TypeScript",
    icon: Code,
    color: "from-blue-500 to-indigo-600",
    description: "Writing type-safe, maintainable applications",
  },
];

const devopsTech: TechItem[] = [
  {
    name: "Git & CI/CD",
    icon: Globe,
    color: "from-gray-500 to-gray-700",
    description: "Version control and automated deployments",
  },
  {
    name: "Basic Digital Ocean",
    icon: Cloud,
    color: "from-orange-500 to-amber-500",
    description: "Fundamental cloud resource management",
  },
];

export const TECH_STACK: TechStack = {
  Backend: backendTech,
  Frontend: frontendTech,
  DevOpsCloud: devopsTech,
};

export const MINDSET_VALUES: TechItem[] = [
  {
    name: "Clean Code",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    description: "Focus on maintainability and readability",
  },
  {
    name: "Results Driven",
    icon: Award,
    color: "from-green-500 to-emerald-500",
    description: "Delivering tangible business value",
  },
  {
    name: "Problem Solving",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    description: "Analytical and efficient debugging",
  },
  {
    name: "Continuous Learning",
    icon: Rocket,
    color: "from-red-500 to-pink-500",
    description: "Adopting new tools and best practices",
  },
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Tech University",
    year: "2020-2024",
    location: "San Francisco, CA",
    description:
      "Specialized in Software Engineering with focus on web development and database systems.",
    gpa: "3.8/4.0",
  },
  {
    degree: "Full Stack Web Development",
    institution: "Coding Bootcamp",
    year: "2023",
    location: "Online",
    description:
      "Intensive program covering React, Node.js, databases, and modern web technologies.",
    gpa: "Distinction",
  },
];

export const JOURNEY_ITEMS: JourneyItem[] = [
  {
    type: "experience",
    position: "Full-Stack Developer",
    company: "ក្រសួងការងារ និងបណ្តុះបណ្តាលវិជ្ជាជីវៈ។",
    period: "Feb 2024 - Present",
    startDate: "2024-02-01",
    endDate: "Present",
    location: "Phnom Penh, Cambodia",
    description: [
      "Built and maintained TVET MIS, TVET 1.5M, TVET RPL, and the Ministry M&E System using Express.js, Laravel, and Angular.",
      "Designed RESTful APIs and structured MongoDB and MySQL databases for reporting and data management.",
      "Resolved system bugs, added new features, and aligned with ministry departments on technical requirements.",
      "TVET 1.5M: កម្មវិធីបណ្តុះបណ្តាល ១.៥លាននាក់",
      "TVET Program: កម្មវិធីបណ្តុះបណ្តាលបច្ចេកទេសនិងវិជ្ជាជីវៈ",
      "TVET RPL: ប្រព័ន្ធវាយតម្លៃជំនាញមុនការងារនិងការទទួលស្គាល់ជំនាញ",
      "Ministry M&E System: ប្រព័ន្ធតាមដានត្រួតពិនិត្យនិងវាយតម្លៃ",
    ],
    skills: [
      "Angular",
      "Node.js (Express)",
      "Laravel",
      "MySQL",
      "MongoDB",
      "TypeScript",
      "Version Control",
      "Digital Ocean",
      "Cloud Computing",
    ],
    achievements: [
      "Developed and maintained TVET MIS, TVET 1.5M, TVET RPL, and the Ministry M&E System",
      "Designed RESTful APIs and structured MySQL and MongoDB data for reporting and management",
      "Resolved system bugs and delivered features based on ministry departments' requirements",
      "Collaborated with the team to automate deployments using GitHub Actions",
    ],
    status: "current",
    color: "from-emerald-400 to-teal-500",
    icon: Briefcase,
  },
  {
    type: "experience",
    position: "Internship Lecturer Assistant",
    company: "Beltei International University",
    period: "2023 - 2024",
    startDate: "2023-01-01",
    endDate: "2024-12-31",
    location: "Phnom Penh, Cambodia",
    description:
      "Helped teachers with teaching activities and supported students with logic and code syntax during internship.",
    skills: [
      "Teaching Assistance",
      "JavaScript",
      "Problem Solving",
      "Communication",
      "Teamwork",
    ],
    achievements: [
      "Assisted teachers in classroom activities",
      "Supported students in understanding logic and code syntax",
      "Helped organize and grade assignments",
    ],
    status: "past",
    color: "from-green-400 to-lime-400",
    icon: Briefcase,
  },
  {
    type: "education",
    position: "Bachelor's of Software Engineering",
    company: "Beltei International University",
    period: "Dec 2022 - 2026",
    startDate: "2022-12-01",
    endDate: "2026-12-31",
    location: "Phnom Penh, Cambodia",
    description:
      "Built software solutions using Python, PHP, SQL databases, and cloud technologies. Applied AI algorithms and mathematical concepts to solve real-world problems. Integrated CI/CD pipelines and contributed to scalable web applications.",
    skills: [
      "Software Architecture",
      "Python",
      "PHP",
      "SQL",
      "Cloud",
      "AI Algorithms",
      "Mathematics",
      "React",
      "TypeScript",
      "GitHub Actions",
    ],
    achievements: [
      "Devised scalable software systems",
      "Implemented AI-driven features",
    ],
    status: "current",
    color: "from-emerald-400 to-teal-500",
    icon: Briefcase,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["React.js", "TypeScript", "Tailwind CSS", "Bootstrap"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js (Express & NestJS)", "Laravel"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Python", "PHP"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Databases & Caching",
    icon: Database,
    skills: ["MySQL", "MongoDB", "Redis"],
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Version Control", "CI/CD", "GitHub Actions", "DigitalOcean"],
    color: "from-orange-500 to-red-500",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "ប្រព័ន្ធស្វែងរកការងារ - Panel Jobs",
    description: "Full-stack job finder with Laravel, Telegram Bot",
    technologies: ["Laravel", "PHP", "MySQL", "Telegram Bot"],
    image: "/assets/imgs/projects/panel-jobs.jpeg",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Events Management System - events.mlvt.gov.kh",
    description:
      "Collaborative event management system with real-time updates and team features",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    image: "/assets/imgs/projects/events.mlvt.gov.kh.jpeg",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "ប្រព័ន្ធតាមដាន ត្រួតពិនិត្យ និងវាយតម្លៃ (M&E)",
    description:
      "M&E system for NGOs to track and evaluate projects effectively",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    image: "/assets/imgs/projects/me.mlvt.gov.kh.jpeg",
    demoLink: "#",
    githubLink: "#",
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-SA-2024-001",
    verifyLink: "#",
  },
  {
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2023",
    credentialId: "META-REACT-2023-002",
    verifyLink: "#",
  },
  {
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialId: "FCC-FSWD-2023-003",
    verifyLink: "#",
  },
  {
    title: "Google Analytics Certified",
    issuer: "Google",
    date: "2022",
    credentialId: "GA-CERT-2022-004",
    verifyLink: "#",
  },
];
