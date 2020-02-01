import React from "react";
import { withNamespaces } from "react-i18next";
import "./Football5.css";

const Football5 = ({ absPath, t }) => {
  return (
    <div
      className="responsive-background background-position-fixed"
      style={{
        backgroundImage: `url(".${absPath}/images/background-football.jpg")`
      }}
    >
      <div className="color-brand-filter">
        <div className="container-fluid container-100vh">
          <div className="row h-100 align-items-center">
            <div className="col-12 col-lg-10 mx-auto py-5">
              <div className="opacity-black-75 text-white rounded text-center p-5">
                <h1>Football5</h1>
                <h3 className="mb-4">Cette page est en construction</h3>
                <img
                  src={`.${absPath}/images/construction.svg`}
                  alt="Cone"
                  title="Désolé pour la gêne occasionnée"
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
export default withNamespaces()(Football5);
