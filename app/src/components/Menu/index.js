import React from 'react';
import { Layout } from 'antd';
import { FaAccessibleIcon, FaAccusoft,FaAd  } from 'react-icons/fa';

const Menu = () => {
  const { Header, Sider, Content } = Layout;
  const [ collapsed, setcollapsed] = React.useState(false);

  return(
    <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<FaAccessibleIcon />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<FaAccusoft />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<FaAd />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>

          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
  );
}
export default Menu;
