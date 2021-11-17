import React from "react";
import style from "./ElevatorIndicator.module.css";

const ElevatorIndicator = ({ elevatorOnTheFloor, floors }) => (
  <div className={style.Indicator}>
    {floors.map((floor) => (
      <div key={floor}>
        <p className={style.Indicator__number}>{floor}</p>
        <div className={`${style.Indicator__circle} ${elevatorOnTheFloor === floor ? style.Indicator__circle_active : ''}`}></div>
      </div>
    ))}
  </div>
);

export default ElevatorIndicator;
