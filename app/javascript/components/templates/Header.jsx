import React, { useState, useEffect } from "react";
import headerAnimation from "../animations/header";

export default ({ isExpanded }) => {
  let [trigger, setTrigger] = useState(false);

  useEffect(() => {
    headerAnimation(isExpanded, trigger, setTrigger);
  });

  return (
    <div className="header">
      <div className="headerTop headerLine">
        <div className="headerInitial topInitial">ost</div>
        <div className="headerLinks topLinks">
          <a href="/">программа</a>
          <a href="/">контакты</a>
          <a href="/">партнёры</a>
        </div>
        <div className="line"></div>
      </div>
      <div className="headerBottom headerLine">
        <div className="line"></div>
        <div className="headerInitial bottomInitial">west</div>
        <div className="headerLinks bottomLinks">
          <a href="/">вк</a>
          <a href="/">инста</a>
          <a href="/">фб</a>
          <a href="/">телега</a>
        </div>
      </div>
    </div>
  );
};
