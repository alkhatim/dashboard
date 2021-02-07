import React from "react";
import { Redirect } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/auth/Profile";
import Agencies from "../pages/agencies/Agencies";
import Users from "../pages/agencies/Users";
import User from "../pages/agencies/User";
import Agency from "../pages/agencies/Agency";

const privateRoutes = [
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
  { path: "/dashboard", component: Dashboard },
  { path: "/profile", component: Profile },
  { path: "/agencies", component: Agencies },
  { path: "/agencies/:id/users", component: Users },
  { path: "/agencies/users/:id", component: User },
  { path: "/agencies/:id/details", component: Agency },
];

const publicRoutes = [{ path: "/login", component: Login }];

export { privateRoutes, publicRoutes };
