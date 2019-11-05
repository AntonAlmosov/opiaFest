import React from "react";
import { className } from "postcss-selector-parser";
import ArchonButton from "../atoms/ArchonButton";
import anime from "animejs/lib/anime.es.js";

export default () => {
  let skew = e => {
    anime({
      targets: ".starterImage",
      skew: ((e.clientX / window.innerWidth) * 10) / 2 + "deg",
      rotateZ: (e.clientY / window.innerHeight - 0.5) * 20 + "deg",
      rotateY: (e.clientX / window.innerWidth - 0.5) * -100 + "deg",
      duration: 0,
    });
    anime({
      targets: ".divider",
      width: 100 + (e.clientX / window.innerWidth) * -40 + "%",
      duration: 0,
    });
  };
  return (
    <div
      className="starterWrapper"
      onMouseMove={e => {
        skew(e);
      }}
    >
      <div className="starter">
        <div className="berlinGarden"></div>
        <div className="heading">
          <h1>Фестиваль разделённого&nbsp;города</h1>
          <div className="divider"></div>
          <h2>Культурный центр ЗИЛ 19-23&nbsp;ноября</h2>
        </div>
        <div className="starterImage"></div>
        <div className="starterButton">
          <ArchonButton name="Программа" link={"schedule"} />
        </div>
      </div>
    </div>
  );
};
