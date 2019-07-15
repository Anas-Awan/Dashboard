import request from 'superagent';
import calendarUsers from "./CalendarUsers";


const CALENDAR_ID = 'em92gos3b78c1reguio5mks45c@group.calendar.google.com';
const API_KEY = 'AIzaSyAiwj--ck7-YzBBNJupEkkdC6GINruenbc';
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        // console.log("events", resp.text);
        JSON.parse(resp.text).items.forEach((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
            resource: calendarUsers
          })
        })
      return  callback(events)
      }
    })
}

