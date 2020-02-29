import React from "react";

// const format24 = ["fr"];
// const format12 = ["en", "es"];

const TimeFormatting = ({ date, lg }) => {
  let separator, hours, amOrPm;

  switch (lg) {
    case "fr":
      separator = "h";

      hours = date.getHours();
      amOrPm = "";
      break;
    default:
      separator = ".";

      hours = date.getHours() % 12 || 12;
      amOrPm = date.getHours() >= 12 ? "pm" : "am";
      break;
  }

  return (
    <>{`${hours}${separator}${(date.getMinutes() < 10 ? "0" : "") +
      date.getMinutes()}${amOrPm}`}</>
  );
};

export default TimeFormatting;
