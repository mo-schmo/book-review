import './App.scss';
import './stylesheets/theme.scss'
import Navigation from './components/Navigation';
import {useState} from 'react';
import { Layout, Menu, Input } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  BookOutlined
} from '@ant-design/icons';
import MyHeader from './components/MyHeader';
import Main from './components/Main';

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input
 

function App() {
  const [theme, setTheme] = useState('dark')


  return (
    <div className="App">
        <Layout>
          <Navigation/>
          <Layout className={`site-layout ${theme}`} style={{ marginLeft: 200 }}>
            <MyHeader/>
            <Main/>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
      </Layout>
    </div>
  );
}

export default App;
