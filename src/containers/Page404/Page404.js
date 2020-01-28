import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

import "./Page404.css";

const Page404 = props => {
  return (
    <>
      <div
        className="container-fluid container-page404 text-center py-5"
        style={{
          background: `url("./wp-content/themes/stadium8/images/background-page404.jpg") no-repeat center center`,
          backgroundSize: "cover",
          height: "calc(100vh - var(--navbar-height))"
        }}
      >
        <div className="row h-100 align-items-center">
          <div className="col-12 col-lg-6 mx-auto">
            <div className="bg-light rounded text-center py-5 px-3">
              <div>
                <h1 className="display-4">
                  <span className="text-red-pigment">404: </span>
                  Page non trouvée
                </h1>
              </div>
              <div>
                <p className="lead">
                  C'est un coup dur... mais ne perdez pas de vu votre objectif!
                </p>
                <Link to="/" className="btn btn-danger px-4">
                  <FontAwesomeIcon
                    icon={faArrowAltCircleLeft}
                    className="align-middle mr-2"
                  />
                  Revenir à l'accueil
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page404;
