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

/**
 * Use for text that must be identical in both languages
 * (Khmer + English mixed text, brand names, technology names).
 */
const same = <T>(value: T) => ({ en: value, km: value });

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
  title: { en: "Professional Profile", km: "វិជ្ជាជីវៈប្រវត្តិការងារ" },
  subtitle: {
    en: "Full-Stack Software Engineer building reliable government and web systems, from classroom to production.",
    km: "Full-Stack Developer ដែលកសាងប្រព័ន្ធរដ្ឋាភិបាល និងគេហទំព័រដែលអាចទុកចិត្តបាន ពីថ្នាក់រៀនរហូតដល់ការប្រើប្រាស់ជាក់ស្តែង។",
  },
  overview: {
    title: {
      en: "Professional Profile",
      km: "វិជ្ជាជីវៈប្រវត្តិការងារ",
    },
    highlightText: {
      en: (years: number) =>
        `Based in Phnom Penh, Cambodia, I am a Full-Stack Software Engineer with ${years} years of hands-on experience, and a 2026 graduate in Software Engineering.`,
      km: (years: number) =>
        `មានមូលដ្ឋាននៅរាជធានីភ្នំពេញ ប្រទេសកម្ពុជា ខ្ញុំជា Full-Stack Developer ដែលមានបទពិសោធន៍ជាក់ស្តែង ${years} ឆ្នាំ ហើយបានបញ្ចប់ការសិក្សាផ្នែកវិស្វកម្មកម្មវិធីក្នុងឆ្នាំ ២០២៦។`,
    },
    bodyText: {
      en: "I began in a university classroom as a Lecturer Assistant Intern, helping students understand programming logic, then moved into professional development at the Ministry of Labour and Vocational Training. There I build and maintain national digital systems such as TVET MIS, TVET 1.5M, TVET RPL, and the Ministry M&E System, working closely with ministry departments to turn real requirements into working software.",
      km: "ខ្ញុំចាប់ផ្តើមនៅក្នុងថ្នាក់រៀនសាកលវិទ្យាល័យជាអ្នកហាត់ការជំនួយការសាស្ត្រាចារ្យ ដោយជួយនិស្សិតឱ្យយល់ពីតក្កវិជ្ជានៃការសរសេរកម្មវិធី បន្ទាប់មកបានឈានចូលការងារជាអ្នកអភិវឌ្ឍកម្មវីធីនៅក្រសួងការងារ និងបណ្តុះបណ្តាលវិជ្ជាជីវៈ។ នៅទីនោះ ខ្ញុំបានចូលរួមកសាង និងថែទាំប្រព័ន្ធឌីជីថល ដូចជា TVET MIS, TVET 1.5M, TVET RPL ប្រព័ន្ធ M&E និង ប្រព័ន្ធឌីជីថលផ្សេងៗរបស់ក្រសួង ដោយធ្វើការយ៉ាងជិតស្និទ្ធជាមួយនាយកដ្ឋាននានាក្រោមឱវាទក្រសួង ដើម្បីបំប្លែងតម្រូវការជាក់ស្តែងទៅជាប្រព័ន្ធឌីជីថលនៅលើគេហទំព័រ។",
    },
  },
  backend: {
    title: { en: "Backend Engineering", km: "ការអភិវឌ្ឍផ្នែកខាងក្រោយ" },
    apiService: {
      heading: {
        en: "API & Service Design",
        km: "ការរចនា API និងសេវាកម្ម",
      },
      body: {
        en: "Designing RESTful APIs with Node.js (Express), Laravel, and FastAPI that power ministry platforms, with a focus on security, performance, and data integrity.",
        km: "រចនា RESTful API ជាមួយ Node.js (Express), Laravel និង FastAPI ដែលជំរុញវេទិការបស់ក្រសួង ដោយផ្តោតលើសុវត្ថិភាព ប្រសិទ្ធភាព និងភាពត្រឹមត្រូវនៃទិន្នន័យ។",
      },
    },
    database: {
      heading: {
        en: "Database Architecture",
        km: "ស្ថាបត្យកម្មមូលដ្ឋានទិន្នន័យ",
      },
      body: {
        en: "Structuring MongoDB and MySQL databases for reporting and data management, so large records stay organized and easy to query.",
        km: "រៀបចំរចនាសម្ព័ន្ធមូលដ្ឋានទិន្នន័យ MongoDB និង MySQL សម្រាប់ការរាយការណ៍ និងការគ្រប់គ្រងទិន្នន័យ ដើម្បីឱ្យកំណត់ត្រាធំៗមានរបៀបរៀបរយ និងងាយស្រួលសាកសួរ។",
      },
    },
  },
  techStack: {
    title: { en: "Core Technical Expertise", km: "ជំនាញបច្ចេកទេសស្នូល" },
  },
  mindset: {
    title: {
      en: "Professional Approach & Values",
      km: "វិធីសាស្ត្រការងារ និងគុណតម្លៃវិជ្ជាជីវៈ",
    },
  },
};

