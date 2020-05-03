import React from 'react';
import './App.css';
import 'typeface-roboto';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboards from './components/dashboard/Dashboard';
import SignIn from "./components/SignIn/SignIn"



class App extends React.Component {

  render(){
  return (
    <div className="App">
<Router>

          <Switch >
            <Route path="/Dashboard" component={Dashboards}/>
            <Route path="/" component={SignIn} />          
          </Switch>
        </Router>
    </div>
    
  );
}}

export default App;
