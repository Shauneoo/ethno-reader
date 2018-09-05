import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      geo: {lat:0, lng: 0}
    }
  }

  componentDidMount() {
    console.log(this.props.geo)
    this.setState({geo: this.props.geo})
  }


  render() {
    return (
      <Map
        google={this.props.google}
        style={{'maxWidth': '80%', "maxHeight": "50vh"}}
        zoom={14}
        // centerAroundCurrentLocation={true}
        center={this.state.geo}
      >
        <Marker position={this.state.geo} name={'Current location'} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCce1xFKWufJHwv9ox5BnYplLpNlWsMt1I")
})(MapContainer)
