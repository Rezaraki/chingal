import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './Header';

const { Content } = Layout;

function Root() {
  return (
    <Layout className="layout-root">
      <Header />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default Root;
