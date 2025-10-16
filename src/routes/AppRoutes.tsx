import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { pageRoutes } from "./PageRoutes";
import PrivateRoute from "./PrivateRoute";

const AppRoutes: React.FC = () => {
  const isAuthenticated = true;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {pageRoutes.map(
          ({ key, exact, path, component: Component, private: isPrivate }) =>
            isPrivate ? (
              <PrivateRoute
                key={key}
                exact={exact}
                path={path}
                component={Component}
                isAuthenticated={isAuthenticated}
              />
            ) : (
              <Route
                key={key}
                exact={exact}
                path={path}
                component={Component}
              />
            )
        )}
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
