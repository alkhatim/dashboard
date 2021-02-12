import React from "react";
import { Redirect } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/auth/Profile";
import Agencies from "../pages/agencies/Agencies";
import Users from "../pages/users/Users";
import User from "../pages/users/User";
import Agency from "../pages/agencies/Agency";
import AgencyStats from "../pages/agencies/AgencyStats";

const privateRoutes = [
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
  { path: "/dashboard", component: Dashboard },
  { path: "/profile", component: Profile },
  { path: "/agencies", component: Agencies },
  { path: "/agencies/:id/users", component: Users },
  { path: "/agencies/users/:id", component: User },
  { path: "/agencies/:id/edit", component: Agency },
  { path: "/agencies/:id/stats", component: AgencyStats },
];

const publicRoutes = [{ path: "/login", component: Login }];

export { privateRoutes, publicRoutes };
