import './App.scss';
import './stylesheets/theme.scss'
import Navigation from './components/Navigation';
import {useState} from 'react';
import { Layout, Input } from 'antd';
import MyHeader from './components/MyHeader';
import Main from './components/Main';

const { Footer } = Layout;


function App() {
  const [theme, setTheme] = useState('dark')


  return (
    <div className="App">
        <Layout>
          <Navigation/>
          <Layout className={`site-layout ${theme}`} style={{ marginLeft: 200 }}>
            <MyHeader/>
            <Main/>
            <Footer style={{ textAlign: 'center' }}>
            </Footer>
          </Layout>
      </Layout>
    </div>
  );
}

export default App;
