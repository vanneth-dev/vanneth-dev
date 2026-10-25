import React from "react";
import { Routes, Route } from "react-router-dom";
import Unauthorized from "src/shared/components/error/403";
import PrivateRoute from "src/shared/components/protection/PrivateRoute";
import NotFound from "src/shared/components/error/404";
import Blocked from "src/pages/Blocked";
import CheckApi from "src/pages/CheckApi";
import AdminLayout from "src/layouts/AdminLayout";

import { homeRoutes } from "src/features/home/routes";
import { authRoutes } from "src/features/auth/routes";
import { dashboardRoutes } from "src/features/dashboard/routes";
import { settingsRoutes } from "src/features/settings/routes";

class AppPathRegistry {
  readonly GLOBAL = {
    UNAUTHORIZED: "/unauthorized",
    BLOCKED: "/blocked",
    CHECK_API: "/check-api",
  } as const;

  get HOME() {
    return homeRoutes.paths;
  }
  get AUTH() {
    return authRoutes.paths;
  }
  get DASHBOARD() {
    return dashboardRoutes.paths;
  }
  get SETTINGS() {
    return settingsRoutes.paths;
  }
}

export const Router = new AppPathRegistry();

const ProtectedLayout = () => (
  <PrivateRoute>
    <AdminLayout />
  </PrivateRoute>
);

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path={Router.GLOBAL.CHECK_API} element={<CheckApi />} />
    <Route path={Router.GLOBAL.BLOCKED} element={<Blocked />} />
    <Route path={Router.GLOBAL.UNAUTHORIZED} element={<Unauthorized />} />

    {homeRoutes.render()}
    {authRoutes.render()}

    <Route element={<ProtectedLayout />}>
      {dashboardRoutes.render()}
      {settingsRoutes.render()}
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
