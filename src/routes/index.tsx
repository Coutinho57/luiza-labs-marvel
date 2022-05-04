import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as RoutesRouter,
} from 'react-router-dom';
import { useAuth } from 'src/context/AuthContext';
import { authenticatedRoutes } from './authenticatedRoutes';
import { inauthenticatedRoutes } from './inauthenticatedRoutes';

function Routes() {
  const { user } = useAuth();

  return (
    <Suspense fallback={<div>Loading... </div>}>
      <BrowserRouter>
        <RoutesRouter>
          {!user &&
            inauthenticatedRoutes.map(({ path, Component }) => (
              <Route
                path={path}
                element={<Component />}
                key={`keyInauthenticatedRoutes-${path}`}
              />
            ))}
          {user &&
            authenticatedRoutes.map(({ path, Component }) => (
              <Route
                path={path}
                element={<Component />}
                key={`keyAuthenticatedRoutes-${path}`}
              />
            ))}
          <Route path="*" element={<Navigate to={user ? '/' : '/login'} />} />
        </RoutesRouter>
      </BrowserRouter>
    </Suspense>
  );
}

export default Routes;
