import React from "react";

export default ({ name, link }) => {
  return (
    <a href={"#" + link} className="archonButton">
      {name}
    </a>
  );
};
