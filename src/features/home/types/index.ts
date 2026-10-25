import type { LucideIcon } from "lucide-react";

// Navigation
export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  enabled_section?: boolean;
  enabled_navigation?: boolean;
}

export interface TopLink {
  name: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
}

export interface DropdownItem {
  name: string;
  href: string;
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
  className: string;
}

// Tabs
export interface Tab {
  id: string;
  label: string;
  icon: LucideIcon;
}

// Tech Stack
export interface TechItem {
  name: string;
  icon: LucideIcon;
  color: string;
  description: string;
}

export interface TechStack {
  Backend: TechItem[];
  Frontend: TechItem[];
  DevOpsCloud: TechItem[];
}

// Experience & Journey
export interface Experience {
  position: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
  type: "current" | "past";
  color: string;
}

export interface JourneyItem {
  type: "experience" | "education";
  position: string;
  company: string;
  period: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string | string[];
  skills: string[];
  achievements: string[];
  status: "current" | "past";
  color: string;
  icon: LucideIcon;
}

// Education
export interface Education {
  degree: string;
  institution: string;
  year: string;
  location: string;
  description: string;
  gpa: string;
}

// Skills
export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: string;
}

// Projects
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoLink: string;
  githubLink: string;
}

// Certificates
export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyLink: string;
}

// Contact Form
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Mouse Position
export interface MousePosition {
  x: number;
  y: number;
}
