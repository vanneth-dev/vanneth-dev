import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import * as icon from "lucide-react";
import { getProgressColor } from "src/shared/utils/constant";

const skills = [
  {
    category: "Backend Development",
    icon: <icon.Database className="h-8 w-8 text-emerald-500" />,
    items: [
      {
        name: "Laravel",
        level: 80,
        description: "Full Feature Web Framework",
      },
      {
        name: "Node.js (Nest)",
        level: 70,
        description:
          "RESTful APIs Framework, authentication, and database integration",
      },
      {
        name: "Database Management",
        level: 70,
        description: "Complex queries, optimization, and data modeling",
      },
    ],
  },
  {
    category: "Frontend Development",
    icon: <icon.Layout className="h-8 w-8 text-purple-600" />,
    items: [
      {
        name: "React",
        level: 80,
        description:
          "Framework for building user interfaces, handling state, and optimizing performance",
      },
      {
        name: "Bootstrap & Tailwind CSS",
        level: 80,
        description:
          "CSS library for responsive design, custom themes, and component styling",
      },
      {
        name: "TypeScript",
        level: 70,
        description:
          "Statically typed, interfaces, and advanced TypeScript features",
      },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <icon.Cloud className="h-8 w-8 text-blue-500" />,
    items: [
      {
        name: "GitLab",
        level: 80,
        description: "Version control, branching strategies, and collaboration",
      },
      {
        name: "Digital Ocean (Ubuntu)",
        level: 70,
        description: "Cloud infrastructure, virtual machines (Ubuntu)",
      },
      {
        name: "GitLab CI/CD",
        level: 60,
        description:
          "Continuous integration and continuous deployment (CI/CD) pipelines",
      },
    ],
  },
];

export default function TechnicalSkills() {
  const [visibleSkills, setVisibleSkills] = useState<number[][]>(
    skills.map((category) => category.items.map(() => 0)),
  );
  const { t } = useTranslation();
  return (
    <div className="py-6" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        {t("technicalSkills")}
      </h2>
      <div className="space-y-12">
        {skills.map((category, categoryIndex) => (
          <div
            key={category.category}
            className="bg-white rounded-sm shadow-sm p-8"
            data-aos="fade-up"
            data-aos-delay={categoryIndex * 100}
          >
            <div className="flex items-center space-x-3 mb-6">
              {category.icon}
              <h3 className="text-2xl font-semibold text-gray-900">
                {category.category}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {category.items.map((skill, index) => {
                const [ref, inView] = useInView({
                  triggerOnce: true,
                  threshold: 0.3,
                });

                useEffect(() => {
                  if (inView) {
                    const delay = index * 300; // mimic data-aos-delay
                    const timeout = setTimeout(() => {
                      setVisibleSkills((prev) => {
                        const newLevels = [...prev];
                        newLevels[categoryIndex] = [
                          ...newLevels[categoryIndex],
                        ];
                        newLevels[categoryIndex][index] = skill.level;
                        return newLevels;
                      });
                    }, delay);

                    return () => clearTimeout(timeout);
                  }
                }, [inView]);

                return (
                  <div
                    key={skill.name}
                    ref={ref}
                    className="bg-gray-50 p-6 rounded-lg transition-transform duration-500 ease-out transform"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900">
                        {skill.name}
                      </span>
                      <span className={`text-${getProgressColor(skill.level)}`}>
                        {visibleSkills[categoryIndex]?.[index] ?? 0}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div
                        className={`bg-${getProgressColor(skill.level)} h-2 rounded-full transition-all duration-1000`}
                        style={{
                          width: `${
                            visibleSkills[categoryIndex]?.[index] ?? 0
                          }%`,
                        }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
