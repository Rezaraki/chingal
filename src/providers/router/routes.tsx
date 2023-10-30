import { RouteObject } from 'react-router-dom';
import Root from '../../components/layout/Root';
import Users from '../../components/Users';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/users',
        element: <Users />,
        children: [
          {
            path: '/users/:id',
            element: <>hi</>,
          },
        ],
      },
    ],
  },
];

export default routes;
