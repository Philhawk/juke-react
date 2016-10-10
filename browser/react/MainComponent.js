import React from 'react';
import Sidebar from './Sidebar'
import Footer from './Footer'

class MainComponent extends React.Component {
  constructor(props) {
  super(props);
  this.state = {count: 1};
  }

  render(){

  return(
    <div id="main" className="container-fluid">
      <div class="col-xs-2">
        <Sidebar />
      </div>

      <div class="col-xs-10"></div>

      <Footer />

    </div>
    )
  }
}

export default MainComponent;
