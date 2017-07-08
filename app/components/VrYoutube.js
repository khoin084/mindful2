import React, { Component } from 'react';
// Include children components.
import SearchBar from "./children_youtube/SearchBar"
import VideoDetails from "./children_youtube/VideoDetails"
// import VideoListItem from "./children_youtube/VideoListItem"
import VideoList from "./children_youtube/VideoList"
//package used for youtube video searches
import YTSearch from 'youtube-api-search'
const apiKeyYoutube = 'AIzaSyCD3NwnV96F2gwJ2MlNfXenHxCjNhV7XHs';


// Include the helpers for making API calls
var API = require("../utils/API");

// Create the Search component
class VrYoutube extends Component {

  constructor (props) {
    super(props);

    this.state = { 
      selectedVideo: null,
      videos: [] 
  };

    YTSearch({key:apiKeyYoutube, term:'google cardboard vr'}, (video) => {
        this.setState({
          video: video
        });
    });
  }

  componentDidMount() {
    console.log("mounted the VR Youtube");
  }

  // Render the component. Note how we deploy both the Input and the Quotes Components
  render() {
    console.log(this.state.videos);
    return (
      <div className="yt-container">

        {/* render the search bar */}
        <SearchBar />
        <VideoDetails video={this.state.video} />
        {/* passing data from parent to child */}
      
      </div>
    );
  }
}

// Export the module back to the route
export default VrYoutube;

