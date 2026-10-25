export const initHotjar = (): void => {
  const VITE_HOTJAR_ID = import.meta.env.VITE_HOTJAR_ID;
  if (typeof window === "undefined" || !VITE_HOTJAR_ID) return;

  try {
    (function (
      h: any,
      o: any,
      t: string,
      j: string,
      a?: HTMLHeadElement,
      r?: HTMLScriptElement,
    ) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: VITE_HOTJAR_ID, hjsv: 6 };
      a = o.getElementsByTagName("head")[0];
      r = o.createElement("script");
      if (r && a) {
        r.async = true;
        r.src = `${t}${h._hjSettings.hjid}${j}${h._hjSettings.hjsv}`;
        a.appendChild(r);
      }
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
  } catch (error) {
    console.warn("Hotjar initialization failed:", error);
  }
};
