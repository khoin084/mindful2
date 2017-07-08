import React, { Component } from 'react';
import api from '../../utils/API'
// Youtube API Key
const apiKeyYoutube = 'AIzaSyCD3NwnV96F2gwJ2MlNfXenHxCjNhV7XHs';
//package used for youtube video searches
import YTSearch from 'youtube-api-search'

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm: ''};
        this.searchChanged = this.searchChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.getYoutubeVideos = this.getYoutubeVideos.bind(this);
    }

    componentDidMount() {
        console.log("mounted the youtube search bar");
    }

    searchChanged (event) {
        console.log(event.target.value);
        this.setState({ searchTerm: event.target.value});

    }

    //clears the form after a submit click
    handleClearForm(event) {
        event.preventDefault();
        this.setState({
        searchTerm: ''
        });
    }
    // This code handles the sending of the entered user information from the Signup component.
    handleSubmit(event) {
        event.preventDefault();
        console.log("CLICKED");
        console.log(this.state)
        this.getYoutubeVideos(this.state.searchTerm);
    }

    getYoutubeVideos (term) {
        console.log("youtube search for videos");
        YTSearch({key:apiKeyYoutube, term:'surfboards'}, function (data) {
        console.log(data);
        });
    }

    render () {
        return (
            <div className="search-bar-top">
            {/*controlled component logic to trigger event and setState actually renders new state.*/}
            <input onChange = {this.searchChanged} />
            <button type="submit" onClick={this.handleSubmit}>Search</button>
            </div>
        
        );
    }
}

export default SearchBar;