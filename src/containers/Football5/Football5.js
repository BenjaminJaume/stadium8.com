import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import GoogleCalendar from "../../components/GoogleCalendar/GoogleCalendar";

import "react-tabs/style/react-tabs.css";
import "./Football5.css";

class Football5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  render() {
    const { absPath, t } = this.props;

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
                <div className="opacity-black-75 rounded text-white text-center p-1 p-lg-5">
                  <h1 className="pb-2">{t("football5.title")}</h1>
                  <Tabs>
                    <TabList>
                      <Tab>{t("football5.calendar.title")}</Tab>
                      <Tab>{t("football5.prices.title")}</Tab>
                      <Tab>{t("football5.rules.title")}</Tab>
                    </TabList>
                    <TabPanel>
                      <GoogleCalendar />
                    </TabPanel>
                    <TabPanel>{t("football5.prices.content")}</TabPanel>
                    <TabPanel>{t("football5.rules.content")}</TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// @ts-ignore
export default withNamespaces()(Football5);
