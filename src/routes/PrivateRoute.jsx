import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, useHistory, useLocation } from "react-router-dom";

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const history = useHistory();
  const location = useLocation();
  const { isLoggedIn } = useSelector((store) => store.auth);

  if (!isLoggedIn) {
    history.push("/login");
  }

  return (
    <Route
      {...rest}
      render={() =>
        !isLoggedIn ? (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location.pathname },
            }}
          />
        ) : (
          <Layout>
            <Component {...rest} />
          </Layout>
        )
      }
    />
  );
};

export default PrivateRoute;
