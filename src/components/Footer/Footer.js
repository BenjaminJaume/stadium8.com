import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
// import NavigationItems from "../NavigationItems/NavigationItems";
import ContactItems from "../ContactItems/ContactItems";
import { Config } from "../Config/Config";
import TimeFormatting from "../TimeFormatting/TimeFormatting";
import { IndexLinkContainer } from "react-router-bootstrap";

import "./Footer.css";

const Footer = ({ phoneNumber, email, openingHours, lg }) => {
  const absPath = Config.ABS_PATH;
  const { t } = useTranslation();

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
              <p>
                <a
                  href="https://goo.gl/maps/ynj6pWqmiLVZD1Gx9"
                  className="link-brand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("footer.presentation.navigation")}
                </a>
              </p>
              <p className="mb-1">
                <a
                  href={`tel:${phoneNumber.replace(/ /g, "")}`}
                  className="link-silver link-no-underline"
                >
                  {phoneNumber}
                </a>
              </p>
              <p>
                <a href={`mailto:${email}`} className="link-silver">
                  {email}
                </a>
              </p>
            </div>
            <div className="col-12 col-lg-3">
              <p className="text-brand">
                {t("footer.openingHours.title").toUpperCase()}
              </p>

              <table className="mx-auto mb-3 mb-lg-0">
                <tbody>
                  <tr>
                    <td align="right">{`${t(
                      "footer.openingHours.monday"
                    )} `}</td>
                    <td>
                      <span className="mx-1">
                        <TimeFormatting
                          date={new Date(openingHours.weekDay.open)}
                          lg={lg}
                        />
                      </span>
                    </td>
                    <td>{` ${t("footer.openingHours.to")} `}</td>
                    <td>
                      <span className="mx-1">
                        <TimeFormatting
                          date={new Date(openingHours.weekDay.close)}
                          lg={lg}
                        />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td align="right">{`${t(
                      "footer.openingHours.tuesday"
                    )} `}</td>
                    <td>
                      <span className="mx-1">
                        <TimeFormatting
                          date={new Date(openingHours.weekDay.open)}
                          lg={lg}
                        />
                      </span>
                    </td>
                    <td>{` ${t("footer.openingHours.to")} `}</td>
                    <td>
                      <span className="mx-1">
                        <TimeFormatting
                          date={new Date(openingHours.weekDay.close)}
                          lg={lg}
                        />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td align="right">{`${t(
                      "footer.openingHours.wednesday"
                    )} `}</td>
                    <td>
                      <span className="mx-1">
                        <TimeFormatting
                          date={new Date(openingHours.weekDay.open)}
                          lg={lg}
                        />
                      </span>
                    </td>
                    <td>{` ${t("footer.openingHours.to")} `}</td>
                    <td>
                      <span className="mx-1">
                        <TimeFormatting
                          date={new Date(openingHours.weekDay.close)}
                          lg={lg}
                        />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td align="right">{`${t(
                      "footer.openingHours.thursday"
                    )} `}</td>
                    <td>
                      <span className="mx-1">
                        <TimeFormatting
                          date={new Date(openingHours.weekDay.open)}
                          lg={lg}
                        />
                      </span>
                    </td>
                    <td>{` ${t("footer.openingHours.to")} `}</td>
                    <td>
                      <span className="mx-1">
                        <TimeFormatting
                          date={new Date(openingHours.weekDay.close)}
                          lg={lg}
                        />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td align="right">{`${t(
                      "footer.openingHours.friday"
                    )} `}</td>
                    <td>
                      <span className="mx-1">
                        <TimeFormatting
                          date={new Date(openingHours.weekDay.open)}
                          lg={lg}
                        />
                      </span>
                    </td>
                    <td>{` ${t("footer.openingHours.to")} `}</td>
                    <td>
                      <span className="mx-1">
                        <TimeFormatting
                          date={new Date(openingHours.weekDay.close)}
                          lg={lg}
                        />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td align="right">{`${t(
                      "footer.openingHours.saturday"
                    )} `}</td>
                    <td>
                      <span className="mx-1">
                        <TimeFormatting
                          date={new Date(openingHours.weekEnd.open)}
                          lg={lg}
                        />
                      </span>
                    </td>
                    <td>{` ${t("footer.openingHours.to")} `}</td>
                    <td>
                      <span className="mx-1">
                        <TimeFormatting
                          date={new Date(openingHours.weekEnd.close)}
                          lg={lg}
                        />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td align="right">{`${t(
                      "footer.openingHours.sunday"
                    )} `}</td>
                    <td>
                      <span className="mx-1">
                        <TimeFormatting
                          date={new Date(openingHours.weekEnd.open)}
                          lg={lg}
                        />
                      </span>
                    </td>
                    <td>{` ${t("footer.openingHours.to")} `}</td>
                    <td>
                      <span className="mx-1">
                        <TimeFormatting
                          date={new Date(openingHours.weekEnd.close)}
                          lg={lg}
                        />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* <p>
                {`${t("footer.openingHours.monday")} `}
                <TimeFormatting
                  date={new Date(openingHours.weekDay.open)}
                  lg={lg}
                />
                {` ${t("footer.openingHours.to")} `}
                <TimeFormatting
                  date={new Date(openingHours.weekDay.close)}
                  lg={lg}
                />

                <br />

                {`${t("footer.openingHours.tuesday")} `}
                <TimeFormatting
                  date={new Date(openingHours.weekDay.open)}
                  lg={lg}
                />
                {` ${t("footer.openingHours.to")} `}
                <TimeFormatting
                  date={new Date(openingHours.weekDay.close)}
                  lg={lg}
                />

                <br />

                {`${t("footer.openingHours.wednesday")} `}

                <TimeFormatting
                  date={new Date(openingHours.weekDay.open)}
                  lg={lg}
                />
                {` ${t("footer.openingHours.to")} `}
                <TimeFormatting
                  date={new Date(openingHours.weekDay.close)}
                  lg={lg}
                />

                <br />

                {`${t("footer.openingHours.thursday")} `}
                <TimeFormatting
                  date={new Date(openingHours.weekDay.open)}
                  lg={lg}
                />
                {` ${t("footer.openingHours.to")} `}
                <TimeFormatting
                  date={new Date(openingHours.weekDay.close)}
                  lg={lg}
                />

                <br />

                {`${t("footer.openingHours.friday")} `}
                <TimeFormatting
                  date={new Date(openingHours.weekDay.open)}
                  lg={lg}
                />
                {` ${t("footer.openingHours.to")} `}
                <TimeFormatting
                  date={new Date(openingHours.weekDay.close)}
                  lg={lg}
                />

                <br />

                {`${t("footer.openingHours.saturday")} `}
                <TimeFormatting
                  date={new Date(openingHours.weekEnd.open)}
                  lg={lg}
                />
                {` ${t("footer.openingHours.to")} `}
                <TimeFormatting
                  date={new Date(openingHours.weekEnd.close)}
                  lg={lg}
                />

                <br />

                {`${t("footer.openingHours.sunday")} `}
                <TimeFormatting
                  date={new Date(openingHours.weekEnd.open)}
                  lg={lg}
                />
                {` ${t("footer.openingHours.to")} `}
                <TimeFormatting
                  date={new Date(openingHours.weekEnd.close)}
                  lg={lg}
                />
              </p> */}
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
                <dt className="mb-3">
                  <IndexLinkContainer
                    to="/contact"
                    href="/contact"
                    className="link-silver link-no-underline"
                  >
                    <span>{t("footer.participate.workWithUs")}</span>
                  </IndexLinkContainer>
                </dt>
                <dt>
                  <IndexLinkContainer
                    to="/contact"
                    href="/contact"
                    className="link-silver link-no-underline"
                  >
                    <span>{t("footer.participate.donate")}</span>
                  </IndexLinkContainer>
                </dt>
                <dt>
                  <IndexLinkContainer
                    to="/contact"
                    href="/contact"
                    className="link-silver link-no-underline"
                  >
                    <span>{t("footer.participate.sponsor")}</span>
                  </IndexLinkContainer>
                </dt>
                <dt className="mb-3">
                  <IndexLinkContainer
                    to="/contact"
                    href="/contact"
                    className="link-silver link-no-underline"
                  >
                    <span>{t("footer.participate.affiliate")}</span>
                  </IndexLinkContainer>
                </dt>
                <dt>
                  <IndexLinkContainer
                    to="/contact"
                    href="/contact"
                    className="link-silver link-no-underline"
                  >
                    <span>{t("footer.participate.suggestions")}</span>
                  </IndexLinkContainer>
                </dt>
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
