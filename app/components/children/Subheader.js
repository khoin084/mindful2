import React from "react";


// very basic component to get started
class  Subheader extends React.Component {


  render() {
  return ( 
    <div id="menuContainer">

      <section id="fh5co-hero" className="js-fullheight" data-next="yes">
        <div className="fh5co-overlay"></div>
        <div className="container">
          <div className="fh5co-intro">
            <div className="fh5co-intro-text">
              <div className="fh5co-left-position">
                <h2 className="animate-box">Experience relaxation like never before</h2>
                <p className="animate-box">
                  <a href="#" target="_blank" className="btn btn-primary">Try it</a>
                  <a href="#" target="_blank" className="btn btn-primary">VR</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="fh5co-learn-more animate-box">
          <a href="#" className="scroll-btn">
            <span className="text">Explore more about us</span>
            <span className="arrow"><i className="icon-chevron-down"></i></span>
          </a>
        </div>
      </section>

    </div>
    );
  }
};

export default Subheader;
