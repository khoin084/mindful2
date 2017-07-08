import React from 'react';
import api from '../../utils/API'

class Results extends React.Component {
    constructor (props) {
        super(props);

        this.state = 
        {
            title:"", 
            link:""
        }; 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeLink = this.handleChangeLink.bind(this);
    }
    //event decttection for form
    handleChangeTitle(event) {
        console.log("****: " + event.target.value);
        console.log(this);
        this.setState({title: event.target.value});
    }

    handleChangeLink(event) {
        console.log("****: " + event.target.value);
        console.log(this);
        this.setState({link: event.target.value});
    }
    renderDefault () {
        console.log("about to render default");
        return (
            <div>
                <h1>Click one of the icons above to get started</h1>
            </div>
        );
    }
    renderWeather () {
        console.log("about to render detailed weather report");
        return (
            <div>
                <strong>
                <i className="fa fa-truck" aria-hidden="true"></i>
                <h1 className="weather-data">{this.props.tempInF}</h1>
                </strong>
                <h1 className="weather-data">{this.props.humidity}</h1>
            </div>
        );
    }
    renderNews () {
        console.log("about to render news articles");
        const articleResults = this.props.articles.docs.map((article, index) => {
            return (
                <div key={index}>
                <li className="list-group-item">
                    <h3>
                    <span>
                        <em>{article.headline.main}</em>
                    </span>
                    <span className="btn-group pull-right">
                        <a href={article.web_url} rel="noopener noreferrer" target="_blank">
                        <button className="btn btn-default ">View Article</button>
                        </a>   
                    </span>
                    </h3>
                    <p>Date Published: {article.pub_date}</p>

                </li>

                </div>
            );
        });
        return ( 
            <ul className="col-md list-group">
                {articleResults}
            </ul>
        );
    }
    renderAudio () {
        console.log("audio found: ", this.props.audioLinks);
        const audioResults = this.props.audioLinks.data.map((audio, index) => {
            return (
                <div key={index}>
                    <li className="list-group-item">
                        <h3>
                        <span>
                            <em>{audio.title}</em>
                        </span>
                        <span className="btn-group pull-right">
                            <a href={audio.link} rel="noopener noreferrer" target="_blank">
                            <button className="btn btn-default">Listen</button>
                            </a>   
                        </span>
                        </h3>
                    </li>
                </div>
            );
        });
        return (
            <div>
                <label><b>Title</b></label>
                <input 
                    type="text" 
                    value={this.state.title}
                    className="form-control"
                    placeholder="Title of Meditation" 
                    onChange={this.handleChangeTitle} 
                    name="username"
                    required />

                <label><b>Link</b></label>
                <input 
                    type="text" 
                    value={this.state.link}
                    className="form-control"
                    placeholder="Link..." 
                    onChange={this.handleChangeLink}
                    name="email" 
                    required /> 
                <div className="clearfix">
                    <button type="submit" className="logAudio" onClick={this.handleSubmit}>Store Audio</button>
                </div>
                <ul className="col-md list-group">
                    {audioResults}
                </ul>
            </div>
        );
    }
    // This code handles the sending of the entered user information from the Signup component.
    handleSubmit(event) {
        event.preventDefault();
        console.log("CLICKED");
        console.log(this.state)
        api.saveAudio(this.state);
        
        this.handleClearForm(event);
    }
    //clears the form after a submit click
    handleClearForm(event) {
        event.preventDefault();
        this.setState({
        title: "",
        link:"",
        });
        return this.renderAudio();
    }
    render () {
        console.log(this);
        // If we have no articles, render this HTML
        if (this.props.newsClicked) {
           return this.renderNews();
        }
        else if(this.props.weatherClicked) {
            return this.renderWeather();
        }
        else if(this.props.audioClicked) {
            return this.renderAudio();
        }
        else {
            return this.renderDefault();
        }
        
    }
}    
export default Results;