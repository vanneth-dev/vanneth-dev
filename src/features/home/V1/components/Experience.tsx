import { Calendar, Award, MapPin, ClipboardList } from "lucide-react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();
  const experience = [
    {
      degree: "Full-Stack Developer",
      institution: "Ministry of Labour and Vocational Training.",
      location: "Phnom Penh, Cambodia",
      period: "2024 - Present",
      description:
        "Full-Stack Developer at Digital Technical Team Of Ministry of Labour and Vocational Training, Phnom Penh, Cambodia.",
      courses: ["ASEAN IT Software Solutions"],
    },
    {
      degree: "Assistant Lecturer, Internship",
      institution: "Beltei International University",
      location: "Phnom Penh, Cambodia",
      period: "2023 - 2024",
      description:
        "Assistant Lecturer, Internship at Beltei International University, Phnom Penh, Cambodia.",
      achievements: [],
      courses: [],
    },
  ];

  return (
    <div className="pt-10" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        {t("experience.title")}
      </h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div
              key={exp.period}
              className={`relative flex items-start ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              data-aos={
                window.innerWidth < 768
                  ? "fade-up"
                  : index % 2 === 0
                    ? "fade-right"
                    : "fade-left"
              }
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center">
                <CheckIcon className="w-3 h-3 text-white text-bold" />
              </div>
              {/* Content */}
              <div
                className={`ml-6 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <ClipboardList className="h-5 md:h-7 w-5 md:w-7 text-blue-600 mr-2" />
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {exp.degree}
                    </h3>
                  </div>
                  {exp.institution && (
                    <div className="flex items-center mb-2">
                      <Award className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mr-2" />
                      <span className="text-sm md:text-lg">
                        {exp.institution}
                      </span>
                    </div>
                  )}
                  {exp.location && (
                    <div className="flex items-center mb-2">
                      <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mr-2" />
                      <span className="text-sm md:text-lg">{exp.location}</span>
                    </div>
                  )}
                  {exp.period && (
                    <div className="flex items-center mb-4">
                      <Calendar className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mr-2" />
                      <span className="text-sm md:text-lg">{exp.period}</span>
                    </div>
                  )}
                  {exp.description && (
                    <p className="text-gray-600 mb-4 text-sm md:text-lg">
                      {exp.description}
                    </p>
                  )}
                  <div className="space-y-4">
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Key Achievements
                        </h4>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                              <p className="text-gray-600">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {exp.courses && exp.courses.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-lg md:text-xl">
                          Notable Courses
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.courses.map((course, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
