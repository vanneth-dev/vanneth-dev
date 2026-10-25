import { Download, MapPin, Coffee, MessageCircle } from "lucide-react";
import { EXPERIENCE_YEARS } from "../../constants";
import { useTranslation } from "react-i18next";

interface HeroSectionProps {
  onDownloadCV: () => void;
  onHireMe: () => void;
}

export function HeroSection({ onDownloadCV, onHireMe }: HeroSectionProps) {
  const { t } = useTranslation();
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-4">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-900/30 to-black/70"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl "></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl "
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl "
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      <div
        className="relative z-20 text-center max-w-5xl mx-auto pt-10"
        data-aos="fade-up"
      >
        <div className="relative">
          <h1 className="khmer-suwannaphum-light text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent hover:from-purple-300 hover:via-pink-400 hover:to-blue-300 transition-all duration-500 cursor-default">
            {t("my_name")}
          </h1>
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-xl opacity-20 "></div>
        </div>

        <div className="relative mb-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-white mb-3 sm:mb-4 font-light text-bold tracking-wide">
            {t("aboutMe.position")}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-purple-300 max-w-3xl mx-auto leading-relaxed lg:leading-loose tracking-wide px-2">
            {t("hero.greeting")} {t("my_name")}. {t("aboutMe.description")}
            {t("hero.work_place")}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-gray-300 text-sm sm:text-base">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span>Phnom Penh, Cambodia</span>
          </div>
          <div className="hidden sm:block w-2 h-2 bg-blue-400 rounded-full "></div>
          <div className="flex items-center space-x-2">
            <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
            <span>{EXPERIENCE_YEARS}+ years experience</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
          <button
            onClick={onHireMe}
            className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-black/30 backdrop-blur-xl border border-purple-500/40 rounded-2xl text-white font-semibold text-sm sm:text-base hover:bg-black/50 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Contact Telegram</span>
          </button>{" "}
          <button
            onClick={onDownloadCV}
            className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-black/30 backdrop-blur-xl border border-purple-500/40 rounded-2xl text-white font-semibold text-sm sm:text-base hover:bg-black/50 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 flex items-center justify-center space-x-2"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
}
