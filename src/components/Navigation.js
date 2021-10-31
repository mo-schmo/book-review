import '../stylesheets/Navigation.scss'
import React, { Component, useState } from 'react';
import { Layout, Menu, Input } from 'antd';
import {
  UserOutlined,
  OrderedListOutlined,
  CheckSquareFilled,
} from '@ant-design/icons';
import {GiBookshelf} from "react-icons/gi";
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
 
const Navigation = () => {
    const [theme, setTheme] = useState('dark')


    return (
        <Sider
            style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            }}
        >
            <div className="logo d-flex">
                <GiBookshelf color="white" size={30} className="align-self-baseline"/>
                <h4 className="text-white m-1">
                    Ilm-ul-Kitab
                </h4>
            </div>
            <Menu theme={theme} mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    <Link to="/profile">Profile</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<CheckSquareFilled />}>
                    <Link to="/done">Completed</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<OrderedListOutlined />}>
                    <Link to="/wish">Reading List</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default Navigation;