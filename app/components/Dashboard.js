import React, { Component } from 'react';
// Include the helpers for making API calls
import api from '../utils/API'
// Include children components.
import SideBar from "./children_dashboard/SideBar"
import MainSection from "./children_dashboard/MainSection"


// Create the Search component
class Dashboard extends Component {

  constructor (props) {
    super(props);

    this.state = { populated: false};
  }

  

  // shouldComponentUpdate: function () {
  //   console.log("determine if we should render again?");
  //   return true;
  // },

  componentDidMount() {
    console.log("mounted Dashboard");
  }

  // Render the component. Note how we deploy both the Input and the Quotes Components
  render() {
    console.log("state: ", this.state.term);

    return (
      <div className="main-container">

        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        {/* Note how we pass in the results into this component */}
        <SideBar />
        <MainSection />
      </div>
    );
  }
}

// Export the module back to the route
export default Dashboard;