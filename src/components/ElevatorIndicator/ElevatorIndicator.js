import React from "react";
import { useSelector } from "react-redux";
import { elevatorSelectors } from "../../redux/elevator";

import style from "./ElevatorIndicator.module.css";

function ElevatorIndicator() {
  const floors = useSelector(elevatorSelectors.getFloors);
  const elevatorOnTheFloor = useSelector(
    elevatorSelectors.getElevatorOnTheFloor
  );

  return (
    <div className={style.Indicator}>
      {floors.map((floor) => (
        <div key={floor}>
          <p className={style.Indicator__number}>{floor}</p>
          <div
            className={`${style.Indicator__circle} ${
              elevatorOnTheFloor === floor ? style.Indicator__circle_active : ""
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default ElevatorIndicator;
