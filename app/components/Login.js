import React, { Component } from 'react';
// Include the helpers for making API calls
import api from '../utils/API'

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
    });
  }
  // This code handles the sending of the entered user information from the Signup component.
  handleSubmit(event) {
    event.preventDefault();
    console.log("CLICKED");
    console.log(this.state)
    console.log(api.getQuotes());
    api.passport(this.state).then((results) => {
      console.log("response from the backend: ", results);
      if(results.data === "Credentials accepted!") {
        this.setState({isLoggedIn: true});
      }
      else {
        this.setState({isLoggedIn: false});
      }
    });

    this.handleClearForm(event);
  }

  componentDidMount() {
    console.log("mounted the Login component");
    console.log("current state: ", this.state);
  }

  isUserLoggedIn(props) {
    
    return <h1>Please fill in your credentials to login.</h1>;
  }

  // UserGreeting(props) {
  //   return <h1>Welcome back!</h1>;
  // }

  // GuestGreeting(props) {
  //   return <h1>Please sign up.</h1>;
  // }

  // Greeting(props) {
  //   const isLoggedIn = props.isLoggedIn;
  //   if (isLoggedIn) {
  //     return <UserGreeting />;
  //   }
  //   return <GuestGreeting />;
  // }
  // Render the component. Note how we deploy both the Input and the Quotes Components
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    console.log(isLoggedIn);
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
}

// Export the module back to the route
export default Login;