export const NAVIGATION_SECTIONS = [
  {
    id: "hero",
    label: { en: "Home", km: "ទំព័រដើម" },
    icon: Home,
    enabled_section: true,
    enabled_navigation: true,
  },
  {
    id: "aboutMe",
    label: { en: "About", km: "អំពីខ្ញុំ" },
    icon: User,
    enabled_section: true,
    enabled_navigation: true,
  },
  {
    id: "journey",
    label: { en: "Journey", km: "ដំណើរជីវិត" },
    icon: GraduationCap,
    enabled_section: true,
    enabled_navigation: true,
  },
  {
    id: "skills",
    label: { en: "Skills", km: "ជំនាញ" },
    icon: Code,
    enabled_section: true,
    enabled_navigation: true,
  },
  {
    id: "projects",
    label: { en: "Projects", km: "គម្រោង" },
    icon: FolderOpen,
    enabled_section: true,
    enabled_navigation: true,
  },
  {
    id: "certificates",
    label: { en: "Certificates", km: "វិញ្ញាបនបត្រ" },
    icon: Heart,
    enabled_section: false,
    enabled_navigation: true,
  },
];

export const TOP_LINKS = [
  {
    name: { en: "Home", km: "ទំព័រដើម" },
    href: ROUTES.HOME.INDEX,
    hasDropdown: false,
  },
  { name: { en: "Blog", km: "ប្លក់" }, href: "#", hasDropdown: false },
  {
    name: { en: "Contact", km: "ទំនាក់ទំនង" },
    href: ROUTES.HOME.CONTACT,
    hasDropdown: false,
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/vanneth-tak-bb8179225/",
    label: same("LinkedIn"),
    className:
      "hover:text-blue-600 hover:bg-gradient-to-br hover:from-blue-600/30",
  },
  {
    icon: Github,
    href: "https://github.com/vanneth-dev",
    label: same("GitHub"),
    className:
      "hover:text-gray-300 hover:bg-gradient-to-br hover:from-gray-700/30",
  },
  {
    icon: Facebook,
    href: "https://facebook.com",
    label: same("Facebook"),
    className:
      "hover:text-blue-500 hover:bg-gradient-to-br hover:from-blue-700/30",
  },
];

export const ABOUT_TABS = [
  {
    id: "overview",
    label: { en: "Professional Summary", km: "សេចក្តីសង្ខេប" },
    icon: User,
  },
  {
    id: "backend",
    label: { en: "Backend Architecture", km: "ការអភិវឌ្ឍផ្នែកខាងក្រោយ" },
    icon: Server,
  },
  {
    id: "techstack",
    label: { en: "Core Tech Stack", km: "បច្ចេកវិទ្យាស្នូល" },
    icon: LayoutGrid,
  },
  {
    id: "mindset",
    label: { en: "Growth & Values", km: "ការរីកចម្រើន និងគុណតម្លៃ" },
    icon: Brain,
  },
];

const backendTech = [
  {
    name: same("Node.js (Express)"),
    icon: Zap,
    color: "from-green-500 to-green-600",
    description: {
      en: "Building high-performance RESTful APIs",
      km: "កសាង RESTful API ដែលមានប្រសិទ្ធភាពខ្ពស់",
    },
  },
  {
    name: same("NestJS (Node.js)"),
    icon: Target,
    color: "from-cyan-400 to-blue-600",
    description: {
      en: "Building robust, scalable backend services",
      km: "កសាងសេវាកម្ម Backend ដ៏រឹងមាំ និងអាចពង្រីកបាន",
    },
  },
  {
    name: same("Laravel (PHP)"),
    icon: Code,
    color: "from-red-500 to-pink-500",
    description: {
      en: "Developing maintainable backend applications and services",
      km: "អភិវឌ្ឍកម្មវិធី និងសេវាកម្ម Backend ដែលងាយថែទាំ",
    },
  },
  {
    name: {
      en: "Database Design & APIs",
      km: "ការរចនាមូលដ្ឋានទិន្នន័យ និង API",
    },
    icon: Layers,
    color: "from-purple-500 to-indigo-500",
    description: {
      en: "Designing efficient databases and reliable APIs",
      km: "រចនាមូលដ្ឋានទិន្នន័យដែលមានប្រសិទ្ធភាព និង API ដែលអាចទុកចិត្តបាន",
    },
  },
];

