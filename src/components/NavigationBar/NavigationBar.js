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

const changeLanguage = lng => {
  alert(lng);
};

const NavigationBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top font-brand-2">
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
          data-target="#navigation-bar"
          aria-controls="navigation-bar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navigation-bar" className="collapse navbar-collapse">
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
                to="/gym"
                href="/gym"
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
                to="/events"
                href="/events"
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

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  //
                  src="./wp-content/themes/stadium8/images/country-flags/france.png"
                  alt="FR"
                  className="d-inline-block mr-2"
                  height="15"
                />
                Français
              </a>

              <div
                className="dropdown-menu navbar-dropdown-menu w-25 dropdown-menu-right mx-auto"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <IndexLinkContainer
                  to="/:lg"
                  href="/"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  className="dropdown-item navbar-dropdown-item text-center text-white"
                  onClick={() => changeLanguage("de")}
                >
                  <span>
                    <img
                      // /wp-content/themes/stadium8
                      src="./wp-content/themes/stadium8/images/country-flags/costa-rica.png"
                      alt="ES"
                      className="d-inline-block mr-2"
                      height="15"
                    />
                    Español
                  </span>
                </IndexLinkContainer>
                <IndexLinkContainer
                  to="/:lg"
                  href="/"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  className="dropdown-item navbar-dropdown-item text-center text-white"
                  onClick={() => changeLanguage("de")}
                >
                  <span>
                    <img
                      // /wp-content/themes/stadium8
                      src="./wp-content/themes/stadium8/images/country-flags/usa.png"
                      alt="US"
                      className="d-inline-block mr-2"
                      height="15"
                    />
                    English
                  </span>
                </IndexLinkContainer>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
