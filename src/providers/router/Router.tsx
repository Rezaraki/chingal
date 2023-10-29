import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes';

function Router() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
export default Router;
