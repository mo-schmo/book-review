import { Layout, Menu, Input } from 'antd';
import { useState } from 'react';
import { Route } from 'react-router';
import Profile from './Profile';
import CompletedBooks from './CompletedBooks'
import '../stylesheets/Main.scss';
import WishList from './WishList';
import { Switch } from 'react-router-dom';




const { Header, Content, Footer, Sider } = Layout;

const Main = () => {
    const [theme, setTheme] = useState('light')
    
    return (
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className={`Main ${theme}`} style={{ padding: 24, textAlign: 'center' }}>
                <Route path="/profile" component={Profile}/>
                <Route path="/done" component={CompletedBooks}/>
                <Route path="/wish" component={WishList}/>
            </div>
        </Content>
    )
}

export default Main;