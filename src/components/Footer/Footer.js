import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import ContactItems from "../ContactItems/ContactItems";

import "./Footer.css";

const Footer = ({ phoneNumber }) => {
  return (
    <>
      <footer id="footer" className="bg-light pt-5 pb-1">
        <div className="mb-4">
          <p className="mb-0">Retrouvez nous sur les réseaux sociaux</p>
          <ContactItems phoneNumber={phoneNumber} />
        </div>

        <p className="text-muted">
          <FontAwesomeIcon icon={faCopyright} className="mr-1" />
          STADIUM8 - Tous droits réservés
        </p>

        <p className="font-brand-2 font-smaller">
          Développeur Web: Benjamin Jaume
          <br />
          <a
            href="https://www.benjaminjau.me"
            target="_blanK"
            rel="noopener noreferrer"
          >
            www.benjaminjau.me
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
