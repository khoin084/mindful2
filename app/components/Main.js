import React from "react";

// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;

// very basic component to get started
class Main extends React.Component {


  render() {
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
              <a href="/auth/google" className="btn btn-danger"><span className="fa fa-google-plus"></span> Google </a>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
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