const frontendTech = [
  {
    name: same("React.js"),
    icon: Sparkles,
    color: "from-blue-400 to-cyan-400",
    description: {
      en: "Building modern, dynamic user interfaces",
      km: "កសាងចំណុចប្រទាក់អ្នកប្រើប្រាស់ទំនើប និងឌីណាមិក",
    },
  },
  {
    name: same("TypeScript"),
    icon: Code,
    color: "from-blue-500 to-indigo-600",
    description: {
      en: "Developing type-safe, maintainable applications",
      km: "អភិវឌ្ឍកម្មវិធីដែលមានសុវត្ថិភាពប្រភេទទិន្នន័យ និងងាយថែទាំ",
    },
  },
  {
    name: same("Angular"),
    icon: Layers,
    color: "from-red-500 to-rose-600",
    description: {
      en: "Building component-based web applications",
      km: "កសាងកម្មវិធីគេហទំព័រផ្អែកលើ Component",
    },
  },
  {
    name: same("JavaScript"),
    icon: Zap,
    color: "from-yellow-400 to-amber-500",
    description: {
      en: "Creating interactive web experiences",
      km: "បង្កើតបទពិសោធន៍គេហទំព័រអន្តរកម្ម",
    },
  },
];

const devopsTech = [
  {
    name: {
      en: "Version Control & CI/CD",
      km: "ការគ្រប់គ្រងកំណែ និង CI/CD",
    },
    icon: Globe,
    color: "from-gray-500 to-gray-700",
    description: {
      en: "Managing code changes and automating deployments",
      km: "គ្រប់គ្រងការផ្លាស់ប្តូរកូដ និងដាក់ឱ្យប្រើប្រាស់ដោយស្វ័យប្រវត្តិ",
    },
  },
  {
    name: same("DigitalOcean"),
    icon: Cloud,
    color: "from-orange-500 to-amber-500",
    description: {
      en: "Configuring cloud hosting and application deployments",
      km: "កំណត់រចនាសម្ព័ន្ធ Cloud Hosting និងការដាក់ឱ្យប្រើប្រាស់កម្មវិធី",
    },
  },
];

export const TECH_STACK = {
  Backend: backendTech,
  Frontend: frontendTech,
  DevOpsCloud: devopsTech,
};

export const MINDSET_VALUES = [
  {
    name: { en: "Clean Code", km: "កូដស្អាត" },
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    description: {
      en: "Writing readable, maintainable code",
      km: "សរសេរកូដដែលងាយអាន និងងាយថែទាំ",
    },
  },
  {
    name: { en: "Results Driven", km: "ផ្តោតលើលទ្ធផល" },
    icon: Award,
    color: "from-green-500 to-emerald-500",
    description: {
      en: "Delivering practical solutions and measurable value",
      km: "ផ្តល់ដំណោះស្រាយជាក់ស្តែង និងតម្លៃដែលអាចវាស់វែងបាន",
    },
  },
  {
    name: { en: "Problem Solving", km: "ការដោះស្រាយបញ្ហា" },
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    description: {
      en: "Analyzing issues and debugging efficiently",
      km: "វិភាគបញ្ហា និងកែកំហុសប្រកបដោយប្រសិទ្ធភាព",
    },
  },
  {
    name: { en: "Continuous Learning", km: "រៀនសូត្រជាបន្តបន្ទាប់" },
    icon: Rocket,
    color: "from-red-500 to-pink-500",
    description: {
      en: "Learning new tools and applying best practices",
      km: "រៀនឧបករណ៍ថ្មីៗ និងអនុវត្តវិធីសាស្ត្រដែលល្អបំផុត",
    },
  },
];

