import React from "react";
import NavBaritem from './Component/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './home';




export default function App() {
  return (

    <Router>
      <div className="App">
       <NavBaritem/>
        <Switch>
       
          <Route path="/" component={Home} />
       
        </Switch>
        </div>
    </Router>
  );
}

