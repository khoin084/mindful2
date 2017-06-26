import React from "react";
// Very basic component to get started
class MainSection extends React.Component {


  render() {
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
                                        <span className="li_cloud"></span>
                                        <h3>+48</h3>
                                    </div>
                                    <p>48 New files were added in your cloud storage.</p>
                                </div>
                                <div className="col-md-2 col-sm-2 box0">
                                    <div className="box1">
                                        <span className="li_stack"></span>
                                        <h3>23</h3>
                                    </div>
                                    <p>You have 23 unread messages in your inbox.</p>
                                </div>
                                <div className="col-md-2 col-sm-2 box0">
                                    <div className="box1">
                                        <span className="li_news"></span>
                                        <h3>+10</h3>
                                    </div>
                                    <p>More than 10 news were added in your reader.</p>
                                </div>
                                <div className="col-md-2 col-sm-2 box0">
                                    <div className="box1">
                                        <span className="li_data"></span>
                                        <h3>OK!</h3>
                                    </div>
                                    <p>Your server is working perfectly. Relax & enjoy.</p>
                                </div>

                            </div>

                            <div className="row mt">
                                
                                <div className="col-md-4 col-sm-4 mb">
                                    <div className="white-panel pn donut-chart">
                                        <div className="white-header">
                                            <h5>SERVER LOAD</h5>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-6 goleft">
                                                <p><i className="fa fa-database"></i> 70%</p>
                                            </div>
                                        </div>
                                        <canvas id="serverstatus01" height="120" width="120"></canvas>

                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-4 mb">
                                    <div className="white-panel pn">
                                        <div className="white-header">
                                            <h5>TOP PRODUCT</h5>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-6 goleft">
                                                <p><i className="fa fa-heart"></i> 122</p>
                                            </div>
                                            <div className="col-sm-6 col-xs-6"></div>
                                        </div>
                                        <div className="centered">
                                            <img src="assets/img/product.png" width="120" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mb">
                                    
                                    <div className="white-panel pn">
                                        <div className="white-header">
                                            <h5>TOP USER</h5>
                                        </div>
                                        <p><img src="assets/img/ui-zac.jpg" className="img-circle" width="80" /></p>
                                        <p><b>Zac Snider</b></p>
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

export default MainSection;