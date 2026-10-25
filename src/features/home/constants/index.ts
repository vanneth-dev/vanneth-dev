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
    "Full-Stack Software Engineer focused on building scalable, high-performance web applications.",
  overview: {
    title: "Professional Profile & Current Impact",
    highlightText: (years: number) =>
      `Based in Phnom Penh, Cambodia, I am a Full-Stack Software Engineer with ${years} years of experience designing and delivering scalable web applications.`,
    bodyText:
      "I help build and maintain digital solutions for the Ministry of Labour and Vocational Training, combining reliable backend systems with user-friendly frontend interfaces to deliver effective digital services.",
  },
  backend: {
    title: "Backend Engineering",
    apiService: {
      heading: "API & Service Design",
      body: "Building secure, reliable RESTful APIs with Node.js, Laravel, and FastAPI, with a focus on performance and data integrity.",
    },
    database: {
      heading: "Database Architecture",
      body: "Designing and optimizing database schemas and queries to support reliable applications and efficient data access.",
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
    description: "Building high-performance RESTful APIs",
  },
  {
    name: "NestJS (Node.js)",
    icon: Target,
    color: "from-cyan-400 to-blue-600",
    description: "Building robust, scalable backend services",
  },
  {
    name: "Laravel (PHP)",
    icon: Code,
    color: "from-red-500 to-pink-500",
    description: "Developing maintainable backend applications and services",
  },
  {
    name: "Database Design & APIs",
    icon: Layers,
    color: "from-purple-500 to-indigo-500",
    description: "Designing efficient databases and reliable APIs",
  },
];

const frontendTech: TechItem[] = [
  {
    name: "React.js",
    icon: Sparkles,
    color: "from-blue-400 to-cyan-400",
    description: "Building modern, dynamic user interfaces",
  },
  {
    name: "TypeScript",
    icon: Code,
    color: "from-blue-500 to-indigo-600",
    description: "Developing type-safe, maintainable applications",
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
    description: "Creating interactive web experiences",
  },
];

