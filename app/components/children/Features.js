import React from "react";


// very basic component to get started
class Features extends React.Component {


  render() {
  return ( 
        <div id="featureContainer">
            <section id="fh5co-features-2">
                    <div className="container">
                        <div className="col-md-6 col-md-push-6">
                            <figure className="fh5co-feature-image animate-box">
                                <img src="images/macbook.png"/>
                            </figure>
                        </div>
                        <div className="col-md-6 col-md-pull-6">
                            <h2 className="fh5co-lead animate-box">Features</h2>
                            <div className="fh5co-feature">
                                <div className="fh5co-icon animate-box"><i className="icon-check2"></i></div>
                                <div className="fh5co-text animate-box">
                                    <h3>Virtual Reality</h3>
                                    <p>Gain full access to the virtual reality library. Enhance your mindful experience by taking your mind to your virtual 'happy place.'</p>
                                </div>
                            </div>
                            <div className="fh5co-feature">
                                <div className="fh5co-icon animate-box"><i className="icon-check2"></i></div>
                                <div className="fh5co-text animate-box">
                                    <h3>Point System</h3>
                                    <p>Earn points as you develop your mindfulness abilities to unlock more content.</p>
                                </div>
                            </div>
                            <div className="fh5co-feature">
                                <div className="fh5co-icon animate-box"><i className="icon-check2"></i></div>
                                <div className="fh5co-text animate-box">
                                    <h3>Dashboard</h3>
                                    <p>Track your progress, check the weather, schedule events, access audio and V.R. libaries and more.</p>
                                </div>
                            </div>

                        </div>
                    </div>
            </section>
        </div>
	
    );
  }
};

export default Features;