import React from "react";
import { Redirect } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Auth/Profile";

const privateRoutes = [
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
  { path: "/dashboard", component: Dashboard },
  { path: "/profile", component: Profile },
];

const publicRoutes = [{ path: "/login", component: Login }];

export { privateRoutes, publicRoutes };
