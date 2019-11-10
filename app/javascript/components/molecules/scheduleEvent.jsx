import React from "react";
import anime from "animejs/lib/anime.es.js";

export default ({ event }) => {
  let time = 700;
  let expand = e => {
    anime({
      targets: e.target.closest(".scheduleEvent"),
      height: 490,
      easing: "easeInOutSine",
      color: "#fff",
      duration: time,
    });
    anime({
      targets: e.target.closest(".scheduleEvent").querySelector(".picture"),
      height: 490,
      opacity: 1,
      easing: "easeInOutSine",
      duration: time,
    });
    anime({
      targets: e.target.closest(".scheduleEvent").querySelector(".dimm"),
      height: 490,
      opacity: 1,
      easing: "easeInOutSine",
      duration: time,
    });
    // e.target
    //   .closest(".scheduleEvent")
    //   .querySelector(".info")
    //   .querySelector("p")
    //   .classList.remove("none");
    // anime({
    //   targets: e.target
    //     .closest(".scheduleEvent")
    //     .querySelector(".info")
    //     .querySelector("p"),
    //   top: 162,
    //   opacity: 1,
    //   easing: "easeInOutSine",
    //   delay: 100,
    //   duration: 500,
    // });
  };

  let reset = e => {
    let p = e.target
      .closest(".scheduleEvent")
      .querySelector(".info")
      .querySelector("p");
    anime({
      targets: e.target.closest(".scheduleEvent"),
      height: 80,
      easing: "easeInOutSine",
      color: "#000000",
      duration: time,
    });
    anime({
      targets: e.target.closest(".scheduleEvent").querySelector(".picture"),
      height: 80,
      opacity: 0,
      easing: "easeInOutSine",
      duration: time,
    });
    anime({
      targets: e.target.closest(".scheduleEvent").querySelector(".dimm"),
      height: 80,
      opacity: 0,
      easing: "easeInOutSine",
      duration: time,
    });
    // anime({
    //   targets: e.target
    //     .closest(".scheduleEvent")
    //     .querySelector(".info")
    //     .querySelector("p"),
    //   top: 0,
    //   opacity: 0,
    //   easing: "easeInOutSine",
    //   duration: 300,
    //   complete: () => {
    //     p.classList.add("none");
    //   },
    // });
  };

  return (
    <div
      className="scheduleEvent"
      onMouseEnter={e => expand(e)}
      onMouseLeave={e => reset(e)}
      key={event.event.id}
    >
      <div className="dimm"></div>
      <img src={event.pic} className="picture" />
      <div className="field">
        <div>{event.event.time}</div>
        <div className="place">{event.event.place}</div>
      </div>
      <div className="info">
        <h2>{event.event.eType}</h2>
        <h1>{event.event.title}</h1>
        <h3 style={{ fontStyle: "italic" }}>{event.event.guest}</h3>
        <p>{event.event.desc}</p>
        <a href={event.event.regLink} target="_blank" className="button">
          Регистрация
        </a>
      </div>
    </div>
  );
};
