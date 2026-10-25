import { LanguageFontConfig, FontConfig } from "src/shared/config/fonts.config";

let currentFontStyleTag: HTMLStyleElement | null = null;
let currentFontLinks: HTMLLinkElement[] = [];

export function setLanguageFonts(language: string = "en") {
  const fonts: FontConfig[] | undefined = LanguageFontConfig[language];
  if (!fonts) return;

  if (currentFontStyleTag) {
    document.head.removeChild(currentFontStyleTag);
    currentFontStyleTag = null;
  }
  currentFontLinks.forEach((link) => {
    if (document.head.contains(link)) {
      document.head.removeChild(link);
    }
  });
  currentFontLinks = [];

  fonts.forEach((font) => {
    if (font.isGoogleFont && font.file) {
      if (
        ![...document.head.querySelectorAll("link")].some(
          (l) => l.href === font.file,
        )
      ) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = font.file;
        document.head.appendChild(link);
        currentFontLinks.push(link);
      }
    }
  });

  const style = document.createElement("style");
  let css = "";

  fonts.forEach((font) => {
    if (!font.isGoogleFont) {
      css += `
        @font-face {
          font-family: '${font.fontFamily}';
          src: url('${font.file}') format('truetype');
        }
      `;
    }
    css += `
      .${font.className} {
        font-family: '${font.fontFamily}', sans-serif;
      }
    `;
  });

  let fontSize = "18px";
  if (language === "en") fontSize = "18px";
  else if (language === "km") fontSize = "18px";

  css += `
    body {
      font-family: '${fonts[0].fontFamily}', sans-serif;
      font-size: ${fontSize};
      line-height: 1.5;
    }
  `;

  style.innerHTML = css;
  document.head.appendChild(style);
  currentFontStyleTag = style;
}
