import React from 'react';
import './App.css';
import 'typeface-roboto';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginView from './components/signPage/LoginPage';
import Dashboard from './components/dashboard/Dashboard';



function App() {
  return (
    <div className="App">

<Router>

          <Switch>
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/" component={LoginView} />
          </Switch>
        </Router>
 
    </div>
  );
}

export default App;
