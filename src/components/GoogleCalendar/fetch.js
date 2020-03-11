import request from "superagent";
import { Config } from "../../components/Config/Config";
import { RRule } from "rrule";

let GOOGLE_CALENDAR_URL = `https://www.googleapis.com/calendar/v3/calendars/${Config.CALENDAR_URL}/events?key=${Config.CALENDAR_API_KEY}`;

export function getEvents(callback) {
  const extractDate = data => {
    // Date format: 20200314T055959Z
    const srcStart = data.indexOf("UNTIL=") + 6;
    const srcEndYear = srcStart + 4;
    const srcEndMonth = srcEndYear + 2;
    const srcEndDay = srcEndMonth + 2;

    return {
      year: data.slice(srcStart, srcEndYear),
      month: data.slice(srcEndYear, srcEndMonth),
      day: data.slice(srcEndMonth, srcEndDay)
    };
  };

  request.get(GOOGLE_CALENDAR_URL).end((err, resp) => {
    if (!err) {
      let events = [];

      JSON.parse(resp.text).items.map(event => {
        // If the event is recurrent
        if (event.recurrence) {
          var tempArray = [];
          var rule;

          // If a date until the event occurs is provided
          if (event.recurrence[0].indexOf("UNTIL=") !== -1) {
            const data = extractDate(event.recurrence[0]);
            const until = new Date(data.year, data.month - 1, data.day);

            // Create an array of events
            rule = new RRule({
              freq: RRule.WEEKLY,
              dtstart: new Date(event.start.dateTime),
              until
            });
          } else {
            // If the date until the event occurs is NOT provided
            // Create an array of events until the end of the year of the event
            rule = new RRule({
              freq: RRule.WEEKLY,
              dtstart: new Date(event.start.dateTime),
              until: new Date(
                event.start.dateTime.toString().slice(0, 4),
                11,
                31
              )
            });
          }

          rule.all();

          // Calculate duration (in hours)
          var duration =
            (new Date(event.end.dateTime) - new Date(event.start.dateTime)) /
            3600000;

          rule._cache.all.forEach(item => {
            const endTime = new Date(item);
            endTime.setHours(item.getHours() + duration);

            tempArray.push({
              start: item,
              end: endTime,
              title: event.summary
            });
          });

          events = events.concat(tempArray);
        } else {
          console.log(!event.recurringEventId);
          if (event.status === "confirmed" && !event.recurringEventId) {
            events.push({
              start: new Date(event.start.dateTime),
              end: new Date(event.end.dateTime),
              title: event.summary
            });
          }
          return events;
        }
      });
      callback(events);
    }
  });
}
