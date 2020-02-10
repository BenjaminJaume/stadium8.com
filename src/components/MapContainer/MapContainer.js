import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import { Config } from "../Config/Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWalking, faCar } from "@fortawesome/free-solid-svg-icons";
import { faWaze } from "@fortawesome/free-brands-svg-icons";

// import "./MapContainer.css";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    const mapStyles = {
      width: "90%",
      height: "100%",
      margin: "0 auto"
    };

    return (
      <Map
        google={this.props.google}
        onClick={this.onMapClicked}
        zoom={14}
        // @ts-ignore
        style={mapStyles}
        initialCenter={{
          lat: 9.8826942,
          lng: -85.5313173
        }}
        fullscreenControl={false}
        streetViewControl={false}
        mapTypeControl={false}
      >
        <Marker title={"STADIUM8"} onClick={this.onMarkerClick} />
        <InfoWindow
          // @ts-ignore
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div className="mx-3">
            <p className="text-center text-black font-weight-bold mb-1">
              STADIUM8
            </p>
            <p className="mb-1">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Stadium8&destination_place_id=ChIJyWTeJ86rn48RugB1_KzeHQU&travelmode=walking"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <FontAwesomeIcon icon={faWalking} className="mr-1" />
                Google Maps
              </a>
            </p>
            <p className="mb-1">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Stadium8&destination_place_id=ChIJyWTeJ86rn48RugB1_KzeHQU&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <FontAwesomeIcon icon={faCar} className="mr-1" />
                Google Maps
              </a>
            </p>
            <p className="mb-2">
              <a
                href="https://www.waze.com/ul?ll=9.88425095%2C-85.53937912&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <FontAwesomeIcon icon={faWaze} className="mr-1" />
                Waze
              </a>
            </p>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: Config.MAPS_API_KEY
})(MapContainer);
