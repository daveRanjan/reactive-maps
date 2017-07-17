import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";

class Maps extends Component {

  constructor() {
    super();

    this.state = {
      map: null
    }
  }

  onLoad(map){
    console.log("Map Loaded")
    if(this.state.map == null){
      this.setState({
        map
      });

      console.log(`Map Loaded : ${JSON.stringify(map.getCenter())}`)
    }
  }

  render() {

    const markers = this.props.markers || [];

    return (
      <GoogleMap
        ref={this.onLoad.bind(this)}
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center}>
        {markers.map((marker, index) => (
          <Marker {...marker} />
        ))}
      </GoogleMap>
    )
  };
}

export default withGoogleMap(Maps);