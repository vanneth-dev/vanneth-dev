import { useEffect } from "react";
import "./styles.css";
import "./pretty-checkbox.scss";
import "./shared/utils/i18n";
import RouterApp from "./router";
import { initGtag } from "src/shared/utils/gtag";
import { initHotjar } from "src/shared/utils/hotjar";

function App() {
  useEffect(() => {
    if (import.meta.env.VITE_NODE_ENV === "production") {
      initGtag();
      initHotjar();
    }
  }, []);
  return (
    <>
      <RouterApp />
    </>
  );
}

export default App;
