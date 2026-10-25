import "aos/dist/aos.css";
import "./styles.css";
import AOS from "aos";
import { JSX, useEffect } from "react";
import { initHotjar } from "src/shared/utils/hotjar";
import { initGtag } from "src/shared/utils/gtag";
import HomeComponent from "./components/Home";

function HomePage(): JSX.Element {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 0,
      // disable: true,
    });
    if (import.meta.env.VITE_NODE_ENV === "production") {
      initGtag();
      initHotjar();
    }
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 w-screen overflow-x-hidden">
      <main>
        <HomeComponent />
      </main>
    </div>
  );
}

export default HomePage;
