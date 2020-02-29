import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import { useWindowSize } from "../WindowSize/WindowSize";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./GoogleCalendar.css";

moment.locale("ko", {
  week: {
    dow: 1,
    doy: 1
  }
});

const localizer = BigCalendar.momentLocalizer(moment);

const GoogleCalendar = props => {
  const { footballDetails, events } = props;
  const windowSize = useWindowSize();

  const startDay = new Date(footballDetails.morning.from);
  const endDay = new Date(footballDetails.night.to);

  const formats = {
    dayFormat: function(date, culture, localizer) {
      return localizer.format(date, "DD/MM", culture);
    },
    dayRangeHeaderFormat: function({ start, end }, culture, localizer) {
      return (
        localizer.format(start, "DD/MM/YY", culture) +
        " - " +
        localizer.format(end, "DD/MM/YY", culture)
      );
    },
    timeGutterFormat: function(date, culture, localizer) {
      return localizer.format(date, "HH:mm", culture);
    },
    dayHeaderFormat: function(date, culture, localizer) {
      return localizer.format(date, "dddd DD/MM", culture);
    }
  };

  return (
    // @ts-ignore
    <BigCalendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      defaultView={windowSize.width >= 576 ? "week" : "day"}
      min={startDay}
      max={endDay}
      views={["week", "day", "agenda"]}
      formats={formats}
    />
  );
};

export default GoogleCalendar;
