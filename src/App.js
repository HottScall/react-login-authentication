import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { AuthContext } from "./context/auth";

function App(props) {
  return (
    <AuthContext.Provider value={false}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <Link to="/Admin">Admin</Link>
            <li></li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/admin" component={Admin} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
