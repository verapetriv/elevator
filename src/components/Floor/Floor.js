import React from "react";
import { useSelector } from "react-redux";
import { elevatorSelectors } from "../../redux/elevator";

import style from "./Floor.module.css";

import ElevatorIndicator from "../ElevatorIndicator";
import CallButton from "../CallButton";

const openDoor = require("../../img/open-door.jpg");
const closeDoor = require("../../img/close-door.jpg");

function Floor({ floor }) {
  const elevatorOnTheFloor = useSelector(
    elevatorSelectors.getElevatorOnTheFloor
  );
  const isOpenDoor = useSelector(elevatorSelectors.getIsOpenDoor);

  return (
    <div className={style.Floor}>
      <div className={style.Floor__number}>
        <p>Этаж</p>
        <p>{floor}</p>
      </div>
      <div className={style.Elevator}>
        <ElevatorIndicator />
        <img
          src={
            isOpenDoor && elevatorOnTheFloor === floor
              ? openDoor.default
              : closeDoor.default
          }
          alt={floor}
        />
        <div className={style.Elevator__button}>
          <CallButton floor={floor} />
        </div>
      </div>
    </div>
  );
}

export default Floor;
