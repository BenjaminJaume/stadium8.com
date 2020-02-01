import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import ContactItems from "../ContactItems/ContactItems";
import MapContainer from "../MapContainer/MapContainer";

import "./Footer.css";

const Footer = ({ phoneNumber, absPath }) => {
  return (
    <>
      <footer id="footer" className="pb-1">
        <div className="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            {/* For future usage
            <defs>
              <linearGradient id="MyGradient">
                <stop offset="5%" stop-color="#c33764" />
                <stop offset="95%" stop-color="#1d2671" />
              </linearGradient>
            </defs>  */}
            <path
              id="wave-footer"
              fill="var(--black)"
              fillOpacity="1"
              d="M0,128L120,133.3C240,139,480,149,720,144C960,139,1200,117,1320,106.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>

          {/* <img src="./images/footer.png" className="m-0 p-0" alt="" /> */}
        </div>
        <div className="container-fluid mt-3 mt-lg-0">
          <div className="row">
            <div className="col-12 col-lg-4 p-0 m-0">
              <div className="map-container pl-lg-2">
                <MapContainer />
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <p className="text-brand">Horaires d'ouverture</p>
              <p>
                <u>Gymnase</u>
                <br />
                Lundi au Vendredi: de 06h à 22h
                <br />
                Samedi & Dimanche: de 08h à 22h
              </p>
              <p>
                <u>Terrain de Football</u>
                <br />
                Lundi au Dimanche: de 08h à 22h
              </p>
            </div>

            <div className="col-12 col-lg-4">
              <div className="mb-4">
                <p className="mb-0 text-brand">STADIUM8 sur les réseaux</p>
                <ContactItems phoneNumber={phoneNumber} absPath={absPath} />
              </div>

              <p className="text-silver">
                <FontAwesomeIcon icon={faCopyright} className="mr-1" />
                STADIUM8 - Tous droits réservés
              </p>

              <p className="font-brand-2 font-smaller">
                Développeur Web: Benjamin Jaume
                <br />
                <a
                  href="http://www.benjaminjau.me"
                  target="_blanK"
                  rel="noopener noreferrer"
                  className="link-brand"
                >
                  www.benjaminjau.me
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
