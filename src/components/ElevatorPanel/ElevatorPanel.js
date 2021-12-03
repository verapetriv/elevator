import React from "react";
import { useSelector } from "react-redux";
import { elevatorSelectors } from "../../redux/elevator";

import style from "./ElevatorPanel.module.css";
import CallButton from "../CallButton";

function ElevatorPanel() {
  const floors = useSelector(elevatorSelectors.getFloors);

  return (
    <div className={style.ElevatorPanel}>
      {floors.map((floor) => (
        <div className={style.ElevatorPanel__floor} key={floor}>
          <p>{floor}</p>
          <CallButton floor={floor} />
        </div>
      ))}
    </div>
  );
}

export default ElevatorPanel;
