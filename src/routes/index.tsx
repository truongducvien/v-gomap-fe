import { RouteObject } from 'react-router-dom';
import { PATHS } from './paths';
import { lazy } from 'react';
import { PublicLayout, MainLayout } from '@/layouts';
import AuthGuard from '@/components/common/AuthGuard';

const Greeting = lazy(() => import('../pages/Greeting'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const appRoutes: RouteObject[] = [
  /**
   * Public routes:
   */
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

  /**
   * Private routes:
   */
  {
    path: PATHS.HOME,
    element: (
      <AuthGuard>
        <MainLayout />
      </AuthGuard>
    ),
    children: [
      {
        index: true,
        element: <h2>Home</h2>,
      },
    ],
  },

  /**
   * Not-found page
   */
  {
    path: PATHS.NOT_FOUND,
    element: <NotFoundPage />,
  },
];

export default appRoutes;
