import React from 'react';
import Main from './components/Main';
import { Landing } from './components/Landing'
import {Route, Switch} from 'react-router-dom';
import { ProtectedRoute} from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing}/>
        <ProtectedRoute exact path="/main" component={Main}/>
        <Route path="*" component = {() => "404 Not Found"}></Route>
      </Switch>
    </div>
  );
}

export default App;
