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
      <Layout style={{minHeight: '100vh'}}>
        <Navigation/>
        <Layout style={{ marginLeft: 200 }}>
          <MyHeader/>
          <Main/>
          <MyHeader/>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
