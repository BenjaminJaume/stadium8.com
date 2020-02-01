import React from "react";
import { withNamespaces } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import ContactItems from "../ContactItems/ContactItems";
import MapContainer from "../MapContainer/MapContainer";

import "./Footer.css";

const Footer = ({ phoneNumber, absPath, t }) => {
  return (
    <>
      <footer id="footer" className="pb-1">
        <div className="container-fluid pt-4">
          <div className="row">
            <div className="col-12 col-lg-4 p-0 m-0">
              <div className="map-container pl-lg-2">
                <MapContainer />
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <p className="text-brand">{t("footer.column-middle.title")}</p>
              <p>
                <u>{t("footer.column-middle.gymnasium.title")}</u>
                <br />
                {t("footer.column-middle.gymnasium.info-1")}
                <br />
                {t("footer.column-middle.gymnasium.info-2")}
              </p>
              <p>
                <u>{t("footer.column-middle.football-field.title")}</u>
                <br />
                {t("footer.column-middle.football-field.info-1")}
              </p>
            </div>

            <div className="col-12 col-lg-4">
              <div className="mb-4">
                <p className="mb-0 text-brand">
                  STADIUM8 {t("footer.column-right.title")}
                </p>
                <ContactItems phoneNumber={phoneNumber} absPath={absPath} />
              </div>

              <p className="text-silver">
                <FontAwesomeIcon icon={faCopyright} className="mr-1" />
                STADIUM8 - {t("footer.column-right.copyright")}
              </p>

              <p className="font-brand-2 font-smaller">
                {t("footer.column-right.web-developer")}: Benjamin Jaume
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

// @ts-ignore
export default withNamespaces()(Footer);
