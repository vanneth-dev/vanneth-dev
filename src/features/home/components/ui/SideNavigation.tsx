import { MoreHorizontal } from "lucide-react";
import { NAVIGATION_SECTIONS, SOCIAL_LINKS } from "../../constants";

interface SideNavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  showSocials: boolean;
  onToggleSocials: () => void;
}

export function SideNavigation({
  activeSection,
  onSectionClick,
  showSocials,
  onToggleSocials,
}: SideNavigationProps) {
  const enabledSections = NAVIGATION_SECTIONS.filter(
    (section) => section.enabled_navigation,
  );

  return (
    <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="relative bg-black/40 backdrop-blur-2xl border border-purple-500/40 rounded-full px-3 py-13 shadow-2xl hover:bg-black/50 transition-all duration-500 hover:shadow-purple-500/30 group">
        <nav className="relative z-10 space-y-4">
          {enabledSections.map((section, index) => (
            <div key={section.id} className="relative">
              <button
                onClick={() => onSectionClick(section.id)}
                className={`group/btn relative w-9 h-9 rounded-3xl flex items-center justify-center transition-all duration-500 ${
                  activeSection === section.id
                    ? "bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 text-white shadow-2xl shadow-purple-500/60 scale-110"
                    : "text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-purple-500/30 hover:via-pink-500/30 hover:to-blue-500/30 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                title={section.label}
              >
                <section.icon
                  className={`w-4 h-4 transition-all duration-300 ${
                    activeSection === section.id
                      ? "text-white drop-shadow-lg"
                      : "group-hover/btn:text-purple-300 group-hover/btn:drop-shadow-md"
                  }`}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </button>
            </div>
          ))}
        </nav>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4" />
        <button
          onClick={onToggleSocials}
          className={`group/actions relative w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-500 mt-2 ${
            showSocials
              ? "bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 text-white shadow-2xl shadow-purple-500/60 scale-110"
              : "text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-purple-500/30 hover:via-pink-500/30 hover:to-blue-500/30 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40"
          }`}
          title="Social Links"
        >
          <MoreHorizontal
            size={20}
            className={`transition-transform duration-300 ${showSocials ? "rotate-90" : ""}`}
          />
          <div className="absolute left-full ml-3 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover/actions:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Social Links
          </div>
        </button>
        <div
          className={`flex flex-col items-center transition-all duration-500 overflow-hidden ${showSocials ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          {SOCIAL_LINKS.map(({ icon: Icon, href, label, className }) => (
            <button
              key={label}
              onClick={() => window.open(href, "_blank")}
              className={`group/social w-9 h-9 mt-2 rounded-lg flex items-center justify-center text-gray-400 hover:scale-110 transition-all duration-300 ${className}`}
              title={label}
            >
              <Icon size={18} />
            </button>
          ))}
        </div>
        <div className="absolute -top-6 -left-6 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute -bottom-6 -right-6 w-4 h-4 bg-pink-400 rounded-full opacity-50"></div>
        <div className="absolute top-1/2 -left-8 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-70"></div>
        <div className="absolute top-1/4 -right-8 w-1 h-1 bg-yellow-400 rounded-full opacity-80"></div>
      </div>
    </nav>
  );
}

export default SideNavigation;
