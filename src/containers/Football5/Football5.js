import React from "react";
import { withNamespaces } from "react-i18next";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import GoogleCalendar from "../../components/GoogleCalendar/GoogleCalendar";
import { IndexLinkContainer } from "react-router-bootstrap";

import "react-tabs/style/react-tabs.css";
import "./Football5.css";

const Football5 = props => {
  const { absPath, footballDetails, t, events } = props;

  return (
    <div
      className="responsive-background background-position-fixed"
      style={{
        backgroundImage: `url(".${absPath}/images/background-football.jpg")`
      }}
    >
      <div className="color-brand-filter">
        <div className="container-fluid container-100vh">
          <div className="row h-100 align-items-center">
            <div className="col-12 col-lg-10 mx-auto py-5">
              <div className="opacity-black-75 rounded text-white text-center py-5 px-1 p-lg-5">
                <h1 className="mb-4">{t("football5.title")}</h1>
                <Tabs>
                  <TabList>
                    <Tab>
                      <span className="h4">
                        {t("football5.calendar.title")}
                      </span>
                    </Tab>
                    <Tab>
                      <span className="h4">{t("football5.prices.title")}</span>
                    </Tab>
                    <Tab>
                      <span className="h4">{t("football5.rules.title")}</span>
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <GoogleCalendar
                      footballDetails={footballDetails}
                      events={events}
                    />
                  </TabPanel>

                  <TabPanel>
                    <div className="container my-5 mb-lg-0">
                      <div className="row">
                        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                          <div className="mb-4">
                            <h3 className="text-brand">
                              {t("football5.prices.morning.title")}
                            </h3>
                            <h3>
                              {`${footballDetails.morning.hourFrom}h${footballDetails.morning.minuteFrom} - ${footballDetails.morning.hourTo}h${footballDetails.morning.minuteTo}`}
                            </h3>
                          </div>
                          <h1>
                            &#8353;{footballDetails.morning.price.colones}
                            <small className="text-muted">/1h</small>
                          </h1>
                          <h3>
                            &#36;{footballDetails.morning.price.dollars}
                            <small className="text-muted">/1h</small>
                          </h3>
                        </div>
                        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                          <div className="mb-4">
                            <h3 className="text-brand">
                              {t("football5.prices.afternoon.title")}
                            </h3>
                            <h3>
                              {`${footballDetails.afternoon.hourFrom}h${footballDetails.afternoon.minuteFrom} - ${footballDetails.afternoon.hourTo}h${footballDetails.afternoon.minuteTo}`}
                            </h3>
                          </div>
                          <h1>
                            &#8353;{footballDetails.afternoon.price.colones}
                            <small className="text-muted">/1h</small>
                          </h1>
                          <h3>
                            &#36;{footballDetails.afternoon.price.dollars}
                            <small className="text-muted">/1h</small>
                          </h3>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="mb-4">
                            <h3 className="text-brand">
                              {t("football5.prices.night.title")}
                            </h3>
                            <h3>
                              {`${footballDetails.night.hourFrom}h${footballDetails.night.minuteFrom} - ${footballDetails.night.hourTo}h${footballDetails.night.minuteTo}`}
                            </h3>
                          </div>
                          <h1>
                            &#8353;{footballDetails.night.price.colones}
                            <small className="text-muted">/1h</small>
                          </h1>
                          <h3>
                            &#36;{footballDetails.night.price.dollars}
                            <small className="text-muted">/1h</small>
                          </h3>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col-12 mx-auto">
                          <IndexLinkContainer
                            to="/contact"
                            href="/contact"
                            className="btn btn-success text-uppercase"
                          >
                            <span>{t("football5.prices.buttonContact")}</span>
                          </IndexLinkContainer>
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>{t("football5.rules.content")}</TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// @ts-ignore
export default withNamespaces()(Football5);
