import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import ContactItems from "../ContactItems/ContactItems";

import "./Footer.css";

const Footer = ({ absPath, phoneNumber, email, openingHours }) => {
  const { t } = useTranslation();

  return (
    <>
      <footer id="footer" className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3" />
            <div className="col-12 col-lg-3">
              <p className="text-brand">{t("footer.openingHours.title")}</p>
              <p>
                {`${t("footer.openingHours.monday")}  ${
                  openingHours.weekDay.open.hours
                }h${openingHours.weekDay.open.minutes} ${t(
                  "footer.openingHours.to"
                )} ${openingHours.weekDay.close.hours}h${
                  openingHours.weekDay.close.minutes
                }`}
                <br />
                {`${t("footer.openingHours.tuesday")}  ${
                  openingHours.weekDay.open.hours
                }h${openingHours.weekDay.open.minutes} ${t(
                  "footer.openingHours.to"
                )} ${openingHours.weekDay.close.hours}h${
                  openingHours.weekDay.close.minutes
                }`}
                <br />
                {`${t("footer.openingHours.wednesday")}  ${
                  openingHours.weekDay.open.hours
                }h${openingHours.weekDay.open.minutes} ${t(
                  "footer.openingHours.to"
                )} ${openingHours.weekDay.close.hours}h${
                  openingHours.weekDay.close.minutes
                }`}
                <br />
                {`${t("footer.openingHours.thursday")}  ${
                  openingHours.weekDay.open.hours
                }h${openingHours.weekDay.open.minutes} ${t(
                  "footer.openingHours.to"
                )} ${openingHours.weekDay.close.hours}h${
                  openingHours.weekDay.close.minutes
                }`}
                <br />
                {`${t("footer.openingHours.friday")}  ${
                  openingHours.weekDay.open.hours
                }h${openingHours.weekDay.open.minutes} ${t(
                  "footer.openingHours.to"
                )} ${openingHours.weekDay.close.hours}h${
                  openingHours.weekDay.close.minutes
                }`}
                <br />
                {`${t("footer.openingHours.saturday")}  ${
                  openingHours.weekEnd.open.hours
                }h${openingHours.weekEnd.open.minutes} ${t(
                  "footer.openingHours.to"
                )} ${openingHours.weekEnd.close.hours}h${
                  openingHours.weekEnd.close.minutes
                }`}
                <br />
                {`${t("footer.openingHours.sunday")}  ${
                  openingHours.weekEnd.open.hours
                }h${openingHours.weekEnd.open.minutes} ${t(
                  "footer.openingHours.to"
                )} ${openingHours.weekEnd.close.hours}h${
                  openingHours.weekEnd.close.minutes
                }`}
                <br />
              </p>
            </div>

            <div className="col-12 col-lg-3">
              <div className="mb-4">
                <p className="mb-0 text-brand">
                  STADIUM8 {t("footer.socialNetworks.title")}
                </p>
                <ContactItems
                  absPath={absPath}
                  phoneNumber={phoneNumber}
                  email={email}
                />
              </div>

              <p className="text-silver">
                <FontAwesomeIcon icon={faCopyright} className="mr-1" />
                STADIUM8 - {t("footer.socialNetworks.copyright")}
              </p>

              <p className="font-brand-2 font-smaller">
                {t("footer.socialNetworks.web-developer")}: Benjamin Jaume
                <br />
                <a
                  href="http://www.benjaminjau.me"
                  target="_blanK"
                  rel="noopener noreferrer"
                  className="link-brand"
                >
                  www.benjaminjau.me
                </a>
              </p>
            </div>
            <div className="col-lg-3" />
          </div>
        </div>
      </footer>
    </>
  );
};

// @ts-ignore
export default Footer;
