import React from 'react';
import MainComponent from './MainComponent';

class Album extends React.Component {

  constructor(props) {
  super(props);
  }

  render(){

  return(
    <div className="album col-xs-10">
      <div>
        <h3> {this.props.album.name}</h3>
        <img src={this.props.album.imageUrl} className="img-thumbnail" />
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Artists</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
         {this.props.album.songs.map((song, i) => {
          return(
            <tr key={i} className={song.id === this.props.currentSong.id ? 'active' : ''}>
              <td>
                <button onClick={ () => this.props.start(song)} className={"btn btn-default btn-xs"} style={song.id === this.props.currentSong.id ? { display: 'none' } : {backgroundColor: '#2E3338'}}>
                  <span className={"glyphicon glyphicon-play"}></span>
                </button>
              </td>
              <td id={song.id}> {song.name}</td>
              <td>{song.artists.map(function(artist){
                  return(artist.name)
                }).join(' & ')}
              </td>
              <td>{song.genre}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
    )
  }
}

export default Album;