export const EDUCATION_DATA = [
  {
    degree: {
      en: "Bachelor of Computer Science",
      km: "បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ",
    },
    institution: { en: "Tech University", km: "សាកលវិទ្យាល័យបច្ចេកវិទ្យា" },
    year: { en: "2020-2024", km: "២០២០-២០២៤" },
    location: {
      en: "San Francisco, CA",
      km: "ទីក្រុងសាន់ហ្វ្រង់ស៊ីស្កូ រដ្ឋកាលីហ្វ័រញ៉ា",
    },
    description: {
      en: "Specialized in software engineering, with a focus on web development and database systems.",
      km: "ឯកទេសផ្នែកវិស្វកម្មកម្មវិធី ដោយផ្តោតលើការអភិវឌ្ឍគេហទំព័រ និងប្រព័ន្ធមូលដ្ឋានទិន្នន័យ។",
    },
    gpa: same("3.8/4.0"),
  },
  {
    degree: {
      en: "Full Stack Web Development",
      km: "ការអភិវឌ្ឍគេហទំព័រ Full Stack",
    },
    institution: {
      en: "Coding Bootcamp",
      km: "វគ្គបណ្តុះបណ្តាលសរសេរកូដ (Coding Bootcamp)",
    },
    year: { en: "2023", km: "២០២៣" },
    location: { en: "Online", km: "អនឡាញ" },
    description: {
      en: "Intensive training in React, Node.js, databases, and modern web technologies.",
      km: "ការបណ្តុះបណ្តាលស៊ីជម្រៅលើ React, Node.js, មូលដ្ឋានទិន្នន័យ និងបច្ចេកវិទ្យាគេហទំព័រទំនើប។",
    },
    gpa: { en: "Distinction", km: "ឆ្នើម" },
  },
];

