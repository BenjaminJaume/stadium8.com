/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./DropdownLanguage.css";

const DropdownLanguage = ({ absPath, onClick, lg }) => {
  switch (lg) {
    case "en":
      return (
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src={`.${absPath}/images/country-flags/usa.png`}
              alt="en"
              className="d-inline-block mr-2"
              height="15"
            />
            English
          </a>

          <div
            className="dropdown-menu navbar-dropdown-menu w-25 dropdown-menu-right mx-auto"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a
              href="#"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              className="navbar-dropdown-item dropdown-item text-center text-white"
              onClick={onClick.bind(this, "es")}
            >
              <span>
                <img
                  src={`.${absPath}/images/country-flags/costa-rica.png`}
                  alt="ES"
                  className="d-inline-block mr-2"
                  height="15"
                />
                Español
              </span>
            </a>
            <a
              href="#"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              className="dropdown-item navbar-dropdown-item text-center text-white"
              onClick={onClick.bind(this, "fr")}
            >
              <span>
                <img
                  src={`.${absPath}/images/country-flags/france.png`}
                  alt="fr"
                  className="d-inline-block mr-2"
                  height="15"
                />
                Français
              </span>
            </a>
          </div>
        </li>
      );
    case "fr":
      return (
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src={`.${absPath}/images/country-flags/france.png`}
              alt="fr"
              className="d-inline-block mr-2"
              height="15"
            />
            Français
          </a>

          <div
            className="dropdown-menu navbar-dropdown-menu w-25 dropdown-menu-right mx-auto"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a
              href="#"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              className="navbar-dropdown-item dropdown-item text-center text-white"
              onClick={onClick.bind(this, "es")}
            >
              <span>
                <img
                  src={`.${absPath}/images/country-flags/costa-rica.png`}
                  alt="ES"
                  className="d-inline-block mr-2"
                  height="15"
                />
                Español
              </span>
            </a>
            <a
              href="#"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              className="dropdown-item navbar-dropdown-item text-center text-white"
              onClick={onClick.bind(this, "en")}
            >
              <span>
                <img
                  src={`.${absPath}/images/country-flags/usa.png`}
                  alt="us"
                  className="d-inline-block mr-2"
                  height="15"
                />
                English
              </span>
            </a>
          </div>
        </li>
      );
    case "es":
      return (
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src={`.${absPath}/images/country-flags/costa-rica.png`}
              alt="es"
              className="d-inline-block mr-2"
              height="15"
            />
            Español
          </a>

          <div
            className="dropdown-menu navbar-dropdown-menu w-25 dropdown-menu-right mx-auto"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a
              href="#"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              className="navbar-dropdown-item dropdown-item text-center text-white"
              onClick={onClick.bind(this, "en")}
            >
              <span>
                <img
                  src={`.${absPath}/images/country-flags/usa.png`}
                  alt="us"
                  className="d-inline-block mr-2"
                  height="15"
                />
                English
              </span>
            </a>
            <a
              href="#"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              className="dropdown-item navbar-dropdown-item text-center text-white"
              onClick={onClick.bind(this, "fr")}
            >
              <span>
                <img
                  src={`.${absPath}/images/country-flags/france.png`}
                  alt="fr"
                  className="d-inline-block mr-2"
                  height="15"
                />
                Français
              </span>
            </a>
          </div>
        </li>
      );
    default:
      console.log("no lang");
  }
};

export default DropdownLanguage;
