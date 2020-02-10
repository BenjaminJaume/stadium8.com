import React from "react";
import { useTranslation } from "react-i18next";
import { Config } from "../../components/Config/Config";
import "./Gym.css";

const Gym = props => {
  const absPath = Config.ABS_PATH;
  const { t } = useTranslation();

  return (
    <div
      className="responsive-background background-position-fixed"
      style={{
        backgroundImage: `url(".${absPath}/images/background-gym.jpg")`
      }}
    >
      <div className="color-brand-filter">
        <div className="container-fluid container-100vh">
          <div className="row h-100 align-items-center">
            <div className="col-12 col-lg-10 mx-auto py-5">
              <div className="opacity-black-75 text-white rounded text-center p-5">
                <h1 className="mb-4 text-brand">{t("navbar.gymnasium")}</h1>
                <h3>{t("other.construction.title")}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gym;
