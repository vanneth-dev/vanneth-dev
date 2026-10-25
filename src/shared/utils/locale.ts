import i18n from "./i18n";

export const saveJsonToFile = (data: any, fileName: string): void => {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);

  console.log(`File ready for download: ${fileName}`);
};

export const changeLocale = (locale: string): void => {
  localStorage.setItem("language", locale);
  i18n.changeLanguage(locale);
};
