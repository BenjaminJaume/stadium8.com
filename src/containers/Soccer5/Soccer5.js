import React from "react";
import { useTranslation } from "react-i18next";
import GoogleCalendar from "../../components/GoogleCalendar/GoogleCalendar";
import { Helmet } from "react-helmet";
import { Config } from "../../components/Config/Config";
import TimeFormatting from "../../components/TimeFormatting/TimeFormatting";

import "react-tabs/style/react-tabs.css";
import "./Soccer5.css";

const Soccer5 = props => {
  const absPath = Config.ABS_PATH;
  const { footballDetails, events, phoneNumber, lg } = props;
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
                <h1 className="text-brand font-weight-bold mb-3">
                  {t("soccer5.title")}
                </h1>
                <div className="row">
                  <div className="col-12 mx-auto">
                    <p className="mb-0 h3">{t("other.makeBooking")}</p>
                    <p className="animated pulse infinite slower">
                      <a
                        href={`tel:${phoneNumber.replace(/ /g, "")}`}
                        className="h2 link-brand link-no-underline"
                      >
                        {phoneNumber}
                      </a>
                    </p>
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
                          <TimeFormatting
                            date={new Date(footballDetails.morning.from)}
                            lg={lg}
                          />{" "}
                          -{" "}
                          <TimeFormatting
                            date={new Date(footballDetails.morning.to)}
                            lg={lg}
                          />
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
                          <TimeFormatting
                            date={new Date(footballDetails.afternoon.from)}
                            lg={lg}
                          />{" "}
                          -{" "}
                          <TimeFormatting
                            date={new Date(footballDetails.afternoon.to)}
                            lg={lg}
                          />
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
                          <TimeFormatting
                            date={new Date(footballDetails.night.from)}
                            lg={lg}
                          />{" "}
                          -{" "}
                          <TimeFormatting
                            date={new Date(footballDetails.night.to)}
                            lg={lg}
                          />
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
