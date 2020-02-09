import React from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "../../components/ContactForm/ContactForm";

import "./Contact.css";

const Contact = ({ absPath, email }) => {
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
              <div className="opacity-black-75 text-white rounded text-center p-5">
                <h1 className="mb-3">{t("contact.title")}</h1>
                <p>{t("contact.content")}</p>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 col-md-8 col-lg-6 mx-auto px-0">
                      <ContactForm email={email} />
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
