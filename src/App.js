import './App.scss';
import './stylesheets/theme.scss'
import Header from './components/Header';
import {useState} from 'react';

function App() {
  const [theme, setTheme] = useState('dark')


  return (
    <div className={`App ${theme}`}>
      <Header></Header>
    </div>
  );
}

export default App;
