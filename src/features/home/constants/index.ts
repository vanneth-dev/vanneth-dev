import i18n from "src/shared/utils/i18n";
import type {
  Certificate,
  Education,
  JourneyItem,
  NavItem,
  Project,
  SkillCategory,
  SocialLink,
  Tab,
  TechItem,
  TechStack,
  TopLink,
} from "../types";
import * as data from "./data";
import {
  lazyLocalized,
  toLocale,
  type Locale,
  type Resolved,
} from "./localize";

/**
 * Every constant below keeps its original name and original type,
 * so components keep importing them exactly as before.
 * The values follow the current i18n language ("km" -> Khmer, otherwise English).
 */
const getLocale = (): Locale =>
  toLocale(
    i18n.resolvedLanguage ||
      i18n.language ||
      (typeof localStorage !== "undefined"
        ? localStorage.getItem("language")
        : null) ||
      import.meta.env.VITE_DEFAULT_LANGUAGE,
  );

const localized = <T>(source: object): T => lazyLocalized<T>(source, getLocale);

// Not translated
export const EXPERIENCE_YEARS = data.EXPERIENCE_YEARS;
export const ROUTES = data.ROUTES;

// Translated
export const SECTION_STRINGS: Resolved<typeof data.SECTION_STRINGS> = localized(
  data.SECTION_STRINGS,
);
export const NAVIGATION_SECTIONS: NavItem[] = localized(
  data.NAVIGATION_SECTIONS,
);
export const TOP_LINKS: TopLink[] = localized(data.TOP_LINKS);
export const SOCIAL_LINKS: SocialLink[] = localized(data.SOCIAL_LINKS);
export const ABOUT_TABS: Tab[] = localized(data.ABOUT_TABS);
export const TECH_STACK: TechStack = localized(data.TECH_STACK);
export const MINDSET_VALUES: TechItem[] = localized(data.MINDSET_VALUES);
export const EDUCATION_DATA: Education[] = localized(data.EDUCATION_DATA);
export const JOURNEY_ITEMS: JourneyItem[] = localized(data.JOURNEY_ITEMS);
export const SKILL_CATEGORIES: SkillCategory[] = localized(
  data.SKILL_CATEGORIES,
);
export const PROJECTS: Project[] = localized(data.PROJECTS);
export const CERTIFICATES: Certificate[] = localized(data.CERTIFICATES);
