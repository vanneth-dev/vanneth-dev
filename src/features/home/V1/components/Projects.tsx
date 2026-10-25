import { Github, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A Personal Portfolio Website built with React, Tailwind CSS, Material UI, TypeScript, Node.js, and PostgreSQL.",
    image:
      import.meta.env.VITE_NODE_PUBLIC_URL + "/assets/imgs/vannethtak.xyz.jpeg",
    technologies: [
      "React",
      "Tailwind CSS",
      "Material UI",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
    ],
    link: "https://vannethtak.xyz",
    github: "#",
  },
  {
    title: "ប្រព័ន្ធតាមដាន ត្រួតពិនិត្យ និងវាយតម្លៃ (M&E)",
    description:
      "A full-stack Task Management System for the Ministry of Labour and Vocational Training, Cambodia.",
    image:
      import.meta.env.VITE_NODE_PUBLIC_URL + "/assets/imgs/me.mlvt.gov.kh.jpeg",
    technologies: ["Laravel", "Bootstrap", "MySQL"],
    link: "https://me.mlvt.gov.kh",
  },
  {
    title: "ប្រព័ន្ធគ្រប់គ្រងព្រឹត្តិការណ៍",
    description:
      "A full-stack Events Management System for the Ministry of Labour and Vocational Training, Cambodia.",
    image:
      import.meta.env.VITE_NODE_PUBLIC_URL +
      "/assets/imgs/events.mlvt.gov.kh.jpeg",
    technologies: ["Laravel", "Bootstrap", "MySQL", "Telegram Bot"],
    link: "https://events.mlvt.gov.kh",
  },
];
export default function Projects() {
  const { t } = useTranslation();
  return (
    <div className="py-0" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        {t("projects.title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="relative h-48 group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                <a
                  href={project.link}
                  className="bg-white text-gray-900 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Globe className="h-6 w-6" />
                </a>
                <a
                  href={project.github}
                  className="bg-white text-gray-900 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
