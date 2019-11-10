import React, { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/fest/getDescription")
      .then(res => res.json())
      .then(res => {
        setData(res.desc);
        console.log(res.desc);
        return res.desc;
      });
  }, []);

  return (
    <div className="descriptionWrapper">
      <div className="description">
        <p>{data}</p>
      </div>
    </div>
  );
};
