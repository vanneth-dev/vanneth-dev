import { useTranslation } from "react-i18next";
import {
  Code,
  Globe,
  Database,
  Cloud,
  Cpu,
  Briefcase,
  Users,
  Award,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { getProgressColor } from "src/shared/utils/constant";
export default function AboutMe() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("journey");
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const skillsInitialized = useRef(false);

  const tabs = [
    {
      id: "journey",
      label: "Journey",
      icon: <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />,
    },
    {
      id: "skills",
      label: "Skills",
      icon: <Award className="h-4 w-4 sm:h-5 sm:w-5" />,
    },
    {
      id: "interests",
      label: "Interests",
      icon: <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />,
    },
  ];
  const journeyContent = {
    title: "Professional Journey",
    description:
      "I'm a passionate Full-Stack Developer with a strong foundation in frontend and backend technologies, driven by a curiosity about how digital products work.",
    experience: [
      {
        title: "Full-Stack Developer (Mid-Level)",
        date: "2024 - Present",
        description:
          "Leading development of scalable web applications with modern frameworks",
      },
      {
        title: "Assistant Lecturer, Internship",
        date: "2023 - 2024",
        description:
          "Assistant Lecturer, Internship at Beltei International University, Phnom Penh, Cambodia.",
      },
    ],
    stats: [
      {
        icon: <Users className="h-4 w-4 sm:h-6 sm:w-6" />,
        title: "3+",
        description: "Team Projects",
      },
      {
        icon: <Award className="h-4 w-4 sm:h-6 sm:w-6" />,
        title: "2+",
        description: "Years Experience",
      },
      {
        icon: <Briefcase className="h-4 w-4 sm:h-6 sm:w-6" />,
        title: "10+",
        description: "Projects",
      },
      {
        icon: <BookOpen className="h-4 w-4 sm:h-6 sm:w-6" />,
        title: "∞",
        description: "Curiosity",
      },
    ],
  };
  const skillsContent = [
    {
      category: "Backend Development",
      level: 80,
      description: "Full Feature Web Framework",
    },
    {
      category: "Frontend Development",
      level: 80,
      description:
        "Framework for building user interfaces, handling state, and optimizing performance",
    },
    {
      category: "Database Management",
      level: 75,
      description: "Complex queries, optimization, and data modeling",
    },
    {
      category: "Cloud Infrastructure",
      level: 60,
      description: "Digital Ocean",
    },
    {
      category: "DevOps & Tools",
      level: 50,
      description: "GitLab, CI/CD",
    },
  ];
  const Technologies = [
    {
      icon: (
        <Code className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-2 sm:mr-3" />
      ),
      name: "Full-Stack",
      description: "React, NestJs, Laravel",
    },
    {
      icon: (
        <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-2 sm:mr-3" />
      ),
      name: "Frontend",
      description: "HTML5, CSS3, JavaScript",
    },
    {
      icon: (
        <Database className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-2 sm:mr-3" />
      ),
      name: "Databases",
      description: "MySql, PostgreSQL",
    },
    {
      icon: (
        <Cloud className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-2 sm:mr-3" />
      ),
      name: "Cloud",
      description: "Digital Ocean",
    },
    {
      icon: (
        <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-2 sm:mr-3" />
      ),
      name: "DevOps",
      description: "GitLab, CI/CD",
    },
  ];
  const interestsContent = [
    {
      icon: <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />,
      title: "Continuous Learning",
      description:
        "I believe in lifelong learning and regularly explore new technologies and frameworks to stay at the forefront of web development.",
    },
    {
      icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />,
      title: "Open Source",
      description:
        "I actively contribute to open source projects and believe in the power of community-driven development to create better software.",
    },
    {
      icon: <Award className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />,
      title: "Problem Solving",
      description:
        "I enjoy tackling complex challenges and finding elegant solutions through creative thinking and systematic approaches.",
    },
  ];
  useEffect(() => {
    if (activeTab === "skills" && !skillsInitialized.current) {
      setSkillsAnimated(false);
      setTimeout(() => {
        setSkillsAnimated(true);
        skillsInitialized.current = true;
      }, 100);
    }
  }, [activeTab]);

  return (
    <div className="py-8 sm:py-16" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
          {t("aboutMe.title")}
        </h2>

        {/* Tabs - Mobile Optimized */}
        <div className="flex justify-center mb-6 sm:mb-8 pt-4 sm:pt-6 overflow-x-auto">
          <div className="inline-flex p-1 bg-gray-100 rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex items-center px-2 sm:px-4 py-2 rounded-sm text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span
                  className={`mr-1 sm:mr-2 ${activeTab === tab.id ? "text-blue-600" : "text-gray-400"}`}
                >
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="rounded-sm overflow-hidden">
          {activeTab === "journey" && (
            <div className="p-4 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    {journeyContent.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    {journeyContent.description}
                  </p>

                  <div className="space-y-4 sm:space-y-6">
                    {journeyContent.experience.map((experience, index) => (
                      <div
                        key={index}
                        className="relative pl-6 sm:pl-8 border-l-2 border-blue-100 pb-4 sm:pb-6"
                      >
                        <div className="absolute -left-[0.4rem] md:-left-[0.5rem] top-0 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-blue-600"></div>
                        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                          {experience.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
                          {experience.date}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {experience.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center mt-4 sm:mt-0">
                  <div className="grid grid-cols-2 gap-3 sm:gap-6 w-full">
                    {journeyContent.stats.map((stat, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-xl p-3 sm:p-6 text-center hover:shadow-md transition-all duration-300 hover:bg-blue-50 hover:-translate-y-1"
                      >
                        <div className="mx-auto bg-blue-100 text-blue-600 h-8 w-8 sm:h-12 sm:w-12 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                          {stat.icon}
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-0 sm:mb-1 text-sm sm:text-base">
                          {stat.title}
                        </h4>
                        <p className="text-gray-500 text-xs sm:text-sm">
                          {stat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="p-4 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Technical Skills
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    {skillsContent.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1 sm:mb-2">
                          <span className="text-gray-700 font-medium text-sm sm:text-base">
                            {skill.category}
                          </span>
                          <span className="text-blue-600 font-medium text-sm sm:text-base">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className={`h-2 rounded-full transition-all duration-1000 ease-out bg-${getProgressColor(skill.level)}`}
                            style={{
                              width: skillsAnimated ? `${skill.level}%` : "0%",
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 sm:mt-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Core Technologies
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {Technologies.map((tech, index) => (
                      <div
                        key={index}
                        className={`flex items-center p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 ${skillsAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        {tech.icon}
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm sm:text-base">
                            {tech.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-500">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "interests" && (
            <div className="p-4 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Personal Interests
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {interestsContent.map((interest, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 sm:p-6 rounded-xl hover:shadow-md transition-all duration-300 hover:bg-blue-50"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                      <span className="bg-blue-100 p-1 sm:p-2 rounded-lg mr-2 sm:mr-3">
                        {interest.icon}
                      </span>
                      {interest.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {interest.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 text-sm sm:text-base"
                >
                  Get in touch
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
