import { Route } from "react-router-dom";
import { BaseFeatureRoutes } from "src/router/BaseFeatureRoutes";
import Blog from "src/features/home/V1/Blog";
import Courses from "src/features/home/V1/Courses";
import ContactPage from "src/features/home/pages/ContactPage";
import { HomePage } from "src/features/home/pages/HomePage";

class HomeFeatureRoutes extends BaseFeatureRoutes {
  readonly paths = {
    INDEX: "/",
    BLOG: "/blog",
    COURSES: "/courses",
    CONTACT: "/contact",
  } as const;

  render() {
    return (
      <>
        <Route path={this.paths.INDEX} element={<HomePage />} />
        <Route path={this.paths.BLOG} element={<Blog />} />
        <Route path={this.paths.COURSES} element={<Courses />} />
        <Route path={this.paths.CONTACT} element={<ContactPage />} />
      </>
    );
  }
}

export const homeRoutes = new HomeFeatureRoutes();
