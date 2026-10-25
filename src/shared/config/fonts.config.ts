export type FontConfig = {
  fontFamily: string;
  file?: string;
  className: string;
  isGoogleFont?: boolean;
};

export const KhmerFonts: FontConfig[] = [
  {
    fontFamily: "KhmerOS_battambang",
    file: "/assets/font/khmer/KhmerOS_battambang.ttf",
    className: "khmer-battambang",
  },
  {
    fontFamily: "KhmerOS_content",
    file: "/assets/font/khmer/KhmerOS_content.ttf",
    className: "khmer-font",
  },
  {
    fontFamily: "KhmerOS_muol",
    file: "/assets/font/khmer/KhmerOS_muol.ttf",
    className: "khmer-muol",
  },
  {
    fontFamily: "KhmerOS_muollight",
    file: "/assets/font/khmer/KhmerOS_muollight.ttf",
    className: "khmer-light",
  },
  {
    fontFamily: "KhmerOS_siemreap",
    file: "/assets/font/khmer/KhmerOS_siemreap.ttf",
    className: "khmer-siemreap",
  },
  {
    fontFamily: "Suwannaphum-Regular",
    file: "/assets/font/khmer/Suwannaphum/Suwannaphum-Regular.ttf",
    className: "khmer-suwannaphum",
  },
  {
    fontFamily: "Suwannaphum-Light",
    file: "/assets/font/khmer/Suwannaphum/Suwannaphum-Light.ttf",
    className: "khmer-suwannaphum-light",
  },
];

export const EnFonts: FontConfig[] = [
  {
    fontFamily: "Times New Roman, Times, serif",
    className: "en-times-new-roman",
  },
];

export const LanguageFontConfig: Record<string, FontConfig[]> = {
  km: KhmerFonts,
  en: EnFonts,
};
