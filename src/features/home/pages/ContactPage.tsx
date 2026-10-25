import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Send, MessageCircle, Linkedin } from "lucide-react";
import { AnimatedBackground } from "src/features/home/components/ui/AnimatedBackground";
import { EnhancedNavHeader } from "src/features/home/components/ui/EnhancedNavHeader";
import HomeLayout from "src/layouts/HomeLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { SOCIAL_LINKS } from "src/features/home/constants";

function ContactPage() {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const telegramLink =
    SOCIAL_LINKS.find((link) => link.label === "Telegram")?.href ||
    "https://t.me/vannethtak";
  const emailLink = "vanneth.dev@gmail.com";
  const linkedinLink =
    SOCIAL_LINKS.find((link) => link.label === "LinkedIn")?.href ||
    "https://www.linkedin.com/in/vanneth-tak-bb8179225/";

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <HomeLayout>
      <div
        className="relative min-h-screen overflow-hidden"
        id="contactWrapper"
      >
        <div
          className="fixed pointer-events-none z-50 mix-blend-difference hidden lg:block"
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
            transition: "all 0.1s ease-out",
          }}
        >
          <div className="w-5 h-5 bg-white rounded-full opacity-80 "></div>
          <div className="absolute inset-0 w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping opacity-30"></div>
        </div>

        <div className="fixed inset-0 -z-10">
          <AnimatedBackground />
          <div
            className="absolute inset-0 opacity-20 transition-all duration-1000 hidden lg:block"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(139, 92, 246, 0.3), 
              rgba(236, 72, 153, 0.2), 
              transparent 40%)`,
            }}
          />
        </div>

        <EnhancedNavHeader />

        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-900/10 to-black/70 pointer-events-none"></div>

          <div
            className="relative z-20 max-w-6xl w-full mx-auto"
            data-aos="fade-up"
          >
            <div className="text-center mb-12">
              <h1 className="khmer-suwannaphum-light text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
                {t("contact.title", "Get In Touch")}
              </h1>
              <p className="text-base sm:text-lg text-purple-300 max-w-2xl mx-auto tracking-wide">
                {t(
                  "contact.subtitle",
                  "Have a project in mind or looking to collaborate? Let's build something remarkable together.",
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-black/30 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 sm:p-8 hover:border-purple-500/50 transition-all duration-300 shadow-xl">
                  <h3 className="text-xl font-semibold text-white mb-6 tracking-wide">
                    {t("contact.info_title", "Contact Information")}
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/30 rounded-xl flex items-center justify-center text-purple-400 group-hover:scale-110 transition-all duration-300">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">
                          {t("contact.email", "Email")}
                        </p>
                        <a
                          href={`mailto:${emailLink}`}
                          className="text-white hover:text-purple-300 transition-colors"
                        >
                          {emailLink}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-pink-500/10 border border-pink-500/30 rounded-xl flex items-center justify-center text-pink-400 group-hover:scale-110 transition-all duration-300">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">
                          {t("contact.telegram", "Telegram")}
                        </p>
                        <a
                          href={telegramLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-pink-300 transition-colors"
                        >
                          @{telegramLink.split("/").pop()}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-blue-600/10 border border-blue-600/30 rounded-xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-all duration-300">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">
                          {t("contact.linkedin", "LinkedIn")}
                        </p>
                        <a
                          href={linkedinLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          Vanneth Tak
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-all duration-300">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">
                          {t("contact.location", "Location")}
                        </p>
                        <p className="text-white">Phnom Penh, Cambodia</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    {t(
                      "contact.availability",
                      "Available for freelance projects",
                    )}
                  </span>
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-3">
                <form
                  onSubmit={handleSubmit}
                  className="bg-black/30 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-purple-500/50 transition-all duration-300 shadow-xl"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        {t("contact.form_name", "Your Name")}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-black/40 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        {t("contact.form_email", "Your Email")}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-black/40 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      {t("contact.form_subject", "Subject")}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-black/40 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      {t("contact.form_message", "Message")}
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-black/40 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full group relative px-6 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-xl text-white font-semibold hover:opacity-90 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/30 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <span>{t("contact.send_message", "Send Message")}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="border-t border-purple-500/30 py-3 flex flex-col items-center justify-center h-16">
            <p className="text-gray-400 text-xs">
              @{new Date().getFullYear()} Vanneth Tak. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </HomeLayout>
  );
}

export default ContactPage;
