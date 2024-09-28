import React from "react";

const ButtonAction = ({ title, classStyle, font }) => {
  return (
    <button className={classStyle} style={font}>
      {title}
    </button>
  );
};

export default ButtonAction;
