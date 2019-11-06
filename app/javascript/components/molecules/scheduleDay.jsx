import React from "react";
import ScheduleEvent from "./scheduleEvent";

export default ({ title, events }) => {
  return (
    <div className="scheduleDay">
      <div className="scheduleDayTittle">
        <span>{title}</span>
      </div>
      <div className="dividerDay"></div>
      <div className="scheduleDayEventsWrapper">
        {events.map(e => {
          console.log(e);
          return <ScheduleEvent event={e} key={e.title} />;
        })}
      </div>
    </div>
  );
};
