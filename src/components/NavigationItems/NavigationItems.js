import React from "react";
import { Config } from "../Config/Config";

import "./NavigationItems.css";

const NavigationItems = () => {
  const absPath = Config.ABS_PATH;

  return (
    <>
      <a
        href="https://goo.gl/maps/ynj6pWqmiLVZD1Gx9"
        className="instagram-navigation-icon px-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`.${absPath}/images/brand-icons/gmaps.png`}
          alt=""
          height="32"
          width="32"
          className="mr-1 align-text-top"
        />
      </a>

      <a
        href="https://www.waze.com/ul?ll=9.88425095%2C-85.53937912&navigate=yes"
        className="waze-navigation-icon px-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`.${absPath}/images/brand-icons/waze.png`}
          alt=""
          height="32"
          width="32"
          className="mr-1 align-text-top"
        />
      </a>

      <a
        href="https://www.google.com/maps/dir/?api=1&destination=Stadium8&destination_place_id=ChIJyWTeJ86rn48RugB1_KzeHQU&travelmode=driving"
        className="car-navigation-icon px-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`.${absPath}/images/car.png`}
          alt=""
          height="32"
          width="32"
          className="align-text-top"
        />
      </a>

      <a
        href="https://www.google.com/maps/dir/?api=1&destination=Stadium8&destination_place_id=ChIJyWTeJ86rn48RugB1_KzeHQU&travelmode=walking"
        className="walk-navigation-icon px-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`.${absPath}/images/walk.png`}
          alt=""
          height="32"
          width="32"
          className="mr-1 align-text-top"
        />
      </a>
    </>
  );
};

export default NavigationItems;
