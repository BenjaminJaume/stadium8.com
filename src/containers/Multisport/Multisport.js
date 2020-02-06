import React from "react";
import { withNamespaces } from "react-i18next";
import "./Multisport.css";

const Multisport = ({ absPath, t }) => {
  return (
    <div
      className="responsive-background background-position-fixed"
      style={{
        backgroundImage: `url(".${absPath}/images/background-multisport.jpg")`
      }}
    >
      <div className="color-brand-filter">
        <div className="container-fluid container-100vh">
          <div className="row h-100 align-items-center">
            <div className="col-12 col-lg-10 mx-auto py-5">
              <div className="opacity-black-75 text-white rounded text-center p-5">
                <h1 className="mb-4 text-brand">{t("navbar.multisport")}</h1>
                <h3 className="mb-5">{t("other.construction.title")}</h3>
                <img
                  src={`.${absPath}/images/construction.svg`}
                  alt="Cone"
                  title={t("other.construction.hover")}
                  className="img-fluid rounded cone"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// @ts-ignore
export default withNamespaces()(Multisport);
