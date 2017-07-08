import React from "react";
import api from '../utils/API'
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;
import { Route, IndexRoute, Router, browserHistory } from "react-router";
let flag = true;

// very basic component to get started
class Main extends React.Component {

  constructor (props) {
    super(props);
    this.state = 
    {
        logOut:false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  getLoggedInUser() {
    //go to he backend and get them users mang.
    api.getAllUsers().then(function(allUsers) {
      console.log("All users in the DB" , allUsers);
      //cycle returned promise of users and find the one with the property isLoggedIn: true.
      let loggedIn = allUsers.data.map((user) => {
        if(user.isLoggedIn) {
          console.log("found person (from main): ", user);
          this.setState({logOut: true});
          api.logOutUser(user);
        }
      }); 
    }.bind(this));
  }
  // This code handles the sending of the entered user information from the Signup component.
  handleClick(event) {
      event.preventDefault();
      console.log("CLICKED Logged Out.");
      this.getLoggedInUser();
      browserHistory.push('/');
  }
  render() {
  const logOutBtn = this.state.logOut ? null : (<li><Link to="/" onClick={this.handleClick}>Log Out</Link></li>)

  return ( 
    <div>
      <nav className="navbar navbar-success" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-ex1-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Mindfulness</Link>
          </div>

          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav navbar-right">
              {/* Using <Link> in place of <a> and "to" in place of "href" */}
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
              {logOutBtn}
            </ul>
          </div>
        </div>
        

      </nav>

      {/* Here we will deploy the sub components (Search or Saved */}
      {/* These sub-components are getting passed as this.props.children */}
      {this.props.children}

    </div>

		
    );
  }
};

export default Main;
