import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory } from "react-router";
// Include the helpers for making API calls
import api from '../utils/API'
import Login from './Login'
let errors = [];

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
    self = this;
    console.log("about to go to login page");
    return this.renderLogin();
  }
  // This code handles the sending of the entered user information from the Signup component.
  handleSubmit(event) {
    event.preventDefault();
    console.log("********");
    console.log("CLICKED ");
    
    if(this.state.username === ""){
      errors.push("Username filled is empty");
    }
    if(this.state.email === "") {
      errors.push("Email is empty");
    }
    if(this.state.password === "" && this.state.password.length < 8 ) {
      errors.push("Password needs to be atleast 8 characters long");
    }
    if(this.state.password !== this.state.psw_repeat) {
      erros.push("Passwords dont match!");
    }
    if(errors.length === 0) {
      api.saveSignUp(this.state);
      this.handleClearForm(event);
    }
    console.log("accumulated errors: ", errors);
    this.setState({
      username: "",
      email:"",
      password: "",
      psw_repeat: ""
    });
    
  }
  handleCancel() {
    browserHistory.push('/');
    return (
      <h1> </h1>
    );
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
    console.log("accumulated errors: ", errors);
    const errorResults = errors.map((error, index) => {
      return (
          <div key={index}>
          <li className="list-group-item">
              <button className="btn-danger">{error}</button>
          </li>
          </div>
        );
    });
    //empty the array
    errors.splice(0, errors.length);
    return (
    <div className="form-top">
      <h3 className="signup-header">Sign Up</h3>
      <p className="signup-header">Fill out the form to get started.</p>
      {errorResults}
      <form className="formContainer">   
        <label><b>Username</b></label>
        <input 
          type="text" 
          value={this.state.username}
          className="form-control"
          placeholder="Create a Username" 
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

        <label><b>City of Residence</b></label>
        <input 
          type="text" 
          value={this.state.city}
          className="form-control"
          placeholder="City of Residence" 
          onChange={this.handleChangeCity}
          name="city" 
          required />

        <label><b>Password</b></label>
        <input 
          type="password"
          value={this.state.password}
          className="form-control"
          placeholder="Create a Password" 
          onChange={this.handleChangePassword}
          name="psw" 
          required />

        <label><b>Repeat Password</b></label>
        <input 
          type="password" 
          value={this.state.psw_repeat}
          className="form-control"
          placeholder="Confirm Password" 
          onChange={this.handleChangeRPassword}
          name="psw_repeat" 
          required />
        
        
        <p className="remember-me"><input type="checkbox" checked="checked" /> Remember me</p>
        <p className="disclaimer">By creating an account you agree to our <a href="#">
        Terms & Privacy</a>.</p>

        <div className="clearfix">
            <button type="button"  className="cancelbtn"onClick={this.handleCancel}>Cancel</button>
            <button type="submit" className="signupbtn" onClick={this.handleSubmit}>Sign Up</button>
        </div>
      </form>
    </div>
    );
 
  }

}

// Export the module back to the route
export default Signup;