import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import { getEvents } from "./fetch";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./GoogleCalendar.css";

const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const startDay = new Date();
startDay.setHours(6, 0, 0);
const endDay = new Date();
endDay.setHours(22, 0, 0);

export default class GoogleCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    getEvents(events => {
      this.setState({ events });
    });
  }

  render() {
    return (
      // @ts-ignore
      <BigCalendar
        localizer={localizer}
        events={this.state.events}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"
        min={startDay}
        max={endDay}
      />
    );
  }
}
