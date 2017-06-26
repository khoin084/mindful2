import React, { Component } from 'react';


// very basic component to get started
class Footer extends Component {


  render() {
  return ( 
        <div id="footerContainer">
            <footer id="fh5co-footer">
                <div className="container">
                    <div className="row row-bottom-padded-md">
                        <div className="col-md-3 col-sm-6 col-xs-12 animate-box">
                            <div className="fh5co-footer-widget">
                                <h3>Company</h3>
                                <ul className="fh5co-links">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Feature Tour</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Team</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-md-3 col-sm-6 col-xs-12 animate-box">
                            <div className="fh5co-footer-widget">
                                <h3>Support</h3>
                                <ul className="fh5co-links">
                                    <li><a href="#">Knowledge Base</a></li>
                                    <li><a href="#">24/7 Call Support</a></li>
                                    <li><a href="#">Video Demos</a></li>
                                    <li><a href="#">Terms of Use</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12 animate-box">
                            <div className="fh5co-footer-widget">
                                <h3>Contact Us</h3>
                                <p>
                                    <a href="mailto:info@freehtml5.co">info@freehtml5.co</a> 
                                    <br/>
                                    198 West 21th Street, <br/>
                                    Suite 721 New York NY 10016 <br/>
                                    <a href="tel:+123456789">+12 34  5677 89</a>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12 animate-box">
                            <div className="fh5co-footer-widget">
                                <h3>Follow Us</h3>
                                <ul className="fh5co-social">
                                    <li><a href="#"><i className="icon-twitter"></i></a></li>
                                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                                    <li><a href="#"><i className="icon-google-plus"></i></a></li>
                                    <li><a href="#"><i className="icon-instagram"></i></a></li>
                                    <li><a href="#"><i className="icon-youtube-play"></i></a></li>
                                </ul>
                            </div>
					    </div>
                        
                    </div>
                </div>

                <div className="fh5co-copyright animate-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="fh5co-left"><small>&copy; 2017 All Rights Reserved.</small></p>
                                <p className="fh5co-right"><small className="fh5co-right">Designed by <a href="#" target="_blank">Redemption</a> </small></p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
	
    );
  }
};

export default Footer;