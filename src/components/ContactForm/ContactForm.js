import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { IndexLinkContainer } from "react-router-bootstrap";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      emailInput: "",
      message: "",
      isSent: false,
      status: "",
      errorMessage: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    var { name, emailInput, message, isSent, status } = this.state;
    var { t, email } = this.props;

    return (
      <>
        {isSent ? (
          status === "success" ? (
            <div className="text-center text-emerald ">
              <span className="h6">
                <p className="mb-0">
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                  {t("contact.form.success.title")}
                </p>
                <p className="mb-0">{t("contact.form.success.reply")}</p>
              </span>
              <IndexLinkContainer to="/" href="/" className="link-emerald">
                <p>{t("contact.form.back")}</p>
              </IndexLinkContainer>
            </div>
          ) : status === "error" ? (
            <div className="text-center">
              <span className="text-danger h6">
                <FontAwesomeIcon icon={faTimes} className="mr-2" />
                {t("contact.form.error.title")}
              </span>
              <br />
              <p className="mb-0">
                {t("contact.form.error.sendEmail.text")}{" "}
                <a href={`mailto:${email}`} className="link-emerald">
                  {t("contact.form.error.sendEmail.email")}
                </a>
              </p>
              <IndexLinkContainer to="/" href="/" className="link-emerald">
                <p>{t("contact.form.back")}</p>
              </IndexLinkContainer>
            </div>
          ) : (
            ""
          )
        ) : (
          ""
        )}

        <div className="mt-3">
          <form className="test-mailing">
            <div className="form-group">
              <input
                id="form-name"
                type="text"
                name="name"
                className="form-control"
                placeholder={t("contact.form.name.title") + "*"}
                data-error={t("contact.form.name.error")}
                onChange={this.handleNameChange}
                value={name}
                required
              />
            </div>
            <div className="form-group">
              <input
                id="form_email"
                type="email"
                name="email"
                className="form-control"
                placeholder={t("contact.form.email.title") + "*"}
                data-error={t("contact.form.email.error")}
                onChange={this.handleEmailChange}
                value={emailInput}
                required
              />
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group">
              <textarea
                id="form_message"
                name="message"
                className="form-control textarea-contact"
                placeholder={t("contact.form.message.title") + "*"}
                data-error={t("contact.form.message.error")}
                onChange={this.handleMessageChange}
                value={message}
                required
              ></textarea>
              <div className="help-block with-errors"></div>
            </div>
            <div className="text-center">
              <button
                type="button"
                value="Submit"
                className="btn btn-success mx-2"
                onClick={this.handleSubmit}
              >
                {t("contact.form.button.title")}
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ emailInput: event.target.value });
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    const templateId = "new_message_template";

    this.sendMessage(templateId, {
      name: this.state.name,
      email: this.state.emailInput,
      message: this.state.message
    });
  }

  sendMessage(templateId, variables) {
    // @ts-ignore
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        this.setState({
          isSent: true,
          status: "success"
        });
      })
      .catch(err =>
        this.setState({ isSent: true, status: "error", errorMessage: `${err}` })
      );
  }
}

export default withNamespaces()(ContactForm);
