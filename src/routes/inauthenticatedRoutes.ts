import Login from 'src/pages/Login';
import { IRoutes } from './IRoutes';

const inauthenticatedRoutes: IRoutes[] = [{ path: '/login', Component: Login }];

export { inauthenticatedRoutes };
