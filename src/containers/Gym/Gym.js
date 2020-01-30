import React from "react";
import "./Gym.css";

const Gym = props => {
  return (
    <div
      className="container-fluid container-gym"
      style={{
        background: `url("./wp-content/themes/stadium8/images/background-gymnase.jpg") no-repeat center fixed`,
        backgroundColor: "var(--black)",
        backgroundSize: "cover"
      }}
    >
      <div className="row h-100 align-items-center">
        <div className="col-12 col-lg-6 mx-auto">
          <div className="bg-light rounded text-center p-5">
            <h1>Gym</h1>
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

export default Gym;
