import React, { Component, useState } from 'react';
import { Layout, Menu, Input } from 'antd';
import {
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
 
const Navigation = () => {
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
                nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
            </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default Navigation;