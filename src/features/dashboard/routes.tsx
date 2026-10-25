import { Route } from "react-router-dom";
import { BaseFeatureRoutes } from "src/router/BaseFeatureRoutes";
import Dashboard from "src/features/dashboard/Dashboard";

class DashboardFeatureRoutes extends BaseFeatureRoutes {
  readonly paths = {
    HOME: "/dashboard",
  } as const;

  render() {
    return <Route path={this.paths.HOME} element={<Dashboard />} />;
  }
}

export const dashboardRoutes = new DashboardFeatureRoutes();