const devopsTech: TechItem[] = [
  {
    name: "Version Control & CI/CD",
    icon: Globe,
    color: "from-gray-500 to-gray-700",
    description: "Managing code changes and automating deployments",
  },
  {
    name: "DigitalOcean",
    icon: Cloud,
    color: "from-orange-500 to-amber-500",
    description: "Configuring cloud hosting and application deployments",
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
    description: "Writing readable, maintainable code",
  },
  {
    name: "Results Driven",
    icon: Award,
    color: "from-green-500 to-emerald-500",
    description: "Delivering practical solutions and measurable value",
  },
  {
    name: "Problem Solving",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    description: "Analyzing issues and debugging efficiently",
  },
  {
    name: "Continuous Learning",
    icon: Rocket,
    color: "from-red-500 to-pink-500",
    description: "Learning new tools and applying best practices",
  },
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Tech University",
    year: "2020-2024",
    location: "San Francisco, CA",
    description:
      "Specialized in software engineering, with a focus on web development and database systems.",
    gpa: "3.8/4.0",
  },
  {
    degree: "Full Stack Web Development",
    institution: "Coding Bootcamp",
    year: "2023",
    location: "Online",
    description:
      "Intensive training in React, Node.js, databases, and modern web technologies.",
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
      "Fixed system bugs, implemented new features, and coordinated with ministry departments to clarify technical requirements.",
      "TVET 1.5M: កម្មវិធីបណ្តុះបណ្តាល ១.៥លាននាក់",
      "TVET Program: កម្មវិធីបណ្តុះបណ្តាលបច្ចេកទេសនិងវិជ្ជាជីវៈ",
      "TVET RPL: ប្រព័ន្ធវាយតម្លៃជំនាញមុនការងារនិងការទទួលស្គាល់ជំនាញ",
      "Ministry M&E System: ប្រព័ន្ធតាមដានត្រួតពិនិត្យនិងវាយតម្លៃ",
    ],
    skills: [
      "Node.js (Express)",
      "Laravel",
      "Angular",
      "TypeScript",
      "MySQL",
      "MongoDB",
      "Version Control",
      "Cloud Computing",
      "DigitalOcean",
    ],
    achievements: [
      "Developed and maintained TVET MIS, TVET 1.5M, TVET RPL, and the Ministry M&E System",
      "Designed RESTful APIs and organized MySQL and MongoDB data for reporting and management",
      "Fixed system bugs and delivered features based on ministry departments' requirements",
      "Collaborated with the team to automate deployments using GitHub Actions",
    ],
    status: "current",
    color: "from-emerald-400 to-teal-500",
    icon: Briefcase,
  },
  {
    type: "experience",
    position: "Lecturer Assistant Intern",
    company: "Beltei International University",
    period: "2023 - 2024",
    startDate: "2023-01-01",
    endDate: "2024-12-31",
    location: "Phnom Penh, Cambodia",
    description:
      "Assisted instructors with classroom activities and helped students understand programming logic and syntax.",
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
      "Developed software solutions using Python, PHP, SQL databases, and cloud technologies. Studied AI algorithms and mathematical concepts for solving practical problems, and explored CI/CD pipelines and scalable web applications.",
    skills: [
      "Software Architecture",
      "React",
      "TypeScript",
      "Python",
      "PHP",
      "SQL",
      "Cloud",
      "GitHub Actions",
      "AI Algorithms",
      "Mathematics",
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

const PROJECT_IMAGE_PATH = "/assets/imgs/projects/";

export const PROJECTS: Project[] = [
  {
    title: "TVET Main",
    description:
      "គេហទំព័រចម្បងសម្រាប់បង្ហាញ និងផ្តល់តំណភ្ជាប់ទៅកាន់ប្រព័ន្ធ TVET 1.5M និង TVET Program (MIS)។",
    technologies: ["Angular"],
    image: PROJECT_IMAGE_PATH + "tvet-main.png",
    demoLink: "https://tvet.gov.kh/",
    githubLink: "#",
  },
  {
    title: "TVET 15M",
    description:
      "ប្រព័ន្ធគ្រប់គ្រងកម្មវិធីបណ្តុះបណ្តាលជំនាញបច្ចេកទេស និងវិជ្ជាជីវៈដល់យុវជនមកពីគ្រួសារក្រីក្រ និងគ្រួសារងាយរងហានិភ័យចំនួន ១,៥លាននាក់ រួមមានគេហទំព័រសម្រាប់អ្នកប្រើប្រាស់ ប្រព័ន្ធគ្រប់គ្រងរដ្ឋបាល និង Backend API។",
    technologies: ["Node.js (Express)", "Angular", "MongoDB"],
    image: PROJECT_IMAGE_PATH + "tvet-15m.png",
    demoLink: "https://scholarship.tvet.gov.kh/",
    githubLink: "#",
  },
  {
    title: "TVET Program",
    description:
      "ប្រព័ន្ធព័ត៌មានគ្រប់គ្រងការអប់រំបណ្តុះបណ្តាលបច្ចេកទេស និងវិជ្ជាជីវៈ (TVET MIS) សម្រាប់បង្ហាញ និងគ្រប់គ្រងព័ត៌មានសាលារៀន កម្មវិធីបណ្តុះបណ្តាល និងទិន្នន័យពាក់ព័ន្ធ តាមរយៈប្រព័ន្ធ School, DGT-VET, Admin និង Backend API។",
    technologies: ["Node.js (Express)", "Angular", "MongoDB"],
    image: PROJECT_IMAGE_PATH + "tvet-program.png",
    demoLink: "https://school.tvet.gov.kh/",
    githubLink: "#",
  },
  {
    title: "TVET RPL",
    description:
      "ប្រព័ន្ធវាយតម្លៃផ្អែកលើសមត្ថភាព និងការផ្តល់គុណវុឌ្ឍិសម្រាប់កម្ពុជា",
    technologies: ["Node.js (Express)", "Angular", "MongoDB"],
    image: PROJECT_IMAGE_PATH + "tvet-rpl.png",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Job Seeker & Job Provider",
    description: "ប្រព័ន្ធស្វែងរកការងារ និងប្រព័ន្ធជ្រើសរើសកម្លាំងពលកម្ម",
    technologies: ["Laravel (PHP)", "MySQL"],
    image: PROJECT_IMAGE_PATH + "onsite.png",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Freelance Project",
    description: "KRT388FUN Admin Dashboard",
    technologies: ["React (TypeScript)", "FastAPI (Python)", "MySQL"],
    image: PROJECT_IMAGE_PATH + "KRT388FUNAdminDashboard.png",
    demoLink: "#",
    githubLink: "#",
  },
];

// export const CERTIFICATES: Certificate[] = [
//   {
//     title: "Programming with JavaScript",
//     issuer: "Coursera",
//     date: "",
//     credentialId: "WTZZ66KB46D5",
//     verifyLink:
//       "https://www.coursera.org/account/accomplishments/verify/WTZZ66KB46D5",
//     image: "/assets/img/certificate/Coursera_JavaScript.png",
//   },
//   {
//     title: "Front-End Development",
//     issuer: "Coursera",
//     date: "",
//     credentialId: "V24NFUPLKBJW",
//     verifyLink:
//       "https://www.coursera.org/account/accomplishments/verify/V24NFUPLKBJW",
//     image: "/assets/img/certificate/Coursera_Front-End.png",
//   },
//   {
//     title: "Version Control",
//     issuer: "Coursera",
//     date: "",
//     credentialId: "GR6CYPFDAUNY",
//     verifyLink:
//       "https://www.coursera.org/account/accomplishments/verify/GR6CYPFDAUNY",
//     image: "/assets/img/certificate/Coursera_version_control.png",
//   },
// ];

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
