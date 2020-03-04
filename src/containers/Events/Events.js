import React, { Component } from "react";
import i18n from "i18next";
import { Config } from "../../components/Config/Config";
import { HollowDotsSpinner } from "react-epic-spinners";
import "./Events.css";

class Events extends Component {
  constructor(props) {
    super(props);

    this.createMarkup = this.createMarkup.bind(this);
  }

  createMarkup(html) {
    return {
      __html: html
    };
  }

  render() {
    const {
      lg,
      urlEventPictureEN,
      urlEventPictureES,
      urlEventPictureFR,
      eventContentES,
      eventContentEN,
      eventContentFR,
      isLoadingEventPicture,
      errorEventPicture
    } = this.props;

    var urlEventPicture = "";
    var eventContent = "";

    switch (lg) {
      case "es":
        urlEventPicture = urlEventPictureES;
        eventContent = eventContentES;
        break;
      case "en":
        urlEventPicture = urlEventPictureEN;
        eventContent = eventContentEN;
        break;
      case "fr":
        urlEventPicture = urlEventPictureFR;
        eventContent = eventContentFR;
        break;
      default:
        urlEventPicture = urlEventPictureEN;
        eventContent = eventContentEN;
        break;
    }

    const absPath = Config.ABS_PATH;

    return (
      <div
        className="responsive-background background-position-fixed"
        style={{
          backgroundImage: `url(".${absPath}/images/background-events.jpg")`
        }}
      >
        <div className="color-brand-filter">
          <div className="container-fluid container-100vh">
            <div className="row h-100 align-items-center">
              <div className="col-12 col-lg-10 mx-auto px-0 py-5">
                <div className="opacity-black-75 text-white text-center px-1 py-5 px-lg-5">
                  <h1 className="mb-4 text-brand">{i18n.t("navbar.events")}</h1>

                  {isLoadingEventPicture ? (
                    <h2 className="loading-text text-center mt-5">
                      <HollowDotsSpinner color="white" className="mx-auto" />
                    </h2>
                  ) : !errorEventPicture ? (
                    <div>
                      <img
                        src={urlEventPicture}
                        className="picture-events img-fluid rounded-lg mb-5"
                        alt=""
                      />
                      <p
                        className=""
                        dangerouslySetInnerHTML={this.createMarkup(
                          eventContent
                        )}
                      />
                    </div>
                  ) : (
                    <p className="h3">{i18n.t("events.error")}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
