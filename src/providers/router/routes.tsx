import Root from '../../components/layout/Root';

const routes = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/users',
        element: (
          <div className="App">
            <div className="card">
              <button type="button">count is</button>
            </div>
          </div>
        ),
      },
    ],
  },
];

export default routes;
