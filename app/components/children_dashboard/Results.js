import React from 'react';

class Results extends React.Component {
    constructor (props) {
        super(props);

        this.state = 
        {
            test:""
        }; 
    }
    renderDefault () {
        console.log("about to render default");
        return (
            <div>
                <h1>Be the Blank Slate...</h1>
            </div>
        );
    }
    renderWeather () {
        console.log("about to render detailed weather report");
        return (
            <div>
                <strong>
                <i className="fa fa-truck" aria-hidden="true"></i>
                <h1>{this.props.tempInF}</h1>
                </strong>
                <h1>{this.props.humidity}</h1>
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
    render () {
        console.log(this);
        // If we have no articles, render this HTML
        if (this.props.newsClicked) {
           return this.renderNews();
        }
        else if(this.props.weatherClicked) {
            return this.renderWeather();
        }
        else {
            return this.renderDefault();
        }
        
    }
}    
export default Results;