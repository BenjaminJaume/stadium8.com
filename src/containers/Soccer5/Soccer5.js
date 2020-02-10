import React from "react";
import { useTranslation } from "react-i18next";
import GoogleCalendar from "../../components/GoogleCalendar/GoogleCalendar";
import { IndexLinkContainer } from "react-router-bootstrap";
import { Helmet } from "react-helmet";
import { Config } from "../../components/Config/Config";

import "react-tabs/style/react-tabs.css";
import "./Soccer5.css";

const Soccer5 = props => {
  const absPath = Config.ABS_PATH;
  const { footballDetails, events, phoneNumber } = props;
  const { t } = useTranslation();

  return (
    <div
      className="responsive-background background-position-fixed"
      style={{
        backgroundImage: `url(".${absPath}/images/background-football.jpg")`
      }}
    >
      <Helmet>
        <title>Soccer5</title>
        <meta
          name="description"
          content="We have a dedicated soccer field here. Check out the schedule, the prices, the rules and book your sport here"
        />
      </Helmet>

      <div className="color-brand-filter">
        <div className="container-fluid container-100vh">
          <div className="row h-100 align-items-center">
            <div className="col-12 col-lg-10 mx-auto py-5">
              <div className="opacity-black-75 rounded text-white text-center py-5 px-1 p-lg-5">
                <h1 className="text-brand mb-3">{t("soccer5.title")}</h1>
                <div className="row mb-5">
                  <div className="col-12 mx-auto">
                    <p className="mb-0 h3">{t("other.makeBooking")}</p>
                    <p className="animated pulse infinite delay-2s slower">
                      <a
                        href={`tel:${phoneNumber.replace(/ /g, "")}`}
                        className="display-4 link-brand link-no-underline"
                      >
                        {phoneNumber}
                      </a>
                    </p>
                    <IndexLinkContainer
                      to="/contact"
                      href="/contact"
                      className="btn btn-brand text-uppercase"
                    >
                      <span>{t("soccer5.prices.buttonContact")}</span>
                    </IndexLinkContainer>
                  </div>
                </div>

                <div>
                  <div className="mt-4">
                    <GoogleCalendar
                      footballDetails={footballDetails}
                      events={events}
                    />
                  </div>
                </div>

                <div className="container my-5">
                  <div className="row">
                    <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                      <div className="mb-4">
                        <h3 className="text-brand">
                          {t("soccer5.prices.morning.title")}
                        </h3>
                        <h3>
                          {`${footballDetails.morning.hourFrom}h${footballDetails.morning.minuteFrom} - ${footballDetails.morning.hourTo}h${footballDetails.morning.minuteTo}`}
                        </h3>
                      </div>
                      <h1>
                        &#8353;{footballDetails.morning.price.colones}
                        <small className="text-muted">
                          /{t("soccer5.prices.hour")}
                        </small>
                      </h1>
                      <h3>
                        &#36;{footballDetails.morning.price.dollars}
                        <small className="text-muted">
                          /{t("soccer5.prices.hour")}
                        </small>
                      </h3>
                    </div>
                    <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                      <div className="mb-4">
                        <h3 className="text-brand">
                          {t("soccer5.prices.afternoon.title")}
                        </h3>
                        <h3>
                          {`${footballDetails.afternoon.hourFrom}h${footballDetails.afternoon.minuteFrom} - ${footballDetails.afternoon.hourTo}h${footballDetails.afternoon.minuteTo}`}
                        </h3>
                      </div>
                      <h1>
                        &#8353;{footballDetails.afternoon.price.colones}
                        <small className="text-muted">
                          /{t("soccer5.prices.hour")}
                        </small>
                      </h1>
                      <h3>
                        &#36;{footballDetails.afternoon.price.dollars}
                        <small className="text-muted">
                          /{t("soccer5.prices.hour")}
                        </small>
                      </h3>
                    </div>
                    <div className="col-12 col-lg-4">
                      <div className="mb-4">
                        <h3 className="text-brand">
                          {t("soccer5.prices.night.title")}
                        </h3>
                        <h3>
                          {`${footballDetails.night.hourFrom}h${footballDetails.night.minuteFrom} - ${footballDetails.night.hourTo}h${footballDetails.night.minuteTo}`}
                        </h3>
                      </div>
                      <h1>
                        &#8353;{footballDetails.night.price.colones}
                        <small className="text-muted">
                          /{t("soccer5.prices.hour")}
                        </small>
                      </h1>
                      <h3>
                        &#36;{footballDetails.night.price.dollars}
                        <small className="text-muted">
                          /{t("soccer5.prices.hour")}
                        </small>
                      </h3>
                    </div>
                  </div>
                </div>

                <hr className="divider w-75 mx-auto" />

                <div>
                  <div>
                    <p className="h2">{t("soccer5.rules.title")}</p>
                  </div>

                  {t("soccer5.rules.content")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soccer5;
