import React from "react";
import "./Contact.css";

const Contact = props => {
  return (
    <div className="container-fluid container-100vh">
      <div className="row h-100 align-items-center">
        <div className="col-12 col-lg-10 mx-auto py-5">
          <div className="opacity-black-75 text-white rounded text-center p-5">
            <h1>Contact</h1>
            <h3 className="mb-4">Cette page est en construction</h3>
            <img
              src="./wp-content/themes/stadium8/images/construction.svg"
              alt="Cone"
              title="Désolé pour la gêne occasionnée"
              className="img-fluid rounded cone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
