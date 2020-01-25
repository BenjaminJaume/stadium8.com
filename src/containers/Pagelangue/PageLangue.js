import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import "./PageLangue.css";

const PageLangue = () => {
  return (
    <div className="container page-langue pt-5">
      <img src="./images/logo-black-xl.png" className="img-fluid" alt="" />

      <LinkContainer to="/">
        <button>Foo</button>
      </LinkContainer>
    </div>
  );
};

export default PageLangue;
