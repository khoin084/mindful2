import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";


import Main from "../components/Main";
import Signup from "../components/Signup";
import Login from "../components/Login"
import Combiner from "../components/Combiner";
import Dashboard from "../components/Dashboard";
import VrYoutube from "../components/VrYoutube";

// Using just one route for now
// NOTE: browserHistory only works when run with a server
// build the webpack project, start the server, and navigate to localhost:3000
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      {/* If user selects either Login or Signup */}
      <Route path="Signup" component={Signup} />
      <Route path="Login" component={Login} />
      <Route path="Dashboard" component={Dashboard} />
      <Route path="VrYoutube" component={VrYoutube} />
      {/* If user selects Search or Saved show the appropriate component */}
      <IndexRoute component={Combiner} />
      
    </Route>
  </Router>
);

export default routes;
