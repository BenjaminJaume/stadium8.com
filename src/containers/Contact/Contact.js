import React from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "../../components/ContactForm/ContactForm";
import MapContainer from "../../components/MapContainer/MapContainer";
import { Config } from "../../components/Config/Config";

import "./Contact.css";

const Contact = ({ email }) => {
  const absPath = Config.ABS_PATH;
  const { t } = useTranslation();

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
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <h1 className="mb-3">{t("contact.title")}</h1>
                      <p>{t("contact.content")}</p>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-12 col-md-10 col-lg-8 mx-auto px-0">
                            <ContactForm email={email} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 px-0">
                      <div className="map-container pt-3">
                        <MapContainer />
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
};

export default Contact;
