import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import ContactItems from "../ContactItems/ContactItems";

import "./Footer.css";

const Footer = ({ phoneNumber }) => {
  return (
    <>
      <footer id="footer" className="bg-light pb-1">
        <div className="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            {/*
            For future usage
            <defs>
              <linearGradient id="MyGradient">
                <stop offset="5%" stop-color="#c33764" />
                <stop offset="95%" stop-color="#1d2671" />
              </linearGradient>
            </defs> */}

            <path
              id="wave-footer"
              fill="#f8f9fa"
              fillOpacity="1"
              d="M0,128L120,133.3C240,139,480,149,720,144C960,139,1200,117,1320,106.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="mb-4">
          <p className="mb-0">Retrouvez nous sur les réseaux sociaux</p>
          <ContactItems phoneNumber={phoneNumber} />
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
            className="text-info"
          >
            www.benjaminjau.me
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
