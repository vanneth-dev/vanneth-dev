import { t } from "i18next";
import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  Moon,
  Settings,
  Sun,
  User,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "src/features/auth/services/utils";
import i18n from "src/shared/utils/i18n";
import { changeLocale } from "src/shared/utils/locale";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const langDropdownRef = React.useRef<HTMLDivElement | null>(null);
  const profileDropdownRef = React.useRef<HTMLDivElement | null>(null);
  const notificationsRef = React.useRef<HTMLDivElement | null>(null);
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangDropdownOpen(false);
      }
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target as Node)
      ) {
        setIsNotificationsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    onMenuClick();
    navigate("/");
  };

  interface Language {
    code: string;
    name: string;
    flag: string;
  }

  const handleLanguageChange = (lang: Language["code"]): void => {
    changeLocale(lang);
    setIsLangDropdownOpen(false);
  };

  const languages = [
    {
      code: "km",
      name: t("km"),
      flag: `${import.meta.env.VITE_NODE_PUBLIC_URL}/assets/flags/km.png`,
    },
    {
      code: "en",
      name: t("en"),
      flag: `${import.meta.env.VITE_NODE_PUBLIC_URL}/assets/flags/en.png`,
    },
  ];

  const selectedLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const mockNotifications = [
    { id: 1, message: "New user registered", time: "5 min ago", isRead: false },
    {
      id: 2,
      message: "Sales report available",
      time: "1 hour ago",
      isRead: false,
    },
    {
      id: 3,
      message: "Server update completed",
      time: "2 hours ago",
      isRead: true,
    },
  ];

  return (
    <header className="h-16 bg-blue-400 dark:bg-blue-700 border-b border-blue-300 dark:border-blue-600 shadow-sm flex-shrink-0">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side */}
          <div className="flex items-center">
            <button
              type="button"
              className="p-2 rounded-md text-white hover:text-white hover:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white lg:hidden"
              onClick={onMenuClick}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-2">
            {/* Language Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-2 text-white hover:text-white dark:hover:bg-blue-600 px-2 py-1 rounded-md cursor-pointer"
              >
                <img
                  src={selectedLang.flag}
                  alt={`${selectedLang.name} Flag`}
                  className="h-4 w-7 rounded shadow-sm"
                />
                <span className="text-sm font-medium">{selectedLang.name}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg focus:outline-none z-50 border border-gray-200 dark:border-gray-700">
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className="cursor-pointer flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <img
                          src={lang.flag}
                          alt={`${lang.name} Flag`}
                          className="h-4 w-7 mr-2 rounded shadow-sm"
                        />
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full text-white hover:text-white hover:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Notifications */}
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="p-2 rounded-full text-white hover:text-white hover:bg-blue-500 dark:hover:bg-blue-600 focus:ring-white relative"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 border border-gray-200 dark:border-gray-700">
                  <div className="py-2 divide-y divide-gray-100 dark:divide-gray-700">
                    <div className="px-4 py-2 flex justify-between items-center">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        Notifications
                      </h3>
                      <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                        Mark all as read
                      </button>
                    </div>

                    <div className="max-h-72 overflow-y-auto">
                      {mockNotifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${notification.isRead ? "" : "bg-blue-50 dark:bg-blue-900/20"}`}
                        >
                          <div className="flex items-start">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                {notification.message}
                              </p>
                              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                {notification.time}
                              </p>
                            </div>
                            {!notification.isRead && (
                              <div className="ml-3 flex-shrink-0">
                                <span className="w-2 h-2 bg-blue-600 rounded-full block"></span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="px-4 py-2 text-center">
                      <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                        View all notifications
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileDropdownRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-3 focus:outline-none"
              >
                <span className="hidden md:block text-sm font-medium text-white">
                  {user?.name || "Vanneth Tak"}
                </span>
                <img
                  className="h-6 w-6 md:h-7 md:w-7 rounded-full ring-2 ring-white ring-offset-1 ring-offset-blue-400 dark:ring-offset-blue-700 focus:outline-none"
                  src={`${import.meta.env.VITE_NODE_PUBLIC_URL}/assets/icon/me.jpg`}
                  alt=""
                />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg focus:outline-none z-50 overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {user?.name || "Vanneth Tak"}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {user?.email || ""}
                    </p>
                  </div>
                  <div className="py-1">
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <User className="mr-3 h-5 w-5 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
                      <span className="group-hover:text-blue-500">Profile</span>
                    </a>
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Settings className="mr-3 h-5 w-5 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
                      <span className="group-hover:text-blue-500">
                        Settings
                      </span>
                    </a>
                    <button
                      onClick={handleLogout}
                      className="w-full group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <LogOut className="mr-3 h-5 w-5 text-gray-400 group-hover:text-red-500" />
                      <span className="group-hover:text-red-500">Sign out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
