import { RouteObject } from 'react-router-dom';
import { Root } from '../../components/layout';
import { Profile, Users } from '../../components';

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
        element: <Profile />,
      },
    ],
  },
];

export default routes;
