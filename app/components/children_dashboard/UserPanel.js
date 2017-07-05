import React from "react";
// link boostrap to use component 'Modal'
import Modal from "react-bootstrap";
import api from '../../utils/API';
import Results from './Results';
let weatherInfo;
// Very basic component to get started
class UserPanel extends React.Component {
    constructor (props) {
    super(props);

    this.state = 
    {
        username:"", 
        email:"",
        city:"",
        tempInF:"",
        humidity:"",
        weatherClicked: false, 
        newsClicked:false, 
        savedArticles:""
    };
        //getting user logged information from the get go.
        this.getLoggedInUser();
        this.handleWeatherClick = this.handleWeatherClick.bind(this);
        self = this;
        // this.handleChangeUsername = this.handleChangeUsername.bind(this);
        // this.handleChangePassword = this.handleChangePassword.bind(this);
    }
    getLoggedInUser() {
        //go to he backend and get them users mang.
        api.getAllUsers().then(function(allUsers) {
            console.log("All users in the DB" , allUsers);
            //cycle returned promise of users and find the one with the property isLoggedIn: true.
            let loggedIn = allUsers.data.map((user) => {
                if(user.isLoggedIn) {
                    console.log("found person: ", user);
                    this.setState({ 
                        username: user.username, 
                        email: user.email,
                        city: user.city
                    });
                }
            }); 
        }.bind(this));
    }
    handleWeatherClick() {
        let temp;
        console.log("clicked cloud!");
        console.log("city: " + this.state.city);
        //passing user logged in city to weather API
        api.getWeather(this.state.city).then(function(results) {
            console.log(results.data.main);
            temp = results.data.main.temp * (9/5) - 459.67;
            console.log("temp in F: " + temp.toFixed(2));
            this.setState({
                tempInF: temp.toFixed(2),
                humidity: results.data.main.humidity,
                weatherClicked: true, 
                newsClicked: false
            });
        }.bind(this));
    }
    handleNewsClick() {
        console.log("clicked news!");
        api.getNews().then(function (results) {
            console.log("returns from NY times: ", results.docs);
            console.log("before: ", self.state.savedArticles);
            console.log(self);
            self.setState({ 
                savedArticles: { docs: results.docs }, 
                newsClicked: true,
                weatherClicked: false
            });
            console.log("after: ", self.state.savedArticles);
        });
        //calling the open modal method.
       
    }
    // Our render method. Utilizing a few helper methods to keep this logic clean
    render() {
        // If we have articles, return this.renderContainer() which in turn returns all saves articles
        return ( 
            <div className="mainSection">
                {/*<!--main content start-->*/}
                <section id="main-content">
                    <section className="wrapper">
                        <div className="row">
                            <div className="col-lg-9 main-chart">
                                <div className="row mtbox">
                                    <div className="col-md-2 col-sm-2 col-md-offset-1 box0">
                                        <div className="box1">
                                            <span className="li_heart"></span>
                                            <h3>933</h3>
                                        </div>
                                        <p>933 People liked your page the last 24hs. Whoohoo!</p>
                                    </div>
                                    <div className="col-md-2 col-sm-2 box0">
                                        <div className="box1">
                                            <p>Click for Weather</p>
                                            <span className="li_cloud" onClick={this.handleWeatherClick}></span>
                                            <h3>{this.state.tempInF}</h3>
                                            <h3>{this.state.humidity}</h3>
                                        </div>
                                        <p>{this.state.city}</p>
                                        <p></p>
                                    </div>
                                    <div className="col-md-2 col-sm-2 box0">
                                        <div className="box1">
                                            <p>Click for Audio Files</p>
                                            <span className="li_stack"></span>
                                            <h3>23</h3>
                                        </div>
                                        <p>Level up with Every session.</p>
                                    </div>
                                    <div className="col-md-2 col-sm-2 box0">
                                        <div className="box1">
                                            <p>Click for News</p>
                                            <span className="li_news" onClick={this.handleNewsClick}></span>
                                            <h3>+10</h3>
                                        </div>
                                        <p>Access Top News</p>
                                    </div>
                                    <div className="col-md-2 col-sm-2 box0">
                                        <div className="box1">
                                            <span className="li_data"></span>
                                            <h3>OK!</h3>
                                        </div>
                                        <p>Your server is working perfectly. Relax & enjoy.</p>
                                    </div>
                                </div>
                                <div className="main-container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="panel panel-primary">
                                            <div className="panel-heading">
                                                <h1 className="panel-title">
                                                <strong>
                                                    <i className="fa fa-btc" aria-hidden="true"></i> Mindfulness - The Art of Retracting Oneself from the Busy</strong>
                                                </h1>
                                            </div>
                                            <div className="panel-body">
                                                <ul className="list-group">
                                                    <Results 
                                                        articles={this.state.savedArticles}
                                                        weatherClicked={this.state.weatherClicked}
                                                        tempInF={this.state.tempInF}
                                                        humidity={this.state.humidity}
                                                        newsClicked={this.state.newsClicked}
                                                    />
                                                
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        );
    }
};

export default UserPanel;