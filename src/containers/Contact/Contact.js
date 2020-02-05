import React from "react";
import { withNamespaces } from "react-i18next";
import ContactForm from "../../components/ContactForm/ContactForm";

import "./Contact.css";

const Contact = ({ absPath, t, email }) => {
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
                <h1 className="mb-4">{t("contact.title")}</h1>

                <ContactForm email={email} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// @ts-ignore
export default withNamespaces()(Contact);
