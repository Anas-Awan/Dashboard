import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Container, Row, } from "reactstrap";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getEvents } from "./gcal";
import CalendarUsers from "./CalendarUsers";

const localizer = momentLocalizer(moment);

class MyCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount () {
    getEvents((events) => {
      this.setState({events},()=>{
        console.log(events);
      })
    })
  }
 
  render() {
    const {events} = this.state;

    return (
      <>
        <Container fluid>
          <Row>.</Row>
          <Row>.</Row>
          <Row>.</Row>

          <Row>
            <div className="col">
              <Calendar
                localizer={localizer}
                defaultDate={new Date('Tue, 10 July 2019 17:33:00 UTC +00:00')}
                defaultView="month"
                events={events}
                style={{ height: "80vh" }}
                resources= {CalendarUsers}
                resourceIdAccessor= "resourceId"
                resourceTitleAccessor= "resourceTitle"
                startAccessor = "start"
                endAccessor = "end"
                />
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default MyCalendar;