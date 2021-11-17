import React from "react";
import style from "./CallButton.module.css";

const CallButton = ({ onButtonClick, floor, expectForElevator }) => (
  <button
    className={`${style.CallButton} ${expectForElevator.includes(floor) ? style.CallButton__active : ''}`}
    onClick={() => onButtonClick(floor)}
    type="button"
  ></button>
);

export default CallButton;
