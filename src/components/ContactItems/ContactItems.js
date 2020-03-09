import React, { Component } from "react";
import i18n from "i18next";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Config } from "../Config/Config";

import "./ContactItems.css";

class ContactItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      copied: false
    };
  }

  render() {
    const absPath = Config.ABS_PATH;
    const { email } = this.props;

    return (
      <>
        <a
          href="https://urlgeni.us/instagram/stadium8"
          className="instagram-brand-icon px-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`.${absPath}/images/brand-icons/instagram.png`}
            alt=""
            height="32"
            width="32"
            className="align-text-bottom"
          />
        </a>

        <a
          href="https://urlgeni.us/facebook/stadium8"
          className="facebook-brand-icon px-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`.${absPath}/images/brand-icons/facebook.png`}
            alt=""
            height="32"
            width="32"
            className="align-text-bottom"
          />
        </a>

        <a
          href="https://urlgeni.us/fb_messenger/stadium8"
          className="messenger-brand-icon px-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`.${absPath}/images/brand-icons/messenger.png`}
            alt=""
            height="32"
            width="32"
            className="align-text-bottom"
          />
        </a>

        <br />

        <span className="whatsapp-brand-icon px-1">
          <OverlayTrigger
            trigger="click"
            placement="top"
            rootClose
            overlay={
              <Popover id="popoverContactPhone">
                <Popover.Title as="h3">
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-1" />{" "}
                  {i18n.t("footer.socialNetworks.whatsappPopover.title")}
                </Popover.Title>
                <Popover.Content className="text-center">
                  {this.state.copied ? (
                    <span className="text-emerald">
                      {i18n.t("footer.socialNetworks.whatsappPopover.copied")}
                    </span>
                  ) : (
                    <span>
                      {i18n.t("footer.socialNetworks.whatsappPopover.content")}
                    </span>
                  )}
                  <br />
                  <a
                    href={`https://api.whatsapp.com/send?phone=${this.props.phoneNumber
                      .replace("+", "")
                      .replace(/ /g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${i18n.t(
                      "footer.socialNetworks.whatsappPopover.openLink"
                    )} WhatsApp`}
                  >
                    {this.props.phoneNumber}
                  </a>
                  <span>
                    {" "}
                    {i18n.t("footer.socialNetworks.whatsappPopover.or")}{" "}
                  </span>
                  <CopyToClipboard
                    text={this.props.phoneNumber.replace(/ /g, "")}
                    onCopy={() => this.setState({ copied: true })}
                  >
                    <span>
                      <FontAwesomeIcon
                        icon={faClipboard}
                        className="clipboard-icon text-good-night"
                        title={i18n.t(
                          "footer.socialNetworks.whatsappPopover.copy"
                        )}
                      />
                    </span>
                  </CopyToClipboard>
                  <br />
                </Popover.Content>
              </Popover>
            }
          >
            <img
              src={`.${absPath}/images/brand-icons/whatsapp.png`}
              alt=""
              height="32"
              width="32"
              className="align-text-top"
            />
          </OverlayTrigger>
        </span>

        <a
          href={`mailto:${email}`}
          className="mail-brand-icon px-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`.${absPath}/images/brand-icons/mail.png`}
            alt=""
            height="32"
            width="32"
            className="align-text-top"
          />
        </a>

        <a
          href="https://urlgeni.us/youtube/channel/stadium8"
          className="youtube-brand-icon px-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`.${absPath}/images/brand-icons/youtube.png`}
            alt=""
            height="32"
            width="32"
            className="align-text-top"
          />
        </a>

        {/* <a
          href="https://www.google.com/maps/dir/?api=1&destination=Stadium8&destination_place_id=ChIJyWTeJ86rn48RugB1_KzeHQU"
          className="gMaps-brand-icon px-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`.${absPath}/images/brand-icons/gmaps.png`}
            alt=""
            height="32"
            width="32"
          />
        </a>

        <a
          href="https://www.waze.com/ul?ll=9.88425095%2C-85.53937912&navigate=yes"
          className="waze-brand-icon px-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`.${absPath}/images/brand-icons/waze.png`}
            alt=""
            height="32"
            width="32"
          />
        </a> */}
      </>
    );
  }
}

export default ContactItems;