export const JOURNEY_ITEMS = [
  {
    type: "experience",
    position: { en: "Full-Stack Developer", km: "Full-Stack Developer" },
    company: same("ក្រសួងការងារ និងបណ្តុះបណ្តាលវិជ្ជាជីវៈ។"),
    period: { en: "Feb 2024 - Present", km: "កុម្ភៈ ២០២៤ - បច្ចុប្បន្ន" },
    startDate: "2024-02-01",
    endDate: "Present",
    location: { en: "Phnom Penh, Cambodia", km: "ភ្នំពេញ, កម្ពុជា" },
    description: {
      en: [
        "Built and maintained TVET MIS, TVET 1.5M, TVET RPL, and the Ministry M&E System using Express.js, Laravel, and Angular.",
        "Designed RESTful APIs and structured MongoDB and MySQL databases for reporting and data management.",
        "Fixed system bugs, implemented new features, and coordinated with ministry departments to clarify technical requirements.",
        "TVET 1.5M: កម្មវិធីបណ្តុះបណ្តាល ១.៥លាននាក់",
        "TVET Program: កម្មវិធីបណ្តុះបណ្តាលបច្ចេកទេសនិងវិជ្ជាជីវៈ",
        "TVET RPL: ប្រព័ន្ធវាយតម្លៃជំនាញមុនការងារនិងការទទួលស្គាល់ជំនាញ",
        "Ministry M&E System: ប្រព័ន្ធតាមដានត្រួតពិនិត្យនិងវាយតម្លៃ",
      ],
      km: [
        "បានកសាង និងថែទាំ TVET MIS, TVET 1.5M, TVET RPL ប្រព័ន្ធ M&E និង ប្រព័ន្ធឌីជីថលផ្សេងៗរបស់ក្រសួង ដោយប្រើ Express.js, Laravel និង Angular។",
        "បានរចនា RESTful API និងរៀបចំរចនាសម្ព័ន្ធមូលដ្ឋានទិន្នន័យ MongoDB និង MySQL សម្រាប់ការរាយការណ៍ និងការគ្រប់គ្រងទិន្នន័យ។",
        "បានកែកំហុសប្រព័ន្ធ បន្ថែមមុខងារថ្មី និងសម្របសម្រួលជាមួយនាយកដ្ឋាននានាក្រោមឱវាទក្រសួង ដើម្បីបញ្ជាក់តម្រូវការបច្ចេកទេស។",
        "TVET 1.5M: កម្មវិធីបណ្តុះបណ្តាល ១.៥លាននាក់",
        "TVET Program: កម្មវិធីបណ្តុះបណ្តាលបច្ចេកទេសនិងវិជ្ជាជីវៈ",
        "TVET RPL: ប្រព័ន្ធវាយតម្លៃជំនាញមុនការងារនិងការទទួលស្គាល់ជំនាញ",
        "Ministry M&E System: ប្រព័ន្ធតាមដានត្រួតពិនិត្យនិងវាយតម្លៃ",
      ],
    },
    skills: {
      en: [
        "Node.js (Express & NestJS)",
        "Laravel ( Full-Stack )",
        "Angular",
        "TypeScript",
        "MySQL",
        "MongoDB",
        "Version Control",
        "Cloud Computing",
        "DigitalOcean",
      ],
      km: [
        "Node.js ( Express & NestJS )",
        "Laravel ( Full-Stack )",
        "Angular",
        "TypeScript",
        "MySQL",
        "MongoDB",
        "ការគ្រប់គ្រងកំណែ",
        "ការគណនាលើពពក",
        "DigitalOcean",
      ],
    },
    achievements: {
      en: [
        "Developed and maintained TVET MIS, TVET 1.5M, TVET RPL, and the Ministry M&E System",
        "Designed RESTful APIs and organized MySQL and MongoDB data for reporting and management",
        "Fixed system bugs and delivered features based on ministry departments' requirements",
        "Collaborated with the team to automate deployments using GitHub Actions",
      ],
      km: [
        "បានអភិវឌ្ឍ និងថែទាំ TVET MIS, TVET 1.5M, TVET RPL និងប្រព័ន្ធ M&E របស់ក្រសួង",
        "បានរចនា RESTful API និងរៀបចំទិន្នន័យ MySQL និង MongoDB សម្រាប់ការរាយការណ៍ និងការគ្រប់គ្រង",
        "បានកែកំហុសប្រព័ន្ធ និងបញ្ជូនមុខងារតាមតម្រូវការរបស់នាយកដ្ឋាននានាក្រោមឱវាទក្រសួង",
        "បានសហការជាមួយក្រុមដើម្បីដាក់ឱ្យប្រើប្រាស់ដោយស្វ័យប្រវត្តិតាមរយៈ GitHub Actions",
      ],
    },
    status: "current",
    color: "from-emerald-400 to-teal-500",
    icon: Briefcase,
  },
  {
    type: "experience",
    position: same("Lecturer Assistant Intern"),
    company: same("Beltei International University"),
    period: { en: "2023 - 2024", km: "២០២៣ - ២០២៤" },
    startDate: "2023-01-01",
    endDate: "2024-12-31",
    location: { en: "Phnom Penh, Cambodia", km: "ភ្នំពេញ, កម្ពុជា" },
    description: {
      en: "Assisted instructors with classroom activities and helped students understand programming logic and syntax.",
      km: "ជួយសាស្ត្រាចារ្យក្នុងសកម្មភាពថ្នាក់រៀន និងជួយនិស្សិតឱ្យយល់ពីតក្កវិជ្ជា និងវាក្យសម្ព័ន្ធនៃការសរសេរកម្មវិធី។",
    },
    skills: {
      en: [
        "Teaching Assistance",
        "JavaScript",
        "Problem Solving",
        "Communication",
        "Teamwork",
      ],
      km: [
        "ជំនួយការបង្រៀន",
        "JavaScript",
        "ការដោះស្រាយបញ្ហា",
        "ការទំនាក់ទំនង",
        "ការធ្វើការជាក្រុម",
      ],
    },
    achievements: {
      en: [
        "Assisted teachers in classroom activities",
        "Supported students in understanding logic and code syntax",
        "Helped organize and grade assignments",
      ],
      km: [
        "ជួយគ្រូក្នុងសកម្មភាពថ្នាក់រៀន",
        "ជួយនិស្សិតឱ្យយល់ពីតក្កវិជ្ជា និងវាក្យសម្ព័ន្ធកូដ",
        "ជួយរៀបចំ និងដាក់ពិន្ទុលំហាត់",
      ],
    },
    status: "past",
    color: "from-green-400 to-lime-400",
    icon: Briefcase,
  },
  {
    type: "education",
    position: same("Bachelor's of Software Engineering"),
    company: same("Beltei International University"),
    period: {
      en: "2023 - 2026",
      km: "២០២៣ - ២០២៦",
    },
    startDate: "2023-01-01",
    endDate: "2026-06-30",
    location: {
      en: "Phnom Penh, Cambodia",
      km: "ភ្នំពេញ, កម្ពុជា",
    },
    description: {
      en: [
        "Studied Software Engineering from programming fundamentals through to building and deploying complete systems.",
        "Foundation: Programming Fundamentals, Logic & Problem Solving, Discrete Mathematics, Computer Architecture.",
        "Core: Data Structures & Algorithms, Object-Oriented Programming, Database Systems (SQL), Operating Systems, Computer Networks.",
        "Engineering: Web Development, Software Design Patterns, Software Architecture, Software Testing, Agile & Project Management.",
        "Advanced: Cloud Computing, CI/CD & DevOps, Artificial Intelligence Algorithms, and a final capstone project.",
      ],
      km: [
        "បានសិក្សាវិស្វកម្មកម្មវិធី ចាប់ពីមូលដ្ឋានគ្រឹះនៃការសរសេរកម្មវិធី រហូតដល់ការកសាង និងដាក់ឱ្យប្រើប្រាស់ប្រព័ន្ធពេញលេញ។",
        "មូលដ្ឋាន៖ ការសរសេរកម្មវិធីបឋម តក្កវិជ្ជា និងការដោះស្រាយបញ្ហា គណិតវិទ្យាដាច់ និងស្ថាបត្យកម្មកុំព្យូទ័រ។",
        "ស្នូល៖ រចនាសម្ព័ន្ធទិន្នន័យ និងក្បួនដោះស្រាយ ការសរសេរកម្មវិធីតម្រង់វត្ថុ (OOP) ប្រព័ន្ធមូលដ្ឋានទិន្នន័យ (SQL) ប្រព័ន្ធប្រតិបត្តិការ និងបណ្តាញកុំព្យូទ័រ។",
        "វិស្វកម្ម៖ ការអភិវឌ្ឍគេហទំព័រ គំរូរចនាកម្មវិធី (Design Patterns) ស្ថាបត្យកម្មកម្មវិធី ការធ្វើតេស្តកម្មវិធី និងការគ្រប់គ្រងគម្រោងបែប Agile។",
        "កម្រិតខ្ពស់៖ Cloud Computing, CI/CD និង DevOps ក្បួនដោះស្រាយបញ្ញាសិប្បនិម្មិត និងគម្រោងបញ្ចប់ការសិក្សា (Capstone)។",
      ],
    },
    skills: {
      en: [
        "Programming Fundamentals",
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Architecture",
        "Design Patterns",
        "Web Development",
        "Software Testing",
        "Cloud & CI/CD",
        "AI Algorithms",
      ],
      km: [
        "មូលដ្ឋានការសរសេរកម្មវិធី",
        "រចនាសម្ព័ន្ធទិន្នន័យ និងក្បួនដោះស្រាយ",
        "ការសរសេរកម្មវិធីតម្រង់វត្ថុ",
        "ប្រព័ន្ធមូលដ្ឋានទិន្នន័យ",
        "ប្រព័ន្ធប្រតិបត្តិការ",
        "បណ្តាញកុំព្យូទ័រ",
        "ស្ថាបត្យកម្មកម្មវិធី",
        "គំរូរចនាកម្មវិធី (Design Patterns)",
        "ការអភិវឌ្ឍគេហទំព័រ",
        "ការធ្វើតេស្តកម្មវិធី",
        "Cloud និង CI/CD",
        "ក្បួនដោះស្រាយ AI",
      ],
    },
    achievements: {
      en: [
        "Graduated in mid-2026 with a Bachelor's degree in Software Engineering",
        "Built a strong foundation in algorithms, databases, and system design",
        "Applied Python, PHP, SQL, React, and TypeScript across coursework and real projects",
        "Implemented AI-driven features and automated deployments with GitHub Actions",
      ],
      km: [
        "បានបញ្ចប់ការសិក្សានៅពាក់កណ្តាលឆ្នាំ ២០២៦ ជាមួយបរិញ្ញាបត្រវិស្វកម្មកម្មវិធី",
        "បានកសាងមូលដ្ឋានរឹងមាំផ្នែកក្បួនដោះស្រាយ មូលដ្ឋានទិន្នន័យ និងការរចនាប្រព័ន្ធ",
        "បានអនុវត្ត Python, PHP, SQL, React និង TypeScript ក្នុងមេរៀន និងគម្រោងជាក់ស្តែង",
        "បានអនុវត្តមុខងារដែលដំណើរការដោយ AI និងការដាក់ឱ្យប្រើប្រាស់ដោយស្វ័យប្រវត្តិជាមួយ GitHub Actions",
      ],
    },
    status: "past",
    color: "from-green-400 to-lime-400",
    icon: GraduationCap,
  },
  {
    type: "education",
    position: {
      en: "High School Diploma (Science Track)",
      km: "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (ផ្នែកវិទ្យាសាស្ត្រពិត)",
    },
    company: { en: "Bak Touk High School", km: "វិទ្យាល័យបាក់ទូក" },
    period: { en: "2019 - Dec 2022", km: "២០១៩ - ធ្នូ ២០២២" },
    startDate: "2019-10-01",
    endDate: "2022-12-31",
    location: { en: "Phnom Penh, Cambodia", km: "ភ្នំពេញ, កម្ពុជា" },
    description: {
      en: "Completed upper secondary education in the Science track (វិទ្យាសាស្ត្រពិត) and sat the national Grade 12 (Baccalaureate) exam in December 2022. Built a strong foundation in mathematics and the sciences before starting university.",
      km: "បានបញ្ចប់ការសិក្សាមធ្យមសិក្សាទុតិយភូមិផ្នែកវិទ្យាសាស្ត្រពិត (Science) និងបានចូលប្រឡងសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (Baccalaureate) ថ្នាក់ទី ១២ ក្នុងខែធ្នូ ឆ្នាំ ២០២២។ បានកសាងមូលដ្ឋានរឹងមាំផ្នែកគណិតវិទ្យា និងវិទ្យាសាស្ត្រ មុនចូលសាកលវិទ្យាល័យ។",
    },
    skills: {
      en: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Logical Thinking",
      ],
      km: [
        "គណិតវិទ្យា",
        "រូបវិទ្យា",
        "គីមីវិទ្យា",
        "ជីវវិទ្យា",
        "ការគិតបែបតក្កវិជ្ជា",
      ],
    },
    achievements: {
      en: [
        "Chose the Science track in Cambodia's two-track high school system",
        "Completed the national Baccalaureate (Grade 12) exam in December 2022",
        "Began university studies in Software Engineering right after graduating",
      ],
      km: [
        "បានជ្រើសរើសផ្នែកវិទ្យាសាស្ត្រពិត ក្នុងប្រព័ន្ធវិទ្យាល័យពីរផ្នែករបស់កម្ពុជា",
        "បានចូលប្រឡងសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិថ្នាក់ទី ១២ ក្នុងខែធ្នូ ឆ្នាំ ២០២២",
        "បានចាប់ផ្តើមសិក្សាផ្នែកវិស្វកម្មកម្មវិធីនៅសាកលវិទ្យាល័យ ភ្លាមបន្ទាប់ពីបញ្ចប់វិទ្យាល័យ",
      ],
    },
    status: "past",
    color: "from-sky-400 to-blue-500",
    icon: GraduationCap,
  },
];

