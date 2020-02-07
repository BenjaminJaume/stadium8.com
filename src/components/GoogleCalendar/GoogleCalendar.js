import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";

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

  const startDay = new Date();
  startDay.setHours(
    footballDetails.morning.hourFrom,
    footballDetails.morning.minuteFrom,
    0
  );
  const endDay = new Date();
  endDay.setHours(
    footballDetails.night.hourTo,
    footballDetails.night.minuteTo,
    0
  );

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
    }
  };

  return (
    // @ts-ignore
    <BigCalendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      defaultView="week"
      min={startDay}
      max={endDay}
      views={["week", "agenda"]}
      formats={formats}
    />
  );
};

export default GoogleCalendar;
