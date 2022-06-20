import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as RoutesRouter,
} from 'react-router-dom';
import { allRoutes } from './routes';

function Routes() {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <BrowserRouter>
        <RoutesRouter>
          {allRoutes.map(({ path, Component }) => (
            <Route
              path={path}
              element={<Component />}
              key={`keyAuthenticatedRoutes-${path}`}
            />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </RoutesRouter>
      </BrowserRouter>
    </Suspense>
  );
}

export default Routes;
