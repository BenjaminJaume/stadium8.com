import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IndexLinkContainer } from "react-router-bootstrap";
import {
  faFutbol,
  faHome,
  faDumbbell,
  faBasketballBall,
  faCalendarAlt,
  faHotTub,
  faComment
} from "@fortawesome/free-solid-svg-icons";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <IndexLinkContainer
          to="/"
          href="/"
          className="navbar-brand"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
        >
          <img
            src="./wp-content/themes/stadium8/images/logo-white-xl.png"
            alt="STADIUM8"
            className="d-inline-block mr-2"
            height="60"
          />
        </IndexLinkContainer>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#stadium8-navigationbar"
          aria-controls="stadium8-navigationbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="stadium8-navigationbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <IndexLinkContainer
                to="/"
                href="/"
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <span>
                  <FontAwesomeIcon
                    icon={faHome}
                    className="align-baseline mr-2"
                  />
                  Accueil
                </span>
              </IndexLinkContainer>
            </li>
            <li className="nav-item">
              <IndexLinkContainer
                to="/football5"
                href="/football5"
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <span>
                  <FontAwesomeIcon
                    icon={faFutbol}
                    className="align-baseline mr-2"
                  />
                  Football5
                </span>
              </IndexLinkContainer>
            </li>
            <li className="nav-item">
              <IndexLinkContainer
                to="/gymnase"
                href="/gymnase"
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <span>
                  <FontAwesomeIcon
                    icon={faDumbbell}
                    className="align-baseline mr-2"
                  />
                  Gymnase
                </span>
              </IndexLinkContainer>
            </li>
            <li className="nav-item">
              <IndexLinkContainer
                to="/multisport"
                href="/multisport"
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <span>
                  <FontAwesomeIcon
                    icon={faBasketballBall}
                    className="align-baseline mr-2"
                  />
                  Multisport
                </span>
              </IndexLinkContainer>
            </li>
            <li className="nav-item">
              <IndexLinkContainer
                to="/evenements"
                href="/evenements"
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <span>
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="align-baseline mr-2"
                  />
                  Évènements
                </span>
              </IndexLinkContainer>
            </li>
            <li className="nav-item">
              <IndexLinkContainer
                to="/spa"
                href="/spa"
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <span>
                  <FontAwesomeIcon
                    icon={faHotTub}
                    className="align-baseline mr-2"
                  />
                  SPA
                </span>
              </IndexLinkContainer>
            </li>
            <li className="nav-item">
              <IndexLinkContainer
                to="/contact"
                href="/contact"
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <span>
                  <FontAwesomeIcon
                    icon={faComment}
                    className="align-baseline mr-2"
                  />
                  Contact
                </span>
              </IndexLinkContainer>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
