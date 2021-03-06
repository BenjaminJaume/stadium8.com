import React, { Component } from "react";
import i18n from "i18next";
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
      isClicked: false,
      status: "",
      formError: false,
      formErrorMessage: "",
      sendingErrorMessage: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    var {
      name,
      emailInput,
      message,
      isClicked,
      status,
      formError,
      formErrorMessage
      // sendingErrorMessage
    } = this.state;
    var { email } = this.props;

    return (
      <>
        {isClicked ? (
          formError ? (
            <div className="text-center text-danger ">
              <FontAwesomeIcon icon={faTimes} className="mr-2" />
              {formErrorMessage}
            </div>
          ) : status === "success" ? (
            <div className="text-center text-emerald ">
              <span className="h6">
                <p className="mb-0">
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                  {i18n.t("contact.form.success.title")}
                </p>
                <p className="mb-0">{i18n.t("contact.form.success.reply")}</p>
              </span>
              <IndexLinkContainer to="/" href="/" className="link-emerald">
                <p>{i18n.t("other.homepageMessage")}</p>
              </IndexLinkContainer>
            </div>
          ) : status === "sendingError" ? (
            <div className="text-center">
              <span className="text-danger h6">
                <FontAwesomeIcon icon={faTimes} className="mr-2" />
                {i18n.t("contact.form.error.title")}
              </span>
              <br />
              <p className="mb-0">
                {i18n.t("contact.form.error.sendEmail.text")}{" "}
                <a href={`mailto:${email}`} className="link-emerald">
                  {i18n.t("contact.form.error.sendEmail.email")}
                </a>
              </p>
              {/* {console.log(sendingErrorMessage)} */}
              <IndexLinkContainer to="/" href="/" className="link-emerald">
                <p>{i18n.t("other.homepageMessage")}</p>
              </IndexLinkContainer>
            </div>
          ) : (
            ""
          )
        ) : (
          ""
        )}

        <div className="mt-3">
          <form className="test-mailing" noValidate>
            <div className="form-group">
              <input
                id="form-name"
                type="text"
                name="name"
                className="form-control"
                placeholder={i18n.t("contact.form.name.title") + "*"}
                data-error={i18n.t("contact.form.name.error")}
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
                placeholder={i18n.t("contact.form.email.title") + "*"}
                data-error={i18n.t("contact.form.email.error")}
                onChange={this.handleEmailChange}
                value={emailInput}
                title=""
                required
              />
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group">
              <textarea
                id="form_message"
                name="message"
                className="form-control textarea-contact"
                placeholder={i18n.t("contact.form.message.title") + "*"}
                data-error={i18n.t("contact.form.message.error")}
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
                className="btn btn-brand"
                onClick={this.handleSubmit}
              >
                <span className="mx-3">
                  {i18n.t("contact.form.button.title")}
                </span>
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }

  handleNameChange(event) {
    this.setState({ formError: false, name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({
      formError: false,
      emailInput: event.target.value,
      emailInputTag: event.target
    });
  }

  handleMessageChange(event) {
    this.setState({ formError: false, message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const templateId = "new_message_template";
    const { name, emailInput, emailInputTag, message } = this.state;
    const errorMessages = {
      nameEmpty: i18n.t("contact.form.errorMessage.nameEmpty"),
      nameLonger: i18n.t("contact.form.errorMessage.nameLonger"),
      emailEmpty: i18n.t("contact.form.errorMessage.emailEmpty"),
      emailAtMissing: i18n.t("contact.form.errorMessage.emailAtMissing"),
      emailDotMissing: i18n.t("contact.form.errorMessage.emailDotMissing"),
      emailInvalidFormat: i18n.t(
        "contact.form.errorMessage.emailInvalidFormat"
      ),
      messageEmpty: i18n.t("contact.form.errorMessage.messageEmpty"),
      messageLonger: i18n.t("contact.form.errorMessage.messageLonger")
    };
    const validEmailRegex = RegExp(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    );

    this.setState({
      isClicked: true
    });

    if (name.length === 0) {
      this.setState({
        formError: true,
        formErrorMessage: errorMessages.nameEmpty
      });
    } else if (name.length < 5) {
      this.setState({
        formError: true,
        formErrorMessage: errorMessages.nameLonger
      });
    } else if (emailInput.length === 0) {
      this.setState({
        formError: true,
        formErrorMessage: errorMessages.emailEmpty
      });
    } else if (emailInput.split("").filter(x => x === "@").length !== 1) {
      this.setState({
        formError: true,
        formErrorMessage: errorMessages.emailAtMissing
      });
    } else if (emailInput.indexOf(".") === -1) {
      this.setState({
        formError: true,
        formErrorMessage: errorMessages.emailDotMissing
      });
    } else if (!validEmailRegex.test(emailInput)) {
      this.setState({
        formError: true,
        formErrorMessage: errorMessages.emailInvalidFormat
      });
    } else if (!emailInputTag.checkValidity()) {
      this.setState({
        formError: true,
        formErrorMessage: errorMessages.emailInvalidFormat
      });
    } else if (message.length === 0) {
      this.setState({
        formError: true,
        formErrorMessage: errorMessages.messageEmpty
      });
    } else if (message.length < 5) {
      this.setState({
        formError: true,
        formErrorMessage: errorMessages.messageLonger
      });
    } else {
      this.sendMessage(templateId, {
        formError: false,
        formErrorMessage: "",
        name: name,
        email: emailInput,
        message: message
      });
    }
  }

  sendMessage(templateId, variables) {
    // @ts-ignore
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        this.setState({
          isClicked: true,
          status: "success"
        });
      })
      .catch(err =>
        this.setState({
          isClicked: true,
          status: "sendingError",
          sendingErrorMessage: `${err}`
        })
      );
  }
}

export default ContactForm;
