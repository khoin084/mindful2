import React, { Component } from 'react';


// very basic component to get started
class Section1 extends Component {


  render() {
  return ( 
    <div id="projectContainer">
      <section id="fh5co-projects">
        <div className="container">
          <div className="row row-bottom-padded-md">
            <div className="col-md-6 col-md-offset-3 text-center">
              <h2 className="fh5co-lead animate-box">What is Mindfulness?</h2>
              <p className="fh5co-sub-lead animate-box">“Mindfulness is the basic human ability to be fully present, aware of where we are and what we’re doing, and not overly reactive or overwhelmed by what’s going on around us.” </p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xxs-12 animate-box">
              <a href="images/mindfulness-workplace.jpg" className="fh5co-project-item image-popup">
                <img src="images/mindfulness-workplace.jpg" alt="Image"/>
                <div className="fh5co-text">
                  <h2>"I've found some much needed peace."</h2>
                  <p><q>For the longest time work has been one of, if not the main source of stress in my life. But mindfulness has helped reduce that stress and even increased my productivity in the workplace.</q> - Tiffany Evans</p>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 col-xxs-12 animate-box">
              <a href="images/happy-family.jpg" className="fh5co-project-item image-popup">
                <img src="images/happy-family.jpg" alt="Image"/>
                <div className="fh5co-text">
                  <h2>"It's been a wonderful learning experience."</h2>
                  <p><q>My wife and I were looking for new ways to strengthen our relationship. With mindfulness, we've been able to identify some of our weak points and focus on resolving them. It's been a wonderful learning experience."</q> - James Pilsen</p>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 col-xxs-12 animate-box">
              <a href="images/how-to-reduce-job-stress.png" className="fh5co-project-item image-popup">
                <img src="images/how-to-reduce-job-stress.png" alt="Image"/>
                <div className="fh5co-text">
                  <h2>"Balance has been the key."</h2>
                  <p><q>Well, I'm a full-time mother and student. It seemed like I was on the verge of insanity every day. When my girlfriend introduced me to mindfulness I have to admit I was pretty skeptical about it. Of course the headaches are still there, but over time, I've definitely noticed a difference.</q> - Christine Thatcher</p>
                </div>
              </a>
            </div>
          </div>

          <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/3nwwKbM_vJc" frameBorder="0" allowFullScreen></iframe>
          </div>
          
        </div>
      </section>
    </div>
	
    );
  }
};

export default Section1;