import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import NavigationItems from "../NavigationItems/NavigationItems";
import ContactItems from "../ContactItems/ContactItems";
import { Config } from "../Config/Config";

import "./Footer.css";

const Footer = ({ phoneNumber, email, openingHours, lg }) => {
  const absPath = Config.ABS_PATH;
  const { t } = useTranslation();

  let separator;
  let openingHoursWeekDayOpenHours;
  let openingHoursWeekDayCloseHours;
  let openingHoursWeekEndOpenHours;
  let openingHoursWeekEndCloseHours;

  function formatHours(hours) {
    return hours % 12 || 12;
  }

  function amOrPm(hours) {
    if (lg !== "fr") {
      return hours >= 12 ? "pm" : "am";
    } else {
      return "";
    }
  }

  switch (lg) {
    case "fr":
      separator = "h";

      openingHoursWeekDayOpenHours = openingHours.weekDay.open.hours;
      openingHoursWeekDayCloseHours = openingHours.weekDay.close.hours;
      openingHoursWeekEndOpenHours = openingHours.weekEnd.open.hours;
      openingHoursWeekEndCloseHours = openingHours.weekEnd.close.hours;
      break;
    default:
      separator = ".";

      openingHoursWeekDayOpenHours = formatHours(
        openingHours.weekDay.open.hours
      );
      openingHoursWeekDayCloseHours = formatHours(
        openingHours.weekDay.close.hours
      );
      openingHoursWeekEndOpenHours = formatHours(
        openingHours.weekEnd.open.hours
      );
      openingHoursWeekEndCloseHours = formatHours(
        openingHours.weekEnd.close.hours
      );
      break;
  }

  return (
    <>
      <footer id="footer" className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <p className="text-brand">STADIUM8</p>
              <p>
                Del super iguana verde, 600 mts Noroeste
                <br />
                Playa Samara, Guanacaste
                <br />
                Costa rica
              </p>
              <p className="mb-1">
                <a
                  href={`tel:${phoneNumber.replace(/ /g, "")}`}
                  className="link-brand link-no-underline"
                >
                  {phoneNumber}
                </a>
              </p>
              <p>
                <a href={`mailto:${email}`} className="link-brand">
                  {email}
                </a>
              </p>
              <div>
                <p className="mb-0">{t("footer.presentation.navigation")}</p>
                <NavigationItems />
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <p className="text-brand">
                {t("footer.openingHours.title").toUpperCase()}
              </p>
              <p>
                {`${t(
                  "footer.openingHours.monday"
                )} ${openingHoursWeekDayOpenHours}${separator}${
                  openingHours.weekDay.open.minutes
                }${amOrPm(openingHours.weekDay.open.hours)} ${t(
                  "footer.openingHours.to"
                )} ${openingHoursWeekDayCloseHours}${separator}${
                  openingHours.weekDay.close.minutes
                }${amOrPm(openingHours.weekDay.close.hours)}`}
                <br />
                {`${t(
                  "footer.openingHours.tuesday"
                )} ${openingHoursWeekDayOpenHours}${separator}${
                  openingHours.weekDay.open.minutes
                }${amOrPm(openingHours.weekDay.open.hours)} ${t(
                  "footer.openingHours.to"
                )} ${openingHoursWeekDayCloseHours}${separator}${
                  openingHours.weekDay.close.minutes
                }${amOrPm(openingHours.weekDay.close.hours)}`}
                <br />
                {`${t(
                  "footer.openingHours.wednesday"
                )} ${openingHoursWeekDayOpenHours}${separator}${
                  openingHours.weekDay.open.minutes
                }${amOrPm(openingHours.weekDay.open.hours)} ${t(
                  "footer.openingHours.to"
                )} ${openingHoursWeekDayCloseHours}${separator}${
                  openingHours.weekDay.close.minutes
                }${amOrPm(openingHours.weekDay.close.hours)}`}
                <br />
                {`${t(
                  "footer.openingHours.thursday"
                )} ${openingHoursWeekDayOpenHours}${separator}${
                  openingHours.weekDay.open.minutes
                }${amOrPm(openingHours.weekDay.open.hours)} ${t(
                  "footer.openingHours.to"
                )} ${openingHoursWeekDayCloseHours}${separator}${
                  openingHours.weekDay.close.minutes
                }${amOrPm(openingHours.weekDay.close.hours)}`}
                <br />
                {`${t(
                  "footer.openingHours.friday"
                )} ${openingHoursWeekDayOpenHours}${separator}${
                  openingHours.weekDay.open.minutes
                }${amOrPm(openingHours.weekDay.open.hours)} ${t(
                  "footer.openingHours.to"
                )} ${openingHoursWeekDayCloseHours}${separator}${
                  openingHours.weekDay.close.minutes
                }${amOrPm(openingHours.weekDay.close.hours)}`}
                <br />
                {`${t(
                  "footer.openingHours.saturday"
                )} ${openingHoursWeekEndOpenHours}${separator}${
                  openingHours.weekEnd.open.minutes
                }${amOrPm(openingHours.weekEnd.open.hours)} ${t(
                  "footer.openingHours.to"
                )} ${openingHoursWeekEndCloseHours}${separator}${
                  openingHours.weekEnd.close.minutes
                }${amOrPm(openingHours.weekEnd.close.hours)}`}
                <br />
                {`${t(
                  "footer.openingHours.sunday"
                )} ${openingHoursWeekEndOpenHours}${separator}${
                  openingHours.weekEnd.open.minutes
                }${amOrPm(openingHours.weekEnd.open.hours)} ${t(
                  "footer.openingHours.to"
                )} ${openingHoursWeekEndCloseHours}${separator}${
                  openingHours.weekEnd.close.minutes
                }${amOrPm(openingHours.weekEnd.close.hours)}`}
              </p>
            </div>

            <div className="col-12 col-lg-3">
              <div className="mb-4">
                <p className="mb-0 text-brand">
                  {t("footer.socialNetworks.title").toUpperCase()}
                </p>
                <ContactItems
                  absPath={absPath}
                  phoneNumber={phoneNumber}
                  email={email}
                />
              </div>
            </div>
            <div className="col-lg-3">
              <p className="text-brand">
                {t("footer.participate.title").toUpperCase()}
              </p>

              <dl className="text-muted">
                <dt className="mb-3">{t("footer.participate.workWithUs")}</dt>
                <dt>{t("footer.participate.donate")}</dt>
                <dt>{t("footer.participate.sponsor")}</dt>
                <dt className="mb-3">{t("footer.participate.affiliate")}</dt>
                <dt>{t("footer.participate.suggestions")}</dt>
              </dl>
              {/* <p>
                <IndexLinkContainer
                  to="/"
                  href="/"
                  className="link-silver link-no-underline"
                >
                  <span>{t("footer.participate.workWithUs")}</span>
                </IndexLinkContainer>
              </p>

              <p className="mb-0">
                <IndexLinkContainer
                  to="/"
                  href="/"
                  className="link-silver link-no-underline disabled"
                >
                  <span>{t("footer.participate.donate")}</span>
                </IndexLinkContainer>
              </p>

              <p className="mb-0">
                <IndexLinkContainer
                  to="/"
                  href="/"
                  className="link-silver link-no-underline"
                >
                  <span>{t("footer.participate.sponsor")}</span>
                </IndexLinkContainer>
              </p>

              <p>
                <IndexLinkContainer
                  to="/"
                  href="/"
                  className="link-silver link-no-underline"
                >
                  <span>{t("footer.participate.affiliate")}</span>
                </IndexLinkContainer>
              </p>

              <p className="mb-0">
                <IndexLinkContainer
                  to="/"
                  href="/"
                  className="link-silver link-no-underline"
                >
                  <span>{t("footer.participate.suggestions")}</span>
                </IndexLinkContainer>
              </p> */}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-inline mx-auto">
                <p className="text-silver mb-0">
                  <FontAwesomeIcon icon={faCopyright} className="mr-1" />
                  STADIUM8 - {t("footer.socialNetworks.copyright")}
                </p>
                <p className="font-brand-2 font-smaller mb-0">
                  {t("footer.socialNetworks.web-developer")}: Benjamin Jaume -{" "}
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
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

// @ts-ignore
export default Footer;
