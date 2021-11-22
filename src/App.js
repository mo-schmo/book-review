import React from 'react';
import Main from './components/Main';
import { Landing } from './components/Landing'
import {Route, Switch} from 'react-router-dom';
import { ProtectedRoute} from './components/ProtectedRoute';
import { Register } from './components/Register';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <ProtectedRoute exact path="/main" component={Main}/>
        <Route path="*" component = {() => "404 Not Found"}></Route>
      </Switch>
    </div>
  );
}

export default App;
