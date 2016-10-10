import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Album from './Album';


const audio = document.createElement('audio');

class MainComponent extends React.Component {
  constructor(props) {
  super(props);
  this.state = { album: {name: null, imageUrl: null, songs: []}, currentSong: {id: null}};
  this.start = this.start.bind(this);
  }

  componentDidMount(){
    fetch('api/albums/2')
    .then((response) => {
      return response.json();
    })
    .then((album) => {
      console.log('success');
      console.log('album id', album.id)
      album.imageUrl =  `/api/albums/${album.id}/image`;
      this.setState({album: album})
    })
    .catch(function (err) {
      console.error('error');
      console.error(err);
    });
  }

  start(song){
    this.setState({currentSong: song});
    audio.src = song.url;
    audio.load();
    audio.play();
  }

  render(){


  return(
    <div id="main" className="container-fluid">

      <div className="col-xs-2">
        <Sidebar />
      </div>

      <Album album={this.state.album} start={this.start} currentSong={this.state.currentSong}/>

      <div className="col-xs-10"></div>

      <Footer />

    </div>
    )
  }
}

export default MainComponent;
