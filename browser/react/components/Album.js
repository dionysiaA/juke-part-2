import React from 'react';
import Songs from '../components/Songs';
import axios from 'axios';
import { Component } from 'react';
import { convertAlbum } from '../utils';

export default class Album extends Component  {

  componentDidMount() {
    let albumId = +this.props.params.albumId;
    this.props.selectedAlbum( albumId);
  }

  render(){
    return (
      <div className="album">
        <div>
          <h3>{ this.props.album.name }</h3>
          <img src={ this.props.album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={this.props.album.songs}
          currentSong={this.props.currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.props.toggleOne}
        />
      </div>
    )
  }
}

