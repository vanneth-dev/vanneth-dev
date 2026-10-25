import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import i18n from "src/shared/utils/i18n";
import { setLanguageFonts } from "src/shared/utils/font";

const DEFAULT_LANG = "km";

const RouterApp: React.FC = () => {
  useEffect(() => {
    const savedLang = localStorage.getItem("language") || DEFAULT_LANG;

    i18n.changeLanguage(savedLang);

    setLanguageFonts(savedLang);
  }, []);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default RouterApp;
