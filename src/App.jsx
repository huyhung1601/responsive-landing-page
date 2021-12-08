import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
