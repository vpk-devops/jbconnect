import React from "react";
import { Route, Redirect } from "react-router-dom";

interface PrivateRouteProps {
  component: React.ComponentType<any>;
  isAuthenticated: boolean;
  exact?: boolean;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/sign-in"/>
      }
    />
  );
};

export default PrivateRoute;
