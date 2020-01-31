import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "90%",
  height: "90%"
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 9.8826942,
          lng: -85.5313173
        }}
      >
        <Marker
          title={"STADIUM8"}
          name={"STADIUM8"}
          position={{ lat: 9.884074, lng: -85.5398962 }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDIosXnoJ-dpq6gC7P1R-hZl4aCxfJE2AQ"
})(MapContainer);
