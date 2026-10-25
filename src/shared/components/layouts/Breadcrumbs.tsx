import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumbs as MUIBreadcrumbs,
  Typography,
  Link as MUILink,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const formatPathname = (path: string): string => {
    return path
      .replace(/-/g, " ")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="bg-white dark:bg-gray-900 px-4 py-3 shadow-sm sticky top-0 z-10">
      <MUIBreadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <MUILink
          component={Link}
          to="/"
          color="inherit"
          className="flex items-center hover:underline"
          underline="hover"
        >
          <HomeIcon fontSize="small" className="mr-2" />
          Home
        </MUILink>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <Typography key={to} color="text.primary" className="text-sm">
              {formatPathname(value)}
            </Typography>
          ) : (
            <MUILink
              component={Link}
              to={to}
              key={to}
              color="inherit"
              className="hover:underline text-sm"
              underline="hover"
            >
              {formatPathname(value)}
            </MUILink>
          );
        })}
      </MUIBreadcrumbs>
    </div>
  );
};

export default Breadcrumbs;
