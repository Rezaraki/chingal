import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './Header';

const { Content } = Layout;

function Root() {
  return (
    <Layout>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default Root;
