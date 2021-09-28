import React from "react";
import MoviesNew from "./Components/MoviesNew";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Signin from "./Components/Signin";


import People from "./Components/People";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    
      <Router>
        <Navbar />

        <Switch>
          <Route path="/">
            <Signin />
            <MoviesNew />
            <People />
          </Route>
        </Switch>
      </Router>

      
    
  );
}

export default App;