export const SKILL_CATEGORIES = [
  {
    title: { en: "Frontend Development", km: "ការអភិវឌ្ឍផ្នែកខាងមុខ" },
    icon: Globe,
    skills: same([
      "React",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
    ]),
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: { en: "Backend Development", km: "ការអភិវឌ្ឍផ្នែកខាងក្រោយ" },
    icon: Server,
    skills: same(["Node.js ( Express & NestJS )", "Laravel ( Full-Stack )"]),
    color: "from-green-500 to-emerald-500",
  },
  {
    title: { en: "Programming Languages", km: "ភាសាសរសេរកម្មវិធី" },
    icon: Code,
    skills: same(["JavaScript", "TypeScript", "Python", "PHP"]),
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: {
      en: "Databases & Caching",
      km: "មូលដ្ឋានទិន្នន័យ និង Caching",
    },
    icon: Database,
    skills: same(["MySQL", "MongoDB", "Redis"]),
    color: "from-purple-500 to-violet-500",
  },
  {
    title: { en: "Cloud & DevOps", km: "Cloud និង DevOps" },
    icon: Cloud,
    skills: {
      en: ["Version Control", "CI/CD", "GitHub Actions", "DigitalOcean"],
      km: ["Version Control", "CI/CD", "GitHub Actions", "DigitalOcean"],
    },
    color: "from-orange-500 to-red-500",
  },
];

