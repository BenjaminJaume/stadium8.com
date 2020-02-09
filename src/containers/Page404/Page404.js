import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

import "./Page404.css";

const Page404 = ({ absPath }) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="responsive-background background-position-fixed"
        style={{
          backgroundImage: `url(".${absPath}/images/background-page404.jpg")`
        }}
      >
        <div className="color-brand-filter">
          <div className="container-fluid container-100vh">
            <div className="row align-content-center align-items-center">
              <div className="col-12 col-lg-6 mx-auto py-5">
                <div className="opacity-black-75 text-white rounded text-center p-5">
                  <div>
                    <h1 className="display-4">
                      <span className="text-red-pigment">404: </span>
                      {t("page404.title")}
                    </h1>
                  </div>
                  <div>
                    <p className="lead">{t("page404.message")}</p>
                    <Link to="/" className="btn btn-danger px-4">
                      <FontAwesomeIcon
                        icon={faArrowAltCircleLeft}
                        className="align-middle mr-2"
                      />
                      {t("other.homepageMessage")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page404;
