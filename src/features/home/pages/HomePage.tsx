import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import HomeLayout from "src/layouts/HomeLayout";
import { AnimatedBackground } from "src/features/home/components/ui/AnimatedBackground";
import { EnhancedNavHeader } from "src/features/home/components/ui/EnhancedNavHeader";
import { SideNavigation } from "src/features/home/components/ui/SideNavigation";
import { MobileMenu } from "src/features/home/components/ui/MobileMenu";

import { HeroSection } from "../components/sections/Hero.tsx";
import { AboutMeSection } from "src/features/home/components/sections/AboutMe";
import { JourneySection } from "src/features/home/components/sections/Journey";
import { TechnicalSkillsSection } from "src/features/home/components/sections/TechnicalSkills";
import { ProjectsSection } from "src/features/home/components/sections/Projects";
import { CertificatesSection } from "src/features/home/components/sections/Certificates";
import {
  useMousePosition,
  useActiveSection,
  useAOSInit,
  useScrollProgress,
  useMobileMenu,
} from "../hooks";
import { NAVIGATION_SECTIONS } from "../constants";
import "../index.css";

export function HomePage() {
  const mousePosition = useMousePosition();
  const [activeSection, scrollToSection] = useActiveSection("hero");
  const progress = useScrollProgress();
  const [showSocials, setShowSocials] = useState(false);
  const [isMobileMenuOpen, toggleMobileMenu] = useMobileMenu();

  useAOSInit();

  useEffect(() => {
    scrollToSection("hero");
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [scrollToSection]);

  const handleDownloadCV = () => {
    const cvUrl = "/assets/resume/VANNEHT_TAK_Resume.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "VANNETH TAK Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleHireMe = () => {
    window.open("https://t.me/vannethtak", "_blank");
  };

  const renderSectionComponent = (id: string) => {
    switch (id) {
      case "hero":
        return (
          <HeroSection
            onDownloadCV={handleDownloadCV}
            onHireMe={handleHireMe}
          />
        );
      case "aboutMe":
        return <AboutMeSection />;
      case "journey":
        return <JourneySection />;
      case "skills":
        return <TechnicalSkillsSection />;
      case "projects":
        return <ProjectsSection />;
      case "certificates":
        return <CertificatesSection />;
      default:
        return null;
    }
  };

  return (
    <HomeLayout>
      <div className="relative min-h-screen overflow-hidden" id="homeWrapper">
        <div
          className="fixed pointer-events-none z-50 mix-blend-difference hidden lg:block"
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
            transition: "all 0.1s ease-out",
          }}
        >
          <div className="w-5 h-5 bg-white rounded-full opacity-80"></div>
          <div className="absolute inset-0 w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping opacity-30"></div>
        </div>

        <div className="fixed inset-0 -z-10">
          <AnimatedBackground />
          <div
            className="absolute inset-0 opacity-20 transition-all duration-1000 hidden lg:block"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.2), transparent 40%)`,
            }}
          />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-500/20 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-pink-500/20 rotate-45 animate-float"></div>
          </div>
        </div>

        <SideNavigation
          activeSection={activeSection}
          onSectionClick={scrollToSection}
          showSocials={showSocials}
          onToggleSocials={() => setShowSocials(!showSocials)}
        />

        <MobileMenu
          isOpen={isMobileMenuOpen}
          activeSection={activeSection}
          onToggle={toggleMobileMenu}
          onSectionClick={scrollToSection}
        />

        <EnhancedNavHeader />

        {NAVIGATION_SECTIONS.filter((section) => section.enabled_section).map(
          (section) => (
            <section key={section.id} id={section.id}>
              {renderSectionComponent(section.id)}
            </section>
          ),
        )}

        <footer className="pt-12">
          <div className="border-t border-purple-500/30 py-3 flex flex-col items-center justify-center h-16">
            <p className="text-gray-400 text-xs flex items-center justify-center space-x-2">
              <span>
                @{new Date().getFullYear()} Vanneth Tak. All rights reserved.
              </span>
            </p>
          </div>
        </footer>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-500 z-50 hover:scale-110 hover:rotate-6 hover:shadow-purple-500/50 ${
            activeSection !== "hero"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
        </button>

        <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-300 shadow-lg shadow-purple-500/50"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </HomeLayout>
  );
}

export default HomePage;
