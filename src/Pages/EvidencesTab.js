import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Collapse, Tooltip  } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;
const { Panel } = Collapse;



const items = [
    {
      key: 'frank-minion',
      icon: React.createElement(UserOutlined),
      label: (
        <Tooltip title='Frank Minion'>
          <span>Frank Minion</span>
        </Tooltip>
      ),
      children: [
        {
          key: 'evidence-1',
          label: (
            <Tooltip title='SM-G998U1, Android 12 Phone Number: 7654095153, IMEI:350479731924090 (Minion’s Phone)'>
              <span>Samsung Galaxy S 21 Ultra (2/23/2023)</span>
            </Tooltip>
          ), 
        },
        {
          key: 'evidence-2', 
          label: (
            <Tooltip title='SD Card from Samsung Galaxy'>
              <span>SD Card from Samsung Galaxy (2/23/2023)</span>
            </Tooltip>
          ), 
        },
        {
          key: 'evidence-3', 
          label: (
            <Tooltip title='SIM Card From Galaxy S 21 Ultra'>
              <span>SIM Card From Galaxy S 21 Ultra (2/23/2023)</span>
            </Tooltip>
          ),
        },
        {
          key: 'evidence-6', 
          label: (
            <Tooltip title='Windows 11 Laptop (Minion’s) (Windows 11 Pro)'>
              <span>Windows 11 Laptop (Minion’s) (Windows 11 Pro) (2/23/2023)</span>
            </Tooltip>
          ),
        },
      ] 
    },
    {
      key: 'natasha-kremlin',
      icon: React.createElement(UserOutlined), 
      label: (
        <Tooltip title='Natasha Kremlin'>
          <span>Natasha Kremlin</span>
        </Tooltip>
      ),
      children: [
        {
          key: 'evidence-4',
          label: (
            <Tooltip title='iPhone 11 (iOS 16.3) Phone Number: 7657673190, IMEI:352907117790881(Kremlin’s Phone)'>
              <span>iPhone 11 (iOS 16.3) (2/23/2023)</span>
            </Tooltip>
          ),
        },
        {
          key: 'evidence-5', 
          label: (
            <Tooltip title='SIM Card from iPhone'>
              <span>SIM Card from iPhone (2/23/2023)</span>
            </Tooltip>
          ), 
        },
        {
          key: 'evidence-7', 
          label: (
            <Tooltip title='Windows 11 Laptop (Kremlin’s) (Windows 11 Pro)'>
              <span>Windows 11 Laptop (Kremlin’s) (Windows 11 Pro) (2/23/2023)</span>
            </Tooltip>
          ),
        },
      ]
    }
  ];

const EvidencesTab = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
      return(<Layout
        style={{
          padding: '24px 0',
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Sider
          style={{
            background: colorBgContainer,
          }}
          width={200}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
            }}
            items={items}
          />
        </Sider>

      </Layout>)
}

export default EvidencesTab;
