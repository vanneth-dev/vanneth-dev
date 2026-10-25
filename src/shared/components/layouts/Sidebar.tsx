// Portfolio Sidebar
import React, { useState, useMemo } from "react";
import * as Icon from "lucide-react";
import { useTranslation } from "react-i18next";
import { navigation } from "src/shared/services/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  user?: {
    name?: string;
    roles?: { name: string }[];
  };
  navigate?: (path: string) => void;
  currentPath?: string;
}

const isPathActive = (itemPath: string, currentPath: string): boolean => {
  if (itemPath === currentPath) return true;
  if (itemPath === "/dashboard" && currentPath === "/") return true;
  return (
    currentPath.startsWith(itemPath) &&
    (currentPath.length === itemPath.length ||
      currentPath[itemPath.length] === "/")
  );
};

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  user = {
    name: "Vanneth Tak",
    roles: [{ name: "Developer" }],
  },
  navigate,
  currentPath = "/",
}) => {
  const { t } = useTranslation();
  const navItems = useMemo(() => {
    return navigation.map((group) => ({
      ...group,
      items: group.items.map((item) => ({
        ...item,
        current: isPathActive(item.href, currentPath),
      })),
    }));
  }, [currentPath]);
  const [expandedGroups, setExpandedGroups] = useState<string[]>(() =>
    navigation.map((group) => group.name),
  );

  const toggleGroup = (groupName: string) => {
    setExpandedGroups((current) =>
      current.includes(groupName)
        ? current.filter((name) => name !== groupName)
        : [...current, groupName],
    );
  };

  const expandAllGroups = () =>
    setExpandedGroups(navigation.map((g) => g.name));
  const collapseAllGroups = () => setExpandedGroups([]);

  const handleItemClick = (href: string) => {
    if (navigate) {
      navigate(href);
    } else {
      window.location.href = href;
    }
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:shadow-none flex flex-col ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-16 bg-blue-400 dark:bg-blue-700 flex items-center justify-between px-4 border-b border-blue-300 dark:border-blue-600">
        <div className="ps-2 flex items-center space-x-3">
          <img
            className="h-8 w-8 md:h-9 md:w-9 rounded-full ring-1 ring-white ring-offset-0 ring-offset-blue-400 dark:ring-offset-blue-700"
            src={`${import.meta.env.VITE_NODE_PUBLIC_URL}/assets/icon/me.jpg`}
            alt=""
          />
          <h1 className="font-semibold text-white text-sm md:text-lg whitespace-nowrap">
            {t("system_name")}
          </h1>
        </div>
        <button
          className="lg:hidden p-2 text-white hover:text-white hover:bg-blue-500 dark:hover:bg-blue-600 rounded-md"
          onClick={onClose}
        >
          <Icon.X className="h-5 w-5" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-1 py-4">
        <div className="flex justify-between items-center px-4 mb-3">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {t("navigation")}
          </span>
          <div className="flex space-x-2">
            <button
              onClick={expandAllGroups}
              className="text-xs text-blue-600 hover:text-blue-800"
            >
              {t("expand_all")}
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={collapseAllGroups}
              className="text-xs text-blue-600 hover:text-blue-800"
            >
              {t("collapse_all")}
            </button>
          </div>
        </div>
        <nav className="space-y-4">
          {navItems.map((group) => (
            <div key={group.name} className="px-1 mb-0">
              <button
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                onClick={() => toggleGroup(group.name)}
              >
                <span>{group.name}</span>
                <Icon.ChevronDown
                  className={`h-4 w-4 transform transition-transform ${
                    expandedGroups.includes(group.name) ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`mt-1 mb-1 space-y-1 overflow-hidden transition-all duration-300 ${
                  expandedGroups.includes(group.name)
                    ? "max-h-64 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {group.items.map((item) => (
                  <a
                    key={item.name}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick(item.href);
                    }}
                    className={`group flex items-center pl-9 px-3 py-2 text-sm rounded-md transition-colors duration-200 cursor-pointer ${
                      item.current
                        ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <item.icon
                      className="mr-3 h-5 w-5"
                      style={{ color: item.color }}
                    />
                    <span
                      style={item.current ? { color: item.color } : undefined}
                    >
                      {item.name}
                    </span>
                    {item.current && (
                      <span
                        className="ml-auto w-1 h-5 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 p-4 flex items-center">
        <div className="h-9 w-9 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500 dark:text-blue-400 font-semibold">
          {(user && user.name && user.name.charAt(0)) || ""}
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {(user && user.name) || "Vanneth Tak"}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {(user && user.roles && user.roles[0]?.name) || "Developer"}
          </p>
        </div>
      </div>
    </div>
  );
};
