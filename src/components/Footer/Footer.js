import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowAltCircleUp,
  faCopyright
} from "@fortawesome/free-regular-svg-icons";
import ContactItems from "../ContactItems/ContactItems";

import "./Footer.css";

const Footer = ({ phoneNumber }) => {
  return (
    <>
      <footer id="footer" className="bg-light pt-5 pb-1">
        <p id="message-bottom">
          Created with{" "}
          <FontAwesomeIcon icon={faHeart} className="text-red-pigment" /> by
          Benjamin Jaume
        </p>

        <div className="mb-3">
          <ContactItems phoneNumber={phoneNumber} />
        </div>

        <div className="mb-5">
          {/* eslint-disable */}
          <a
            id="back-top-button"
            className="btn btn-warning"
            href="#"
            role="button"
          >
            TOP
            <FontAwesomeIcon icon={faArrowAltCircleUp} className="ml-2" />
          </a>
          {/* eslint-enable */}
        </div>

        <p className="text-muted">
          <FontAwesomeIcon icon={faCopyright} className="mr-1" />
          Benjamin Jaume
        </p>
      </footer>
    </>
  );
};

export default Footer;
