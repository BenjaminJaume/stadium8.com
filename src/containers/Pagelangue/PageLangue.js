import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import "./PageLangue.css";

const PageLangue = () => {
  return (
    <div className="container page-langue pt-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <img
            src="./images/logo-black-full.png"
            className="main-logo img-fluid"
            alt=""
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-5 text-center mb-3 mb-lg-0">
          <LinkContainer
            to="/:langue"
            className="btn btn-warning px-3 py-2"
            exact
          >
            <span>
              <img
                src="./images/pays/costa-rica.png"
                className="img-fluid mr-2"
                alt="CR"
              />
              Español
            </span>
          </LinkContainer>
        </div>
        <div className="col-12 col-lg-2 text-center mb-3 mb-lg-0">
          <LinkContainer
            to="/:langue"
            className="btn btn-danger px-3 py-2"
            exact
          >
            <span>
              <img
                src="./images/pays/usa.png"
                className="img-fluid mr-2"
                alt="US"
              />
              English
            </span>
          </LinkContainer>
        </div>
        <div className="col-12 col-lg-5 text-center mb-3 mb-lg-0">
          <LinkContainer
            to="/:langue"
            className="btn btn-primary px-3 py-2"
            exact
          >
            <span>
              <img
                src="./images/pays/france.png"
                className="img-fluid mr-2"
                alt="FR"
              />
              Français
            </span>
          </LinkContainer>
        </div>
      </div>
    </div>
  );
};

export default PageLangue;
