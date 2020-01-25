import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import "./PageLangue.css";

const PageLangue = () => {
  return (
    <div className="container page-langue pt-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <img src="./images/logo-black-xl.png" className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-4 text-center mb-5 mb-lg-0">
          <LinkContainer to="/:langue" className="px-3 py-2" exact>
            <button className="btn btn-warning">
              <img
                src="./images/pays/costa-rica.png"
                className="img-fluid mr-2"
                alt="CR"
              />
              Español
            </button>
          </LinkContainer>
        </div>
        <div className="col-12 col-lg-4 text-center mb-5 mb-lg-0">
          <LinkContainer to="/:langue" className="px-3 py-2" exact>
            <button className="btn btn-danger">
              <img
                src="./images/pays/usa.png"
                className="img-fluid mr-2"
                alt="US"
              />
              English
            </button>
          </LinkContainer>
        </div>
        <div className="col-12 col-lg-4 text-center mb-5 mb-lg-0">
          <LinkContainer to="/:langue" className="px-3 py-2" exact>
            <button className="btn btn-primary">
              <img
                src="./images/pays/france.png"
                className="img-fluid mr-2"
                alt="FR"
              />
              Français
            </button>
          </LinkContainer>
        </div>
      </div>
    </div>
  );
};

export default PageLangue;
