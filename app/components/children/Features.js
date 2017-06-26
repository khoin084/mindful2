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
                                <img src="images/macbook.png" alt="Free HTML5 Bootstrap Template by FREEHTML5.co"/>
                            </figure>
                        </div>
                        <div className="col-md-6 col-md-pull-6">
                            <span className="fh5co-label animate-box">See Features</span>
                            <h2 className="fh5co-lead animate-box">Superb Features</h2>
                            <div className="fh5co-feature">
                                <div className="fh5co-icon animate-box"><i className="icon-check2"></i></div>
                                <div className="fh5co-text animate-box">
                                    <h3>Beautiful Typography</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                </div>
                            </div>
                            <div className="fh5co-feature">
                                <div className="fh5co-icon animate-box"><i className="icon-check2"></i></div>
                                <div className="fh5co-text animate-box">
                                    <h3>Eco Friendly</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                </div>
                            </div>
                            <div className="fh5co-feature">
                                <div className="fh5co-icon animate-box"><i className="icon-check2"></i></div>
                                <div className="fh5co-text animate-box">
                                    <h3>Wide and Boxed</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                </div>
                            </div>

                            <div className="fh5co-btn-action animate-box">
                                <a href="#" className="btn btn-primary btn-cta">More Features</a>
                            </div>

                        </div>
                    </div>
            </section>
        </div>
	
    );
  }
};

export default Features;