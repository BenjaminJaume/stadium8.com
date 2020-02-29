import React from "react";

const format24 = ["fr"];
const format12 = ["en", "es"];

const TimeFormatting = ({ date, lg }) => {
  let separator;
  let hours;

  function formatHours(hours) {
    return hours % 12 || 12;
  }

  function amOrPm(hours) {
    if (lg !== "fr") {
      return hours >= 12 ? "pm" : "am";
    } else {
      return "";
    }
  }

  switch (lg) {
    case "fr":
      separator = "h";

      hours = date.getHours();
      break;
    default:
      separator = ".";

      hours = formatHours(date.getHours());
      break;
  }

  return (
    <>{`${hours}${separator}${(date.getMinutes() < 10 ? "0" : "") +
      date.getMinutes()}${amOrPm(date.getHours())}`}</>
  );
};

export default TimeFormatting;
