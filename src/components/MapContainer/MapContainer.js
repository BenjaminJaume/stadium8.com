import React from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker
} from "react-google-maps";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWalking, faCar } from "@fortawesome/free-solid-svg-icons";
import { faWaze } from "@fortawesome/free-brands-svg-icons";

// @ts-ignore
const styles = require("./MapStyle.json");

// import "./MapContainer.css";

const MapContainer = withScriptjs(
  withGoogleMap(
    ({
      handleCloseInfoWindow,
      handleMarkerClick,
      isInfoboxVisible,
      mapDefaultCenter,
      markerPosition
    }) => (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{
          lat: mapDefaultCenter[0],
          lng: mapDefaultCenter[1]
        }}
        defaultOptions={{
          disableDefaultUI: true,
          draggable: true,
          keyboardShortcuts: false,
          scaleControl: true,
          scrollwheel: true,
          styles: styles
        }}
        onClick={handleCloseInfoWindow} // Get the data that will be used for InfoWindow.
      >
        <Marker
          position={{
            lat: markerPosition[0],
            lng: markerPosition[1]
          }}
          onClick={handleMarkerClick} // Get the data that will be used for InfoWindow.
        >
          {isInfoboxVisible && (
            <InfoWindow onCloseClick={handleCloseInfoWindow}>
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
          )}
        </Marker>
      </GoogleMap>
    )
  )
);

export default MapContainer;
