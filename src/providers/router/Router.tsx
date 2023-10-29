import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';

function Router({ routes }: { routes: RouteObject[] }) {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
export default Router;
