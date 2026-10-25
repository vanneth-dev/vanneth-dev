import { GraduationCap, Clock, Building, BookOpen } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function EducationTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  const education = [
    {
      degree: "Bachelor of Software Engineering",
      school: "Beltei International University",
      location: "Phnom Penh, Cambodia",
      link: "https://www.facebook.com/belteiuniversity",
      period: "2022 - Present",
      description:
        "Currently pursuing a Bachelor's degree in Software Engineering, focusing on software development, algorithms, and data structures.",
      courses: [
        "Data Structures",
        "Algorithms",
        "Software Engineering",
        "Database Systems",
      ],
    },
    {
      degree: "Short Course of IT Software Solutions",
      school: "Ministry of Labour and Vocational Training",
      location: "Phnom Penh, Cambodia",
      link: "#",
      period: "2025 (6 months)",
      description:
        "Short Course of IT Software Solutions, focusing on software development, algorithms, and data structures.",
      courses: [
        "Data Structures",
        "Algorithms",
        "Software Engineering",
        "Database Systems",
      ],
    },
    {
      degree: "Short Course of IOS Application Development",
      school: "ADITI Academy",
      location: "Phnom Penh, Cambodia",
      link: "https://www.facebook.com/belteiuniversity",
      period: "2024 (6 months)",
      description:
        "Short Course of ios development, focusing on storyboard, animation, and user interface design.",
      courses: ["Storyboard", "Animation", "User Interface Design"],
    },
    {
      degree: "Short Course of Web Application Development",
      school: "ADITI Academy",
      location: "Phnom Penh, Cambodia",
      link: "https://www.facebook.com/belteiuniversity",
      period: "2023 (3 months)",
      description:
        "Short Course of web development, focusing on Full Stack Development, Database Management, and Web Design.",
      courses: ["Full Stack Development", "Database Management", "Web Design"],
    },
    {
      degree: "High School Baccalaureate II (Grade 12 National Examination)",
      school: "BakTouk High School",
      location: "Phnom Penh, Cambodia",
      link: "#",
      period: "2022",
      description: "Graduated with honors, focusing on mathematics.",
      courses: ["Advanced Mathematics", "Physics", "English Literature"],
    },
  ];

  return (
    <section className="my-8 px-1 w-full mx-auto" data-aos="fade-up">
      <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
        <GraduationCap className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
        <h2 className="text-2xl md:text-3xl font-bold">
          {t("education.title")}
        </h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-2 top-0 bottom-0 w-0.5 bg-blue-200"></div>

        {/* Education items */}
        <div className="space-y-8 md:space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`relative pl-6 md:pl-12 ${activeIndex === index ? "opacity-100" : "opacity-80"}`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-[-0.4rem] md:left-[-0.1rem] top-2 w-4 md:w-5 h-4 md:h-5 rounded-full border-4 transition-all duration-300 ${activeIndex === index ? "bg-blue-600 border-blue-200" : "bg-white border-blue-300"}`}
              ></div>

              {/* Content card */}
              <div
                className={`bg-white rounded-sm shadow-lg p-4 md:p-6 transition-all duration-300 ${activeIndex === index ? "border-l-4 border-blue-500" : ""}`}
                // data-aos={window.innerWidth < 768 ? "fade-up" : index % 2 === 0 ? "fade-left" : "fade-left"}
              >
                <div className="flex justify-between items-start flex-wrap gap-2 mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">
                    {edu.degree}
                  </h3>
                  <span className="flex items-center gap-1 text-gray-500 bg-gray-100 px-2 py-1 md:px-3 rounded-full text-sm">
                    <Clock className="h-3 w-3 md:h-4 md:w-4" />
                    {edu.period}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-3 md:mb-4 text-blue-600">
                  <Link
                    to={edu.link}
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <Building className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                    <span className="font-medium text-sm md:text-base">
                      {edu.school}
                    </span>
                  </Link>
                </div>
                <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                  {edu.description}
                </p>

                {activeIndex === index && (
                  <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 mb-2 text-gray-700">
                      <BookOpen className="h-3 w-3 md:h-4 md:w-4" />
                      <span className="font-medium text-sm md:text-base">
                        Key Courses
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span
                          key={i}
                          className="bg-blue-50 text-blue-600 px-2 py-1 md:px-3 rounded-full text-xs md:text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
