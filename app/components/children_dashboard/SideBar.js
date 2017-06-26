import React from "react";


// very basic component to get started
class SideBar extends React.Component {


  render() {
  return ( 
        <div className="sidebar">
            {/*<!--sidebar start-->*/}
            <aside>
                <div id="sidebar"  className="nav-collapse ">
                    {/*<!-- sidebar menu start-->*/}
                    <ul className="sidebar-menu" id="nav-accordion">

                        <p className="centered"><a href="profile.html"><img src="assets/img/ui-zac.jpg"className="img-circle" width="60" /></a></p>
                        <h5 className="centered">Marcel Newman</h5>

                    </ul>
                    {/*<!-- sidebar menu end-->*/}
                </div>
            </aside>
            {/*<!--sidebar end-->*/}
        </div>
    );
  }
};

export default SideBar;