const monthNames = {
  kh: [
    "មករា",
    "កុម្ភៈ",
    "មីនា",
    "មេសា",
    "ឧសភា",
    "មិថុនា",
    "កក្កដា",
    "សីហា",
    "កញ្ញា",
    "តុលា",
    "វិច្ឆិកា",
    "ធ្នូ",
  ],
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayNames = {
  kh: ["អាទិត្យ", "សុក្រ", "ច័ន្ទ", "អង្គារ", "ពុធ", "ព្រហស្បតិ៍", "សៅរ៍"],
  en: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const formatDateString = (
  dateInput: Date | string,
  language: string,
  includeTime: boolean = false,
): string => {
  if (!dateInput) return "";

  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
  if (isNaN(date.getTime())) return "";

  const day = date.getDate().toString().padStart(2, "0");
  const month = date.getMonth();
  const year = date.getFullYear();
  const dayName =
    dayNames[language as keyof typeof dayNames]?.[date.getDay()] ||
    dayNames.en[date.getDay()];
  const monthName =
    monthNames[language as keyof typeof monthNames]?.[month] ||
    monthNames.en[month];

  if (language === "km") {
    return `ថ្ងៃ${dayName} ${day} ${monthName} ${year}${includeTime ? ` ម៉ោង ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}` : ""}`;
  } else if (language === "en") {
    return `${dayName} ${day} ${monthName} ${year}${includeTime ? ` ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}` : ""}`;
  }

  return `${day}-${monthName.slice(0, 3)}-${year}${includeTime ? ` ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}` : ""}`;
};

export const formatDate = (
  dateInput: Date | string = new Date(),
  language: string = "en",
): string => formatDateString(dateInput, language);

export const formatDateTime = (
  dateInput: Date | string = new Date(),
  language: string = "en",
): string => formatDateString(dateInput, language, true);
