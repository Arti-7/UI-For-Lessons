import React from 'react';
import './App.css';
import 'typeface-roboto';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginView from './components/signPage/LoginPage';
import Dashboard from './components/dashboard/Dashboard';
import secondCopyLP from './components/signPage/secondCopyLP';
import thirdCopy from "./components/signPage/thirdCopy";
import EditCourse from "./components/courses/EditCourse";
import useStyles from "./components/signPage/newLogin"





function App() {
  return (
    <div className="App">
<Router>

          <Switch >
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/courses/:id" component={EditCourse} />
            <Route path="/" component={useStyles} />          
          </Switch>
        </Router>
    </div>
    
  );
}

export default App;
