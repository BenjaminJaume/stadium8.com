import React from "react";
import { useTranslation } from "react-i18next";
import { IndexLinkContainer } from "react-router-bootstrap";
import DropdownLanguage from "../DropdownLanguage/DropdownLanguage";
import "./NavigationBar.css";

const NavigationBar = ({ onClick, lg }) => {
  const { t } = useTranslation();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top font-brand-2 py-3">
        <span>
          <IndexLinkContainer
            to="/"
            href="/"
            className="navbar-brand"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <span className="m-0 p-0 font-brand-bold h3">
              <span className="h3">STADIUM</span>
            </span>
          </IndexLinkContainer>
          <span className="p-0 m-0">
            <a
              href="http://stadium8.com/wp-login.php"
              className="hidden-link font-brand-cuts align-baseline h4"
              target="_blank"
              rel="noopener noreferrer"
            >
              8
            </a>
          </span>
        </span>
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
                <span>{t("navbar.home")}</span>
              </IndexLinkContainer>
            </li>
            <li className="nav-item">
              <IndexLinkContainer
                to="/soccer5"
                href="/soccer5"
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <span>{t("navbar.soccer5")}</span>
              </IndexLinkContainer>
            </li>
            <li className="nav-item" title={t("other.construction.message")}>
              <IndexLinkContainer
                to="/gym"
                href="/gym"
                className="nav-link disabled"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <span>{t("navbar.gymnasium")}</span>
              </IndexLinkContainer>
            </li>
            <li className="nav-item" title={t("other.construction.message")}>
              <IndexLinkContainer
                to="/multisport"
                href="/multisport"
                className="nav-link disabled"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <span>{t("navbar.multisport")}</span>
              </IndexLinkContainer>
            </li>
            <li className="nav-item" title={t("other.construction.message")}>
              <IndexLinkContainer
                to="/events"
                href="/events"
                className="nav-link disabled"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <span>{t("navbar.events")}</span>
              </IndexLinkContainer>
            </li>
            <li className="nav-item" title={t("other.construction.message")}>
              <IndexLinkContainer
                to="/spa"
                href="/spa"
                className="nav-link disabled"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <span>Spa</span>
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
                <span>{t("navbar.contact")}</span>
              </IndexLinkContainer>
            </li>

            <DropdownLanguage onClick={onClick} lg={lg} />
          </ul>
        </div>
      </nav>
    </>
  );
};

// @ts-ignore
export default NavigationBar;
