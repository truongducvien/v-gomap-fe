import { RouteObject } from 'react-router-dom';
import { PATHS } from './paths';
import { lazy } from 'react';
import PublicLayout from '@/layouts/PublicLayout';

const Greeting = lazy(() => import('../pages/Greeting'));

const appRoutes: RouteObject[] = [
  {
    path: PATHS.GREETING,
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Greeting />,
      },
    ],
  },
];

export default appRoutes;
