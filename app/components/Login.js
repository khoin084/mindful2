import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory } from "react-router";
// Include the helpers for making API calls
import api from '../utils/API'
import Dashboard from './Dashboard'

// Create the Search component
class Login extends Component {

  constructor (props) {
    super(props);

    this.state = 
    {
      username: "",
      password: "",
      isLoggedIn: false
    };
  
    //maintain context of the object.
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }
  
  //event decttection for form
  handleChangeUsername(event) {
    console.log("****: " + event.target.value);
    console.log(this);
    this.setState({username: event.target.value});
  }

  handleChangePassword(event) {
    console.log("****: " + event.target.value);
    console.log(this);
    this.setState({password: event.target.value});
  }

  //clears the form after a submit click
  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      username: "",
      password: "",
      loggedIn: false
    });
  }
  // This code handles the sending of the entered user information from the Signup component.
  handleSubmit(event) {
    event.preventDefault();
    console.log("CLICKED");
    console.log(this.state)
    api.passport(this.state).then((results) => {
      console.log("response from the backend: ", results);
      //this conditional will not work 
      if(results.data !== "Password incorrect") {
        console.log("credentials accpeted!");
        this.setState({loggedIn: true});
        // call user defined method to update isLoggedIn model property.
        this.updateUserStatusInDB(results.data);
      }
      else {
        this.setState({loggedIn: false});
      }
    });

    this.handleClearForm(event);
  }

  updateUserStatusInDB (user) {
    console.log("validated user");
    //updating user isLoggedIn property
    api.userAccepted(user).then((results) => {
      console.log(results);
    });
  }

  componentDidMount() {
    console.log("mounted the Login component");
    console.log("current state: ", this.state);
  }
  // A helper method for rendering a container to hold all of our articles
  renderDashboard() {

    browserHistory.push('/dashboard');
    return (
      <h1> </h1>
    );
  }
  // Render the component. Note how we deploy both the Input and the Quotes Components
  render() {
   
    if (!this.state.loggedIn) {
      return (
      <form className="formContainer">   
        
        <label><b>Username</b></label>
        <input 
          type="text" 
          value={this.state.username}
          className="form-control"
          placeholder="Enter Username" 
          onChange={this.handleChangeUsername} 
          name="username"
          required />

        <label><b>Password</b></label>
        <input 
          type="password"
          value={this.state.password}
          className="form-control"
          placeholder="Enter Password" 
          onChange={this.handleChangePassword}
          name="psw" 
          required />
        
        <input type="checkbox" checked="checked" /> Forgot password?
        <p>By creating an account you agree to our <a href="#">
        Terms & Privacy</a>.</p>

        <div className="clearfix">
            <button type="button"  className="cancelbtn">Cancel</button>
            <button type="submit" className="signupbtn" onClick={this.handleSubmit}>Login</button>
        </div>
      </form>
      );
    }
    // If we have articles, return this.renderContainer() which in turn, returns all the articles
    return this.renderDashboard();
    
  }
}

// Export the module back to the route
export default Login;