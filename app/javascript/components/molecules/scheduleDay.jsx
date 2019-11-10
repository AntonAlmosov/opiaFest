import React, { useState } from "react";
import ScheduleEvent from "./scheduleEvent";

export default ({ title, events }) => {
  return (
    <div className="scheduleDay" key={title}>
      <div className="scheduleDayTittle">
        <span>{title}</span>
      </div>
      <div className="dividerDay"></div>
      <div className="scheduleDayEventsWrapper">
        {events.map(e => {
          return <ScheduleEvent event={e} key={e.id} />;
        })}
      </div>
    </div>
  );
};
