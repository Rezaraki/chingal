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
      },
      {
        path: '/users/:id',
        element: <>Profile</>,
      },
    ],
  },
];

export default routes;
