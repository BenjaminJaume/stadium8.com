import React from "react";
// import "./Accueil.css";

const Accueil = props => {
  return (
    <div
      className="accueil"
      style={{
        backgroundImage: 'url("./images/background-accueil.png")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "fixed",
        backgroundPositionX: "center",
        height: "calc(100vh - 77px)"
      }}
    >
      {/* <img src="./images/background-accueil.png" alt="baccckground" /> */}
      <div>Page Accueil</div>
    </div>
  );
};

export default Accueil;
