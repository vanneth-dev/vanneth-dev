import React, { JSX, useEffect, useState } from "react";
import { isAuthenticated, logout } from "src/features/auth/services/utils";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
      window.location.href = "/login";
      return;
    }

    const checkAuth = async () => {
      const token = await isAuthenticated();
      if (!token) {
        logout();
        window.location.href = "/login";
      } else {
        setIsAuth(true);
      }
    };

    checkAuth();
  }, []);

  return <>{isAuth && children}</>;
};

export default PrivateRoute;
