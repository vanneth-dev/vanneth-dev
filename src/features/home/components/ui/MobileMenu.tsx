import { X, Menu } from "lucide-react";
import { NAVIGATION_SECTIONS, SOCIAL_LINKS } from "../../constants";

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  onToggle: () => void;
  onSectionClick: (sectionId: string) => void;
}

export function MobileMenu({
  isOpen,
  activeSection,
  onToggle,
  onSectionClick,
}: MobileMenuProps) {
  return (
    <>
      <button
        onClick={onToggle}
        className="fixed top-6 right-6 z-50 lg:hidden w-12 h-12 bg-black/40 backdrop-blur-2xl border border-purple-500/40 rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all duration-300"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8">
          {NAVIGATION_SECTIONS.map((section, index) => (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={`group flex items-center space-x-4 text-2xl font-semibold transition-all duration-500 ${
                activeSection === section.id
                  ? "text-white bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 px-6 py-3 rounded-full shadow-2xl shadow-purple-500/60"
                  : "text-gray-300 hover:text-white hover:scale-105"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <section.icon className="w-6 h-6" />
              <span>{section.label}</span>
            </button>
          ))}

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4" />

          <div className="flex space-x-6">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <button
                key={label}
                onClick={() => window.open(href, "_blank")}
                className="w-12 h-12 bg-black/30 backdrop-blur-xl border border-purple-500/30 rounded-full flex items-center justify-center text-white hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <Icon className="w-6 h-6" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
