import React from "react";
import "./Football5.css";

const Football5 = props => {
  return (
    <div
      style={{
        background: `url("./images/background-football.jpg") no-repeat center center fixed`,
        backgroundSize: "cover",
        height: "calc(100vh - var(--navbar-height))"
      }}
      className="container-fluid"
    >
      <div className="row h-100 align-items-center">
        <div className="col-12 col-lg-6 mx-auto">
          <div className="bg-light rounded text-center p-5">
            <h1 className="mb-4">Cette page est toujours en construction</h1>

            <img
              src="./images/construction.svg"
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

export default Football5;
