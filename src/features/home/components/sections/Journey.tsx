import { useState } from "react";
import {
  Calendar,
  MapPin,
  Code,
  CheckCircle,
  Star,
  Sparkles,
  TrendingUp,
  Users,
  Globe,
} from "lucide-react";
import { JOURNEY_ITEMS } from "../../constants";

export function JourneySection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getTypeLabel = (type: string) => {
    return type === "experience" ? "Experience" : "Education";
  };

  return (
    <div className="relative min-h-screen">
      <section className="py-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-0">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 mb-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                My Journey
              </h2>
              <Sparkles className="w-5 h-5 text-pink-400" />
            </div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-purple-400/30 via-pink-400/30 to-blue-400/30 transform -translate-x-0.5"></div>

            <div className="space-y-2">
              {JOURNEY_ITEMS.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className="group relative"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="hidden md:block absolute left-1/2 top-6 transform -translate-x-1.5">
                      <div
                        className={`relative w-3 h-3 bg-gradient-to-r ${item.color} rounded-full shadow-lg group-hover:scale-125 transition-all duration-300`}
                      >
                        {item.status === "current" && (
                          <div className="absolute -inset-1 bg-emerald-400/50 rounded-full"></div>
                        )}
                      </div>
                    </div>

                    <div
                      className={`md:w-[48%] ${isLeft ? "md:pr-3" : "md:pl-3 md:ml-auto"}`}
                    >
                      <div
                        className={`relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-5 hover:bg-black/30 hover:border-purple-400/30 transition-all duration-300 ${
                          hoveredCard === index
                            ? isLeft
                              ? "md:transform md:-translate-x-2"
                              : "md:transform md:translate-x-2"
                            : ""
                        }`}
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              {/* <div
                                className={`w-5 h-5 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center`}
                              >
                                <item.icon className="w-3 h-3 text-white" />
                              </div> */}
                              <span className="text-xs text-purple-300 uppercase tracking-wide">
                                {(() => {
                                  if (item.endDate === "Present") {
                                    const start = new Date(item.startDate);
                                    const now = new Date();
                                    const diffYears =
                                      (now.getTime() - start.getTime()) /
                                      (1000 * 60 * 60 * 24 * 365.25);
                                    return `${Math.floor(diffYears)}+ Years`;
                                  }
                                  return item.period;
                                })()}{" "}
                                {getTypeLabel(item.type)}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">
                              {item.position}
                            </h3>
                            <p className="text-purple-400 text-sm">
                              {item.company}
                            </p>
                          </div>

                          {item.status === "current" && (
                            <div className="mt-2 md:mt-0 px-2 py-1 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-xs text-emerald-300">
                              Current
                            </div>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-4 mb-3 text-xs text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{item.location}</span>
                          </div>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed mb-4 border-l-2 border-purple-500/30 pl-3">
                          {/* {item.description} */}
                          {Array.isArray(item.description) ? (
                            <ul className="list-disc space-y-2 pl-5 text-gray-200">
                              {item.description.map((line, i) => (
                                <li key={i}>{line}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-200">{item.description}</p>
                          )}
                        </p>
                        <div className="mb-4">
                          <h4 className="text-white text-sm font-medium mb-2 flex items-center">
                            <Code className="w-3 h-3 text-purple-400 mr-1" />
                            Skills
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {item.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-2 py-1 bg-purple-500/20 border border-purple-400/30 rounded text-purple-300 text-xs hover:bg-purple-500/30 transition-all duration-200"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white text-sm font-medium mb-2 flex items-center">
                            <Star className="w-3 h-3 text-yellow-400 mr-1" />
                            Achievements
                          </h4>
                          <div className="space-y-1">
                            {item.achievements.map((achievement, achIndex) => (
                              <div
                                key={achIndex}
                                className="flex items-start space-x-2"
                              >
                                <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-xs">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-6 text-center">
            <div className="flex items-center space-x-1 text-xs">
              <TrendingUp className="w-3 h-3 text-green-400" />
              <span className="text-green-400">Growth</span>
            </div>
            <div className="w-px h-4 bg-purple-400/20"></div>
            <div className="flex items-center space-x-1 text-xs">
              <Users className="w-3 h-3 text-blue-400" />
              <span className="text-blue-400">Leadership</span>
            </div>
            <div className="w-px h-4 bg-purple-400/20"></div>
            <div className="flex items-center space-x-1 text-xs">
              <Globe className="w-3 h-3 text-purple-400" />
              <span className="text-purple-400">Global</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
