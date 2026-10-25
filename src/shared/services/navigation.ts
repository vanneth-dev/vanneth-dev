import * as Icon from "lucide-react";

export interface NavigationItem {
  name: string;
  icon: React.FC<{ className?: string; style?: React.CSSProperties }>;
  href: string;
  color: string;
}

export interface NavigationGroup {
  name: string;
  items: NavigationItem[];
}

export const navigation: NavigationGroup[] = [
  {
    name: "Dashboard",
    items: [
      {
        name: "Dashboard",
        icon: Icon.LayoutDashboard,
        href: "/dashboard",
        color: "#2563EB",
      },
    ],
  },
  {
    name: "API Control",
    items: [
      {
        name: "API Keys",
        icon: Icon.Key,
        href: "/api-keys",
        color: "#F59E42",
      },
      {
        name: "API Roles",
        icon: Icon.ShieldCheck,
        href: "/api-roles",
        color: "#6366F1",
      },
      {
        name: "API Routes",
        icon: Icon.Code,
        href: "/api-routes",
        color: "#F43F5E",
      },
    ],
  },
  {
    name: "Settings",
    items: [
      {
        name: "Modules",
        icon: Icon.Puzzle,
        href: "/modules",
        color: "#F59E42",
      },
      {
        name: "Pages",
        icon: Icon.FileText,
        href: "/pages",
        color: "#10B981",
      },
      {
        name: "Roles",
        icon: Icon.ShieldCheck,
        href: "/settings/roles",
        color: "#6366F1",
      },
      {
        name: "Users",
        icon: Icon.UserCircle,
        href: "/settings/users",
        color: "#F43F5E",
      },
      {
        name: "Translations",
        icon: Icon.Languages,
        href: "/transactions",
        color: "#F59E42",
      },
      {
        name: "Activity Log",
        icon: Icon.Activity,
        href: "/activity-log",
        color: "#22D3EE",
      },
    ],
  },
];

export function findNavItem(path: string): NavigationItem | undefined {
  return navigation
    .flatMap((group) => group.items)
    .find((item) => item.href === path);
}

export function findClosestNavItem(path: string): NavigationItem | undefined {
  let match = findNavItem(path);
  if (match) return match;
  let items = navigation.flatMap((group) => group.items);
  return items
    .filter((item) => path.startsWith(item.href))
    .sort((a, b) => b.href.length - a.href.length)[0];
}
