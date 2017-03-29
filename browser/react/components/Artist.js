import React from 'react';
import Songs from '../components/Songs';
import axios from 'axios';
import { Component } from 'react';
import { convertAlbum } from '../utils';

export default class Artist extends Component  {

  componentDidMount() {
    // console.log(this.props)
    let artistId = +this.props.params.artistId;
    this.props.selectArtist(artistId);
    this.Artist = {};
  }

  render(){
    let artistInfo;
    if(this.props.selectedArtist[0] ){
      console.log(this.props.selectedArtist, 'this is unspread');
      [this.Artist] =  this.props.selectedArtist;
      console.log(this.Artist, 'this is after spread');
      [artistInfo] = this.Artist.artists;
      console.log( artistInfo.name);
    }

    return (
      <div>
        {/*{*/}
          {/*this.props.selectedArtist && t  */}
        {/*}*/}
          <h3>{artistInfo && artistInfo.name}</h3>
          <h4>ALBUMS</h4>
          <h4>SONGS</h4>
        </div>


    )
  }
}
