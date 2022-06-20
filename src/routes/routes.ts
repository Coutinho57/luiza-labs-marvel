import Character from 'src/pages/Character';
import Main from 'src/pages/Main';
import { IRoutes } from './IRoutes';

const allRoutes: IRoutes[] = [
  { path: '/', Component: Main },
  { path: '/character/:id', Component: Character },
];

export { allRoutes };
