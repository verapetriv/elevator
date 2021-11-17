import React from "react";
import style from "./Floor.module.css";

import ElevatorIndicator from "../ElevatorIndicator";
import CallButton from "../CallButton";

const openDoor = require("../../img/open-door.jpg");
const closeDoor = require("../../img/close-door.jpg");

const Floor = ({
  floor,
  floors,
  elevatorOnTheFloor,
  onButtonClick,
  isOpenDoor,
  expectForElevator,
}) => {
  return (
    <div className={style.Floor}>
      <div className={style.Floor__number}>
        <p>Этаж</p>
        <p>{floor}</p>
      </div>
      <div className={style.Elevator}>
        <ElevatorIndicator
          floors={floors}
          elevatorOnTheFloor={elevatorOnTheFloor}
        />
        <img
          src={
            isOpenDoor && elevatorOnTheFloor === floor
              ? openDoor.default
              : closeDoor.default
          }
          alt={floor}
        />
        <div className={style.Elevator__button}>
          <CallButton
            floor={floor}
            onButtonClick={onButtonClick}
            expectForElevator={expectForElevator}
          />
        </div>
      </div>
    </div>
  );
};

export default Floor;
