declare global {
  interface Window {
    dataLayer: any[];
  }
}
export const initGtag = () => {
  if (typeof window === "undefined") return;

  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-SLJLRPFJBE";
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }

    gtag("js", new Date());
    gtag("config", "G-SLJLRPFJBE");
  };
};
