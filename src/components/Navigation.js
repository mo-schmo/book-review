import '../stylesheets/Navigation.scss'
import React, { Component, useState } from 'react';
import { Layout, Menu, Input } from 'antd';
import {
  UserOutlined,
  UploadOutlined,
  OrderedListOutlined,
  CheckSquareFilled
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
 
const Navigation = () => {
    const [theme, setTheme] = useState('light')


    return (
        <Sider
            style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            }}
        >
            <div className="logo">
                {/* TODO: LOGO */}
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                Profile
            </Menu.Item>
            <Menu.Item key="2" icon={<CheckSquareFilled />}>
                Completed
            </Menu.Item>
            <Menu.Item key="3" icon={<OrderedListOutlined />}>
                Reading List
            </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default Navigation;