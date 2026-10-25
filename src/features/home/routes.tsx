import { Route } from "react-router-dom";
import ContactPage from "src/features/home/pages/ContactPage";
import { HomePage } from "src/features/home/pages/HomePage";
import { BaseFeatureRoutes } from "src/router/BaseFeatureRoutes";

class HomeFeatureRoutes extends BaseFeatureRoutes {
  readonly paths = {
    INDEX: "/",
    CONTACT: "/contact",
  } as const;

  render() {
    return (
      <>
        <Route path={this.paths.INDEX} element={<HomePage />} />
        <Route path={this.paths.CONTACT} element={<ContactPage />} />
      </>
    );
  }
}

export const homeRoutes = new HomeFeatureRoutes();
