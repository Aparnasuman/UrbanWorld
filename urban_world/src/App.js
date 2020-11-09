import React from "react";
import NavBaritem from './Component/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './home';
import Sofa from './Component/sofa';
import Table from './Component/Table';
import LoginForm from './Component/Loginform';


export default function App() {
  return (

    <Router >
      <div className="App">
        <NavBaritem />
        <Switch>
          <Route path="/sofa" component={Sofa} />
          <Route path="/table" component={Table} />
          <Route path="/sign" component={LoginForm} />
          <Route path="/" component={Home} />

        </Switch>
      </div>
    </Router>
  );
}

