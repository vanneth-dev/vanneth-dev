import { Github, Linkedin, Mail, ChevronDown, X, Menu } from "lucide-react";

// Extend the Window interface to include scrollTimeout
declare global {
  interface Window {
    scrollTimeout?: NodeJS.Timeout;
  }
}
import { JSX, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Education from "./Education";
import Experience from "./Experience";
import TechnicalSkills from "./TechnicalSkills";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
// import Contact from "./Contact";
import Certificates from "./Certificates";
import i18n from "src/shared/utils/i18n";
import { changeLocale } from "src/shared/utils/locale";

function HomeComponent(): JSX.Element {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("hero");
  // const [isScrolling, setIsScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleLanguageChange = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === "en" ? "km" : "en";
    changeLocale(newLang);
  };
  const language =
    localStorage.getItem("language") ||
    import.meta.env.VITE_DEFAULT_LANGUAGE ||
    "en";
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      // setIsScrolling(true);

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });

      // Reset scrolling state after a delay
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        // setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId: string): void => {
    const section: HTMLElement | null = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: "smooth",
      });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-md z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">
                {t("my_name")}
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={handleLanguageChange}
                className="text-sm font-medium transition-colors hover:text-blue-600 flex items-center space-x-2"
              >
                <img
                  src={
                    language === "en"
                      ? "/assets/flags/en.png"
                      : "/assets/flags/km.png"
                  }
                  alt={language === "en" ? "Khmer Flag" : "English Flag"}
                  className="h-4 w-7"
                />
                <span>{language === "en" ? t("en") : t("km")}</span>
              </button>
              {[
                "aboutMe",
                "education",
                "experience",
                "skills",
                "projects",
                "certificates",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === section
                      ? "text-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  {t(`${section}.title`) ||
                    section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden flex flex-col space-y-4 mt-2 pb-4">
              <button
                onClick={handleLanguageChange}
                className="text-sm font-medium transition-colors hover:text-blue-600 flex items-center space-x-2"
              >
                <img
                  src={
                    language === "en"
                      ? "/assets/flags/km.png"
                      : "/assets/flags/en.png"
                  }
                  alt={language === "en" ? "Khmer Flag" : "English Flag"}
                  className="h-4 w-7"
                />
                <span>{language === "en" ? t("km") : t("en")}</span>
              </button>
              {["aboutMe", "education", "experience", "skills", "projects"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => {
                      scrollToSection(section);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-sm font-medium transition-colors hover:text-blue-600 text-left ${
                      activeSection === section
                        ? "text-blue-600"
                        : "text-gray-600"
                    }`}
                  >
                    {t(`${section}.title`) ||
                      section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ),
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Parallax Background */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('${import.meta.env.VITE_NODE_PUBLIC_URL}/assets/imgs/hero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-1 bg-gradient-to-b from-blue-900/60 to-blue-900/30 backdrop-blur-sm"></div>
        <div
          className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          // data-aos="fade-up"
        >
          <div className="relative w-40 h-40 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-8">
            <img
              src="/assets/icon/me.jpg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover shadow-xl border-4 border-white"
            />
            <div className="absolute inset-0 rounded-full border-2 border-blue-300 border-dashed animate-spin-slow"></div>
          </div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-4">
            {t("my_name")}
          </h1>
          <p className="text-xl text-blue-100 mb-8">{t("aboutMe.position")}</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/vanneth-dev"
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-7 w-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/vanneth-tak-bb8179225/"
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-7 w-7" />
            </a>
            <a
              href="mailto:vanneth.dev@gmail.com"
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-7 w-7" />
            </a>
          </div>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center animate-bounce">
            <button
              onClick={() => scrollToSection("aboutMe")}
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="Scroll Down"
            >
              <ChevronDown className="h-8 w-8" />
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section with light pattern background */}
        <section
          id="aboutMe"
          className="relative bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="relative z-10">
            <AboutMe />
          </div>
        </section>

        {/* Education Section with geometric background */}
        <section id="education" className="relative py-6 my-4">
          <div
            className="absolute inset-0 bg-blue-900/5 -z-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 60c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="relative z-10">
            <Education />
          </div>
        </section>

        {/* Experience Section with subtle pattern */}
        <section
          id="experience"
          className="relative py-6"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236366f1' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 5v1H5v1H0V5z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          <Experience />
        </section>

        {/* Skills Section with tech-inspired background */}
        <section id="skills" className="relative py-6 my-4 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.05'%3E%3Cpath d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                opacity: 0.8,
              }}
            ></div>
            <div className="absolute h-96 w-96 -bottom-48 -right-48 rounded-full bg-blue-600/5 blur-3xl" />
            <div className="absolute h-64 w-64 -top-32 -left-32 rounded-full bg-blue-600/5 blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <TechnicalSkills />
          </div>
        </section>

        {/* Projects Section with code-inspired background */}
        <section id="projects" className="relative py-6 my-4">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-blue-600/5"></div>
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath fill='%234f46e5' d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill-opacity='0.4'%3E%3C/path%3E%3C/svg%3E")`,
              }}
            ></div>
            <div className="absolute top-0 right-0 h-64 w-2/3 bg-gradient-to-r from-transparent to-blue-50/30"></div>
            <div className="absolute bottom-0 left-0 h-64 w-full bg-gradient-to-t from-white/20 to-transparent"></div>
          </div>
          <div className="relative z-10">
            <Projects />
          </div>
        </section>

        {/* Certificates Section with award-inspired background */}
        <section
          id="certificates"
          className="relative py-6 my-4 overflow-hidden"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-blue-50/30 to-white"></div>
            <div
              className="absolute w-full h-full opacity-5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%234f46e5' fill-opacity='0.7'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
            <div className="absolute h-96 w-96 rounded-full blur-3xl bg-blue-50 opacity-70 -bottom-48 -right-48"></div>
          </div>
          <div className="relative z-10">
            <Certificates />
          </div>
        </section>

        {/* Contact Section with subtle pattern */}
        {/* <section id="contact" className="relative py-6" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236366f1' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }}>
          <Contact />
        </section> */}
      </div>

      <footer className="bg-blue-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">{t("my_name")}</h2>
              <p className="text-blue-200 mt-1">Full-Stack Developer</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/vanneth-dev"
                className="text-blue-200 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/vanneth-tak-bb8179225/"
                className="text-blue-200 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:vanneth.dev@gmail.com"
                className="text-blue-200 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-200 text-sm">
            &copy; {new Date().getFullYear()} {t("my_name")}. All rights
            reserved.
          </div>
        </div>
      </footer>
      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-opacity z-[1000] ${
          activeSection !== "hero"
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
}

export default HomeComponent;
