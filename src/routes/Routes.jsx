import React from "react";
import { Redirect } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/auth/Profile";
import Agencies from "../pages/agencies/Agencies";
import AgencyUsers from "../pages/agencies/AgencyUsers";
import AgencyDetails from "../pages/agencies/AgencyDetails";

const privateRoutes = [
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
  { path: "/dashboard", component: Dashboard },
  { path: "/profile", component: Profile },
  { path: "/agencies", component: Agencies },
  { path: "/agencies/:id/users", component: AgencyUsers },
  { path: "/agencies/:id/details", component: AgencyDetails },
];

const publicRoutes = [{ path: "/login", component: Login }];

export { privateRoutes, publicRoutes };
