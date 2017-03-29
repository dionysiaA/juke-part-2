import React from 'react';
import axios from 'axios';
import { Component } from 'react';
import { convertAlbum } from '../utils';
import { Link } from 'react-router'

export default class Artists extends Component  {

  componentDidMount() {
    this.props.getArtists();
  }

  render () {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Artists</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.artists.map(artist => (
              <tr key={artist.id}>
                <td><Link to={`/artists/${artist.id}`} >{ artist.name }</Link></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}
