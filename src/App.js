import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Users from "./components/Users.jsx";
import Inicio from "./components/Inicio";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <NavLink
            to="/users"
            className="btn btn-dark"
            activeClassName="active"
          >
            Usuarios y total de localidades
          </NavLink>
        </div>
        <hr />
        <Switch>
          <Route path="/users">
            <Users />
          </Route>

          <Route path="/" exatct>
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
