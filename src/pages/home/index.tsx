import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '1', icon: <PieChartOutlined />, label: 'Option 1' },
  { key: '2', icon: <DesktopOutlined />, label: 'Option 2' },
  { key: '3', icon: <ContainerOutlined />, label: 'Option 3' },
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      { key: '7', label: 'Option 7' },
      { key: '8', label: 'Option 8' },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '11', label: 'Option 11' },
          { key: '12', label: 'Option 12' },
        ],
      },
    ],
  },
];

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div >
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
      />
      <Link to={'/hooks'}>
        <Button type='primary'>Hooks</Button>
      </Link>
      <Link style={{ margin: '0 10px' }} to={'/routerTest'} state={{
        name: 'routerTest',
        age: 18
      }}>
        <Button type='primary'>使用Link_state跳转</Button>
      </Link>

      <Link style={{ margin: '0 10px' }} to={
        {
          pathname: '/routerTest',
          search: 'name=routerTest&age=18',
        }
      }>
        <Button type='primary'>使用Link_search跳转</Button>
      </Link>
      {/* 导航式跳转 */}
      <Button type='primary' style={{ margin: '0 10px' }} onClick={() => navigate('/routerTest/333', { replace: false, state: { age: 12, name: '龚育先' } })}>Navigate导航式跳转</Button>
      <Link to={
        {
          pathname: '/asdasfafafa',
          search: 'name=routerTest&age=18',
        }
      }>
        <Button type='primary' >404</Button>
      </Link>
    </div>
  );
};

export default Home