import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { useEffect } from 'react';
import Header from './Header';
import BreadCrumb from './BreadCrumb';

const { Content } = Layout;

function Root() {
  const location = useLocation();
  const redirect = useNavigate();
  useEffect(() => {
    if (location.pathname === '/') redirect('/users');
  }, []);

  return (
    <Layout className="layout-root">
      <Header />
      <BreadCrumb />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default Root;
