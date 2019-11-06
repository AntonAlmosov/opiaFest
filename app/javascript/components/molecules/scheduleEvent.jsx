import React from "react";
import anime from "animejs/lib/anime.es.js";

export default ({ event }) => {
  let expand = e => {
    console.log(e.target);
    anime({
      targets: e.target.closest(".scheduleEvent"),
      height: 490,
      easing: "easeInOutSine",
    });
    anime({
      targets: e.target.closest(".scheduleEvent").querySelector(".picture"),
      height: 490,
      opacity: 1,
      easing: "easeInOutSine",
    });
  };

  let reset = e => {
    anime({
      targets: e.target.closest(".scheduleEvent"),
      height: 80,
      easing: "easeInOutSine",
    });
    anime({
      targets: e.target.closest(".scheduleEvent").querySelector(".picture"),
      height: 80,
      opacity: 0,
      easing: "easeInOutSine",
    });
  };

  return (
    <div
      className="scheduleEvent"
      onMouseEnter={e => expand(e)}
      onMouseLeave={e => reset(e)}
    >
      <div className="picture"></div>
      <div className="field">
        <span>{event.time}</span>
      </div>
      <div className="info">
        <h2>{event.eType}</h2>
        <h1>{event.title}</h1>
      </div>
    </div>
  );
};
