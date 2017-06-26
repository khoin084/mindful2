import React, { Component } from 'react';

// Include children components.
import Subheader from "./children/Subheader"
import Section1 from "./children/Section1"
import Features from "./children/Features"
import Footer from "./children/Footer"

// Include the helpers for making API calls
var API = require("../utils/API");

// Create the Search component
class Combiner extends Component {

  constructor (props) {
    super(props);

    this.state = { term: 'What be crackin with the mackin'};
  }

  getQuotes() {
    API.getQuotes().then(function(quotesData) {
        console.log("Quots.js to QuotesPanel.js" , quotesData);
        this.setState({ quotes: quotesData.data });
        console.log("new state of quotes: ", this.state.quotes);
        console.log("saved quotes: ", quotesData.data);
        
    }.bind(this));
  }

  // shouldComponentUpdate: function () {
  //   console.log("determine if we should render again?");
  //   return true;
  // },

  componentDidMount() {
    console.log("snap-it mounted");
  }

  // Render the component. Note how we deploy both the Input and the Quotes Components
  render() {
    console.log("state: ", this.state.term);

    return (
      <div className="main-container">

        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <Subheader />
        {/* Note how we pass in the results into this component */}
        <Section1 />
        <Features />
        <Footer />
      </div>
    );
  }
}

// Export the module back to the route
export default Combiner;