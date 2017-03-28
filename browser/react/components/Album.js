import React from 'react';
import Songs from '../components/Songs';
import axios from 'axios';

export default class AppContainer extends Component  {
  constructor (props) {
    super(props);
  }
  //props.params.albumId
  // console.log(props, 'album')
  // const album = props.album;
  // const currentSong = props.currentSong;
  // const isPlaying = props.isPlaying;
  // const toggleOne = props.toggleOne;

  componentDidMount() {
    axios.get(`/api/albums/${props.routeParams.albumId}`)
      .then(res => res.data)
      .then(album => this.setState({
        selectedAlbum: convertAlbum(album)
      }));
  }
  render(){
    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={album.songs}
          currentSong={currentSong}
          isPlaying={isPlaying}
          toggleOne={toggleOne} />
      </div>
    )
  }
}

