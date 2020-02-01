import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { Config } from "../Config/Config";

const mapStyles = {
  width: "80%",
  height: "90%",
  margin: "0 auto"
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        // @ts-ignore
        style={mapStyles}
        initialCenter={{
          lat: 9.8826942,
          lng: -85.5313173
        }}
        fullscreenControl={false}
        streetViewControl={false}
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
  apiKey: Config.MAPS_API_KEY
})(MapContainer);
