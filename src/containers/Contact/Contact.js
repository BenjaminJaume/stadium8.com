import React, { Component } from "react";
import i18next from "i18next";
import ContactForm from "../../components/ContactForm/ContactForm";
import MapContainer from "../../components/MapContainer/MapContainer";
import { Config } from "../../components/Config/Config";

import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInfoboxVisible: false
    };

    this.handleCloseInfoWindow = this.handleCloseInfoWindow.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }

  handleCloseInfoWindow() {
    this.setState({
      isInfoboxVisible: false
    });
  }

  handleMarkerClick() {
    this.setState({
      isInfoboxVisible: !this.state.isInfoboxVisible // Show info window
    });
  }

  render() {
    const absPath = Config.ABS_PATH;
    const MAPS_API_KEY = Config.MAPS_API_KEY;

    const { email, mapDefaultCenter, markerPosition } = this.props;
    const { isInfoboxVisible } = this.state;

    return (
      <div
        className="responsive-background background-position-fixed"
        style={{
          backgroundImage: `url(".${absPath}/images/background-contact.jpg")`
        }}
      >
        <div className="color-brand-filter">
          <div className="container-fluid container-100vh">
            <div className="row h-100 align-items-center">
              <div className="col-12 col-lg-10 mx-auto py-5">
                <div className="opacity-black-75 text-white rounded text-center py-5 px-2 px-lg-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-lg-6 mb-4 mb-lg-0 order-1 order-sm-2">
                        <h1 className="mb-3">{i18next.t("contact.title")}</h1>
                        <p>{i18next.t("contact.content")}</p>
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12 col-md-10 col-lg-8 mx-auto px-0">
                              <ContactForm email={email} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 px-0 order-2 order-lg-1">
                        <div className="map-container border border-dark rounded mx-auto">
                          <MapContainer
                            // @ts-ignore
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${MAPS_API_KEY}`}
                            // @ts-ignore
                            loadingElement={<div style={{ height: `100%` }} />}
                            // @ts-ignore
                            containerElement={
                              <div style={{ height: `100%` }} />
                            }
                            // @ts-ignore
                            mapElement={<div style={{ height: `100%` }} />}
                            // @ts-ignore
                            isInfoboxVisible={isInfoboxVisible} // Show/hide info window
                            // @ts-ignore
                            handleCloseInfoWindow={this.handleCloseInfoWindow} // Handle click on Marker component
                            // @ts-ignore
                            handleMarkerClick={this.handleMarkerClick} // Handle click on Marker component
                            // @ts-ignore
                            mapDefaultCenter={mapDefaultCenter}
                            // @ts-ignore
                            markerPosition={markerPosition}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
