import React from "react";
import style from "./ElevatorPanel.module.css";
import CallButton from "../CallButton";

function ElevatorPanel({ floors, onButtonClick, expectForElevator }) {
  return (
    <div className={style.ElevatorPanel}>
      {floors.map((floor) => (
        <div className={style.ElevatorPanel__floor} key={floor}>
          <p>{floor}</p>
          <CallButton
            floor={floor}
            expectForElevator={expectForElevator}
            onButtonClick={onButtonClick}
          />
        </div>
      ))}
    </div>
  );
}

export default ElevatorPanel;
