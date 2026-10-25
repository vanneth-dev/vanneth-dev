import { Cpu, Layers, Star } from "lucide-react";
import { useState } from "react";
import {
  ABOUT_TABS,
  EXPERIENCE_YEARS,
  MINDSET_VALUES,
  SECTION_STRINGS,
  TECH_STACK,
} from "../../constants";
import { TechItem } from "../../types";

export function AboutMeSection() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-0">
            <h2 className="relative text-5xl font-extrabold leading-[1.4] py-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
              {SECTION_STRINGS.title}
            </h2>
          </div>
          <div className="w-40 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-4"></div>
          {/* <p className="text-gray-300 mt-6 text-xl max-w-3xl mx-auto">
            {SECTION_STRINGS.subtitle}
          </p> */}
        </div>

        <div className="flex justify-center mb-16">
          <div className="bg-gray-800/60 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-2 shadow-2xl">
            <div className="flex space-x-2">
              {ABOUT_TABS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`group relative px-8 py-3 min-w-[270px] justify-center rounded-xl transition-all duration-300 flex items-center space-x-3 text-sm font-medium ${
                    activeTab === id
                      ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50"
                      : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-all duration-300 flex-shrink-0 ${
                      activeTab === id
                        ? "text-white "
                        : "group-hover:text-purple-300"
                    }`}
                  />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 items-center">
          <div
            className="relative group flex justify-center"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="w-90 h-90 relative">
              <div
                className={`absolute inset-0 rounded-full transition-all duration-700 ${isHovering ? "p-1.5 shadow-3xl shadow-purple-500/70" : "p-1 shadow-xl shadow-purple-500/40"}`}
                style={{
                  background:
                    "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
                }}
              >
                <div className="w-full h-full rounded-full bg-gray-900/95 flex items-center justify-center relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover rounded-full transition-all duration-700 opacity-90 group-hover:opacity-100"
                    src="/assets/icon/me.jpg"
                    alt="Professional Profile"
                  />
                </div>
              </div>

              <div
                className={`absolute -top-10 -right-10 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-sm transition-transform duration-1000 ${isHovering ? "scale-100 rotate-12" : "scale-75 -rotate-12"}`}
                style={{ animation: "float 4s ease-in-out infinite" }}
              ></div>
              <div
                className={`absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-sm transition-transform duration-1000 ${isHovering ? "scale-100 -rotate-12" : "scale-75 rotate-12"}`}
                style={{ animation: "float 5s ease-in-out infinite reverse" }}
              ></div>
            </div>
          </div>

          <div>
            <div className="space-y-8">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {SECTION_STRINGS.overview.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-purple-500 pl-4 py-2 bg-gray-800/30 rounded-lg">
                    {SECTION_STRINGS.overview.highlightText(EXPERIENCE_YEARS)}
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {SECTION_STRINGS.overview.bodyText}
                  </p>
                </div>
              )}

              {activeTab === "backend" && (
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                    {SECTION_STRINGS.backend.title}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 bg-gray-800/40 p-4 rounded-xl border border-pink-500/30">
                      <Cpu className="w-8 h-8 text-pink-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold text-xl">
                          {SECTION_STRINGS.backend.apiService.heading}
                        </h4>
                        <p className="text-gray-400 mt-1">
                          {SECTION_STRINGS.backend.apiService.body}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 bg-gray-800/40 p-4 rounded-xl border border-blue-500/30">
                      <Layers className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold text-xl">
                          {SECTION_STRINGS.backend.database.heading}
                        </h4>
                        <p className="text-gray-400 mt-1">
                          {SECTION_STRINGS.backend.database.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "techstack" && (
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    {SECTION_STRINGS.techStack.title}
                  </h3>
                  {Object.entries(TECH_STACK).map(([category, skills]) => (
                    <div key={category} className="space-y-4">
                      <h4 className="text-xl font-semibold text-gray-200 border-b border-gray-700 pb-2 flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        {category}
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {skills.map((skill: TechItem) => (
                          <div
                            key={skill.name}
                            className="group bg-gray-800/40 backdrop-blur-md rounded-xl p-4 transition-all duration-300 hover:bg-gray-700/60 hover:shadow-lg"
                          >
                            <div className="flex items-center space-x-3 mb-2">
                              <div
                                className={`w-10 h-10 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center shadow-md flex-shrink-0`}
                              >
                                <skill.icon className="w-5 h-5 text-white" />
                              </div>
                              <h5 className="text-white font-semibold text-base">
                                {skill.name}
                              </h5>
                            </div>
                            <p className="text-gray-400 text-sm leading-snug">
                              {skill.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "mindset" && (
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {SECTION_STRINGS.mindset.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {MINDSET_VALUES.map((value) => (
                      <div
                        key={value.name}
                        className="group bg-gray-800/40 backdrop-blur-md rounded-xl p-5 border border-purple-500/20 transition-all duration-300 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20"
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-all duration-300`}
                        >
                          <value.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-white font-semibold text-center mb-1">
                          {value.name}
                        </h4>
                        <p className="text-gray-400 text-xs text-center">
                          {value.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
