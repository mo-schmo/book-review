import { Layout, Menu, Input } from 'antd';
import { useState } from 'react';
import '../stylesheets/Main.scss';




const { Header, Content, Footer, Sider } = Layout;

const Main = () => {
    const [theme, setTheme] = useState('light')

    return (
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className={`Main ${theme}`} style={{ padding: 24, textAlign: 'center' }}>
                
            </div>
        </Content>
    )
}

export default Main;