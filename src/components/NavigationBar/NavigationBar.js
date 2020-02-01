import React from "react";
import { withNamespaces } from "react-i18next";
import { IndexLinkContainer } from "react-router-bootstrap";
import DropdownLanguage from "../DropdownLanguage/DropdownLanguage";

import "./NavigationBar.css";

const NavigationBar = ({ absPath, onClick, lg, t }) => {
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
            src={`.${absPath}/images/logo-white-xl.png`}
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
                <span>{t("navbar.home")}</span>
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
                <span>{t("navbar.football5")}</span>
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
                <span>{t("navbar.gymnasium")}</span>
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
                <span>{t("navbar.multisport")}</span>
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
                <span>{t("navbar.events")}</span>
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
                <span>SPA</span>
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

            <DropdownLanguage absPath={absPath} onClick={onClick} lg={lg} />
          </ul>
        </div>
      </nav>
    </>
  );
};

// @ts-ignore
export default withNamespaces()(NavigationBar);
