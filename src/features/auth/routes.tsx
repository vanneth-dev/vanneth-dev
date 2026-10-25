import { Route } from "react-router-dom";
import { BaseFeatureRoutes } from "src/router/BaseFeatureRoutes";
import Login from "src/features/auth/pages/LoginPage";
import ForgotPassword from "src/features/auth/pages/ForgotPassword";
import ResetPassword from "src/features/auth/pages/ResetPassword";

class AuthFeatureRoutes extends BaseFeatureRoutes {
  readonly paths = {
    LOGIN: "/login",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
  } as const;

  render() {
    return (
      <>
        <Route path={this.paths.LOGIN} element={<Login />} />
        <Route path={this.paths.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={this.paths.RESET_PASSWORD} element={<ResetPassword />} />
      </>
    );
  }
}

export const authRoutes = new AuthFeatureRoutes();
