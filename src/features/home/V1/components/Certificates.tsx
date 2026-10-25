import { useState, useEffect } from "react";
import { Award, X, ExternalLink, Eye } from "lucide-react";

const Certificates = () => {
  const [expandedCert, setExpandedCert] = useState<number | null>(null);

  type Certificate = {
    id: number;
    title: string;
    issuer: string;
    date: string;
    credentialId: string;
    image: string;
    skills: string[];
  };

  const [fullImageView, setFullImageView] = useState<Certificate | null>(null);

  const certificates = [
    {
      id: 1,
      title: "Programming with JavaScript",
      issuer: "Meta",
      date: "May 2023",
      credentialId: "REACT-2023-05421",
      image:
        "https://vannethtak.github.io/assets/img/certificate/Coursera_JavaScript.png",
      skills: ["JavaScript", "ES6", "Web Development", "Programming Logic"],
    },
    {
      id: 2,
      title: "Introduction to Front-End Development",
      issuer: "Meta",
      date: "May 2023",
      credentialId: "REACT-2023-05422",
      image:
        "https://vannethtak.github.io/assets/img/certificate/Coursera_Front-End.png",
      skills: ["HTML5", "CSS3", "Responsive Design", "UI Principles"],
    },
    {
      id: 3,
      title: "Version Control",
      issuer: "Meta",
      date: "May 2023",
      credentialId: "REACT-2023-05423",
      image:
        "https://vannethtak.github.io/assets/img/certificate/Coursera_version_control.png",
      skills: ["Git", "GitHub", "Branching", "Collaborative Development"],
    },
  ];

  const toggleExpand = (certId: number) => {
    setExpandedCert(expandedCert === certId ? null : certId);
  };

  const openFullImage = (cert: Certificate, e: React.MouseEvent) => {
    e.stopPropagation();
    setFullImageView(cert);
    document.body.style.overflow = "hidden";
  };

  const closeFullImage = () => {
    setFullImageView(null);
    document.body.style.overflow = "";
  };

  // Handle escape key press to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeFullImage();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    // bg-gradient-to-b from-white to-gray-50
    <section className="py-0 px-4 " data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-3">
            My Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Professional Certifications
          </h2>
          <div
            className="w-16 h-1 bg-blue-500 mx-auto mb-6"
            data-aos="zoom-in"
            data-aos-delay="300"
          ></div>
          <p className="text-gray-600 max-w-lg mx-auto">
            Professional credentials that showcase my technical expertise and
            continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 transform"
              data-aos="fade-up"
              data-aos-delay={100 * index}
              data-aos-duration="800"
              data-aos-offset="100"
            >
              <div className="relative">
                <div className="h-58 overflow-hidden bg-gray-100">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm backdrop-filter">
                    <button
                      onClick={(e) => openFullImage(cert, e)}
                      className="bg-white text-blue-600 rounded-full p-3 transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label="View certificate"
                      data-aos="zoom-in"
                      data-aos-anchor-placement="center-bottom"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div
                  className="absolute top-3 left-3 bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium flex items-center shadow-sm"
                  data-aos="fade-right"
                  data-aos-delay={150 * index}
                >
                  <Award className="h-3 w-3 mr-1" />
                  {cert.issuer}
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                    {cert.title}
                  </h3>
                  <span className="text-xs text-gray-500 whitespace-nowrap ml-2 bg-gray-50 px-2 py-1 rounded">
                    {cert.date}
                  </span>
                </div>

                <div
                  className="flex flex-wrap gap-1 mb-4"
                  data-aos="fade-up"
                  data-aos-delay={200 * index}
                  data-aos-anchor-placement="top-bottom"
                >
                  {cert.skills.slice(0, 2).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 2 && (
                    <span
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs cursor-pointer hover:bg-gray-200 transition-colors"
                      onClick={() => toggleExpand(cert.id)}
                    >
                      +{cert.skills.length - 2}
                    </span>
                  )}
                </div>

                <div
                  className={`mb-4 transition-all duration-500 ${expandedCert === cert.id ? "max-h-24 opacity-100" : "max-h-0 opacity-0 hidden"}`}
                >
                  <div
                    className="flex flex-wrap gap-1 pt-1"
                    data-aos="fade-down"
                  >
                    {cert.skills.slice(2).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <div className="text-gray-500 text-xs">
                    ID: {cert.credentialId.substring(0, 10)}...
                  </div>
                  <button
                    onClick={(e) => openFullImage(cert, e)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center group transition-colors"
                    data-aos="fade-left"
                    data-aos-delay={250 * index}
                    data-aos-anchor-placement="top-bottom"
                  >
                    View
                    <ExternalLink className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Image Modal - Mobile Friendly with animation */}
      {fullImageView && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-3 sm:p-6 backdrop-blur-sm"
          onClick={closeFullImage}
          data-aos="fade"
          data-aos-duration="300"
        >
          <div
            className="relative w-full max-w-lg sm:max-w-xl md:max-w-3xl bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
            data-aos-duration="400"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 pr-8">
                {fullImageView.title}
              </h3>
              <button
                className="text-gray-500 hover:text-gray-700 transition-colors"
                onClick={closeFullImage}
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto">
              <img
                src={fullImageView.image}
                alt={fullImageView.title}
                className="w-full object-contain rounded-lg"
                data-aos="fade-up"
                data-aos-duration="600"
              />

              <div className="p-4 sm:p-6">
                <div
                  className="flex flex-wrap items-center gap-3 mb-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="flex items-center">
                    <Award className="h-4 w-4 text-blue-600 mr-1" />
                    <span className="text-blue-600 font-medium text-sm">
                      {fullImageView.issuer}
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm">•</span>
                  <span className="text-gray-500 text-sm">
                    {fullImageView.date}
                  </span>
                </div>

                <div className="mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    Skills
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {fullImageView.skills.map((skill, idx) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                        data-aos="zoom-in"
                        data-aos-delay={350 + idx * 50}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="pt-4 border-t border-gray-200"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Credential ID:</span>
                      <br className="sm:hidden" /> {fullImageView.credentialId}
                    </div>
                    <a
                      href="#verify"
                      className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800 font-medium border border-blue-200 hover:border-blue-300 px-4 py-2 rounded-lg transition-colors text-sm sm:text-base group"
                      data-aos="fade-left"
                      data-aos-delay="500"
                    >
                      Verify Credential
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
