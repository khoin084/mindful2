import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";
// Include the helpers for making API calls
import api from '../../utils/API'
import VrYoutube from '../VrYoutube'

// very basic component to get started
class SideBar extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = 
        {
            username:"", 
            email:"",
            city:""
        };
        this.getLoggedInUser();
        this.handleClick = this.handleClick.bind(this);
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

    // This code handles the sending of the entered user information from the Signup component.
    handleClick(event) {
        event.preventDefault();
        console.log("CLICKED");
        browserHistory.push('/VrYoutube');
        return (
        <h1> </h1>
        );
        
    }

    render() {
        return ( 
            <div className="sidebar">
                {/*<!--sidebar start-->*/}
                <aside>
                    <div id="sidebar"  className="nav-collapse ">
                        {/*<!-- sidebar menu start-->*/}
                        <ul className="sidebar-menu" id="nav-accordion">
                            <p className="centered"><a href="profile.html"><img src="assets/img/ui-zac.jpg"className="img-circle" width="60" /></a></p>
                            <h5 className="centered">{this.state.username}</h5>
                            <h5 className="centered">{this.state.email}</h5>
                            <h5 className="centered">{this.state.city}</h5>
                        </ul>
                        {/*<!-- sidebar menu end-->*/}
                        <button type="submit" className="btn btn-primary" onClick={this.handleClick}>YouTube</button>
                        <a href="./../../../city_vr/vr-index.html" target="_blank" className="btn btn-primary">VR</a>
                    </div>
                </aside>
                {/*<!--sidebar end-->*/}
            </div>
        );
    }
};

export default SideBar;