import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory } from "react-router";
// Include the helpers for making API calls
import api from '../utils/API'
import Login from './Login'


// Create the Search component
class Signup extends Component {

  constructor (props) {
    super(props);

    this.state = 
    {
        username: "",
        email:"",
        city:"",
        password: "",
        psw_repeat: ""
    };
    //maintain context of the object.
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeRPassword = this.handleChangeRPassword.bind(this);
  }
  
  //event decttection for form
  handleChangeUsername(event) {
    console.log("****: " + event.target.value);
    console.log(this);
    this.setState({username: event.target.value});
  }

  handleChangeEmail(event) {
    console.log("****: " + event.target.value);
    console.log(this);
    this.setState({email: event.target.value});
  }

  handleChangeCity(event) {
    console.log("****: " + event.target.value);
    console.log(this);
    this.setState({city: event.target.value});
  }

  handleChangePassword(event) {
    console.log("****: " + event.target.value);
    console.log(this);
    this.setState({password: event.target.value});
  }

  handleChangeRPassword(event) {
    console.log("****: " + event.target.value);
    console.log(this);
    this.setState({psw_repeat: event.target.value});
  }
  //clears the form after a submit click
  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      username: "",
      email:"",
      password: "",
      psw_repeat: ""
    });
    console.log("about to go to login page");
    return this.renderLogin();
  }
  // This code handles the sending of the entered user information from the Signup component.
  handleSubmit(event) {
    event.preventDefault();
    console.log("CLICKED");
    console.log(this.state)
    api.saveSignUp(this.state);
    
    this.handleClearForm(event);
  }

  componentDidMount() {
    console.log("mounted the Signup component");
  }

  // A helper method for rendering a container to hold all of our articles
  renderLogin() {

    browserHistory.push('/login');
    return (
      <h1> </h1>
    );
  }

  // Render the component. Note how we deploy both the Input and the Quotes Components
  render() {
    console.log(this.state);

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

      <label><b>Email</b></label>
      <input 
        type="text" 
        value={this.state.email}
        className="form-control"
        placeholder="Enter Email" 
        onChange={this.handleChangeEmail}
        name="email" 
        required />

      <label><b>City of Resisdence</b></label>
      <input 
        type="text" 
        value={this.state.city}
        className="form-control"
        placeholder="Enter Your City of Resisdence" 
        onChange={this.handleChangeCity}
        name="city" 
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

      <label><b>Repeat Password</b></label>
      <input 
        type="password" 
        value={this.state.psw_repeat}
        className="form-control"
        placeholder="Repeat Password" 
        onChange={this.handleChangeRPassword}
        name="psw_repeat" 
        required />
      
      
      <input type="checkbox" checked="checked" /> Remember me
      <p>By creating an account you agree to our <a href="#">
      Terms & Privacy</a>.</p>

      <div className="clearfix">
          <button type="button"  className="cancelbtn">Cancel</button>
          <button type="submit" className="signupbtn" onClick={this.handleSubmit}>Sign Up</button>
      </div>
    </form>
    );
  }
}

// Export the module back to the route
export default Signup;