const PROJECT_IMAGE_PATH = "/assets/imgs/projects/";

export const PROJECTS = [
  {
    title: same("TVET Main"),
    description: same(
      "គេហទំព័រចម្បងសម្រាប់បង្ហាញ និងផ្តល់តំណភ្ជាប់ទៅកាន់ប្រព័ន្ធ TVET 1.5M និង TVET Program (MIS)។",
    ),
    technologies: ["Angular"],
    image: PROJECT_IMAGE_PATH + "tvet-main.png",
    demoLink: "https://tvet.gov.kh/",
    githubLink: "#",
  },
  {
    title: same("TVET 15M"),
    description: same(
      "ប្រព័ន្ធគ្រប់គ្រងកម្មវិធីបណ្តុះបណ្តាលជំនាញបច្ចេកទេស និងវិជ្ជាជីវៈដល់យុវជនមកពីគ្រួសារក្រីក្រ និងគ្រួសារងាយរងហានិភ័យចំនួន ១,៥លាននាក់ រួមមានគេហទំព័រសម្រាប់អ្នកប្រើប្រាស់ ប្រព័ន្ធគ្រប់គ្រងរដ្ឋបាល និង Backend API។",
    ),
    technologies: ["Node.js (Express)", "Angular", "MongoDB"],
    image: PROJECT_IMAGE_PATH + "tvet-15m.png",
    demoLink: "https://scholarship.tvet.gov.kh/",
    githubLink: "#",
  },
  {
    title: same("TVET Program"),
    description: same(
      "ប្រព័ន្ធព័ត៌មានគ្រប់គ្រងការអប់រំបណ្តុះបណ្តាលបច្ចេកទេស និងវិជ្ជាជីវៈ (TVET MIS) សម្រាប់បង្ហាញ និងគ្រប់គ្រងព័ត៌មានសាលារៀន កម្មវិធីបណ្តុះបណ្តាល និងទិន្នន័យពាក់ព័ន្ធ តាមរយៈប្រព័ន្ធ School, DGT-VET, Admin និង Backend API។",
    ),
    technologies: ["Node.js (Express)", "Angular", "MongoDB"],
    image: PROJECT_IMAGE_PATH + "tvet-program.png",
    demoLink: "https://school.tvet.gov.kh/",
    githubLink: "#",
  },
  {
    title: same("TVET RPL"),
    description: {
      en: "Competency-based assessment and qualification system for Cambodia",
      km: "ប្រព័ន្ធវាយតម្លៃផ្អែកលើសមត្ថភាព និងការផ្តល់គុណវុឌ្ឍិសម្រាប់កម្ពុជា",
    },
    technologies: ["Node.js (Express)", "Angular", "MongoDB"],
    image: PROJECT_IMAGE_PATH + "tvet-rpl.png",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: {
      en: "Job Seeker & Job Provider",
      km: "អ្នកស្វែងរកការងារ និងអ្នកផ្តល់ការងារ",
    },
    description: {
      en: "Job search platform and labour recruitment system",
      km: "ប្រព័ន្ធស្វែងរកការងារ និងប្រព័ន្ធជ្រើសរើសកម្លាំងពលកម្ម",
    },
    technologies: ["Laravel (PHP)", "MySQL"],
    image: PROJECT_IMAGE_PATH + "onsite.png",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: { en: "Freelance Project", km: "គម្រោងឯករាជ្យ (Freelance)" },
    description: {
      en: "KRT388FUN Admin Dashboard",
      km: "ផ្ទាំងគ្រប់គ្រង KRT388FUN",
    },
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

export const CERTIFICATES = [
  {
    title: {
      en: "AWS Certified Solutions Architect",
      km: "អ្នកស្ថាបត្យករដំណោះស្រាយដែលមានវិញ្ញាបនបត្រ AWS",
    },
    issuer: same("Amazon Web Services"),
    date: { en: "2024", km: "២០២៤" },
    credentialId: "AWS-SA-2024-001",
    verifyLink: "#",
  },
  {
    title: {
      en: "React Developer Certification",
      km: "វិញ្ញាបនបត្រអ្នកអភិវឌ្ឍ React",
    },
    issuer: same("Meta"),
    date: { en: "2023", km: "២០២៣" },
    credentialId: "META-REACT-2023-002",
    verifyLink: "#",
  },
  {
    title: {
      en: "Full Stack Web Development",
      km: "ការអភិវឌ្ឍគេហទំព័រ Full Stack",
    },
    issuer: same("freeCodeCamp"),
    date: { en: "2023", km: "២០២៣" },
    credentialId: "FCC-FSWD-2023-003",
    verifyLink: "#",
  },
  {
    title: {
      en: "Google Analytics Certified",
      km: "វិញ្ញាបនបត្រ Google Analytics",
    },
    issuer: same("Google"),
    date: { en: "2022", km: "២០២២" },
    credentialId: "GA-CERT-2022-004",
    verifyLink: "#",
  },
];
