import request from "superagent";
import { Config } from "../../components/Config/Config";

let GOOGLE_CALENDAR_URL = `https://www.googleapis.com/calendar/v3/calendars/${Config.CALENDAR_URL}/events?key=${Config.CALENDAR_API_KEY}`;

export function getEvents(callback) {
  request.get(GOOGLE_CALENDAR_URL).end((err, resp) => {
    if (!err) {
      const events = [];
      JSON.parse(resp.text).items.map(event => {
        return events.push({
          start: new Date(event.start.dateTime.toString()),
          end: new Date(event.end.dateTime.toString()),
          title: event.summary
        });
      });
      callback(events);
    }
  });
}
