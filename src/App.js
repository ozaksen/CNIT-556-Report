import React, { useState } from 'react'; // Import useState
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import TimelineTab from './Pages/TimelineTab';
import EvidencesTab from './Pages/EvidencesTab';
import Report from './Pages/Report';

const { Header, Content, Footer, Sider } = Layout;



const menuItems = [
  {
    key: 1,
    label: 'Timeline'
  },
  {
    key: 2,
    label: 'Evidence by Person'
  },
  {
    key: 3,
    label: 'Accounts'
  },
  {
    key: 4,
    label: 'Report'
  },
]

const App = () => {
  const [selectedMenuKey, setSelectedMenuKey] = useState('1'); // Initialize with key 1

  const handleMenuClick = (e) => {
    setSelectedMenuKey(e.key);
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          selectedKeys={[selectedMenuKey]} // Use state for selected key
          onClick={handleMenuClick} // Add click handler
          items={menuItems}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
          height: '100%'
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        {selectedMenuKey == 1 &&
          <TimelineTab/>
        }
        {selectedMenuKey == 2 &&
          <EvidencesTab/>
        }
        {selectedMenuKey == 4 &&
          <Report/>
        }
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          bottom: 0,
          position: 'fixed',
          width: '100%'
        }}
      >
        Created by Akif, Yufeng, Xiao
      </Footer>
    </Layout>
  );
};
export default App;