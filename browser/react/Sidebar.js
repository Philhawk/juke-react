import React from 'react';

class SideBar extends React.Component {
  constructor(props) {
  super(props);
  }

  render(){

  return(
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <a href="#">ALBUMS</a>
        </h4>
      </section>
    </sidebar>
    )
  }
}

export default SideBar;
