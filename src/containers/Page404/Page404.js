import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

import "./Page404.css";

const Page404 = props => {
  return (
    <>
      <div className="container-fluid container-page404 text-center py-5">
        <div className="row h-100 align-items-center">
          <div className="col-12">
            <div>
              <h1 className="display-4">
                <span className="text-red-pigment">404: </span>
                Page not found
              </h1>
            </div>
            <div>
              <p className="lead">There but be a mistake...</p>
              <Link to="/" className="btn btn-danger px-4">
                <FontAwesomeIcon
                  icon={faArrowAltCircleLeft}
                  className="align-middle mr-2"
                />
                Go back to the home page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page404;
