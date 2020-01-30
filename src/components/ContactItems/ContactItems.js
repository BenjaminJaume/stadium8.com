import React, { Component } from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faWhatsappSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import {
  faPhoneAlt,
  faEnvelopeSquare
} from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
import { CopyToClipboard } from "react-copy-to-clipboard";

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
    return (
      <>
        <a
          href="https://urlgeni.us/instagram/2civ"
          className="instagram-brand-icon px-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="https://urlgeni.us/facebook/YLfC"
          className="facebook-brand-icon px-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>

        <span className="whatsapp-brand-icon px-1">
          <OverlayTrigger
            trigger="click"
            placement="top"
            rootClose
            overlay={
              <Popover id="popoverContactPhone">
                <Popover.Title as="h3">
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-1" />{" "}
                  Contactez nous
                </Popover.Title>
                <Popover.Content className="text-center">
                  {this.state.copied ? (
                    <span className="text-emerald">Copié!</span>
                  ) : (
                    <span>Ouvrir WhatsApp or copier</span>
                  )}
                  <br />
                  <a
                    href={`https://api.whatsapp.com/send?phone=${this.props.phoneNumber
                      .replace("+", "")
                      .replace(/ /g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open link with WhatsApp"
                  >
                    {this.props.phoneNumber}
                  </a>
                  <span> ou </span>
                  <CopyToClipboard
                    text={this.props.phoneNumber.replace(/ /g, "")}
                    onCopy={() => this.setState({ copied: true })}
                  >
                    <span>
                      <FontAwesomeIcon
                        icon={faClipboard}
                        className="clipboard-icon text-good-night"
                        title="Copy phone number"
                      />
                    </span>
                  </CopyToClipboard>
                  <br />
                </Popover.Content>
              </Popover>
            }
          >
            <FontAwesomeIcon icon={faWhatsappSquare} />
          </OverlayTrigger>
        </span>

        <a
          href="mailto:stadiumcr@gmail.com"
          className="mail-brand-icon px-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelopeSquare} />
        </a>
      </>
    );
  }
}

export default ContactItems;