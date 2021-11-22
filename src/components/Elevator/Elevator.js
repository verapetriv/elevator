import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import style from "./Elevator.js";
import Floor from "../Floor";
import ElevatorPanel from "../ElevatorPanel";

export default function Elevator({ floors, reversedFloors }) {
=======
import style from "./Elevator.module.css";

import ElevatorIndicator from "../ElevatorIndicator";
import CallButton from "../CallButton";

const openDoor = require("../../img/open-door.jpg");
const closeDoor = require("../../img/close-door.jpg");

export default function Elevator({ floor, floors }) {
>>>>>>> 715f389 (broke2)
  const [elevatorOnTheFloor, setElevatorOnTheFloor] = useState(1);
  const [isOpenDoor, setIsOpenDoor] = useState(true);
  const [expectForElevator, setExpectForElevator] = useState([]);
  const [elevatorInTransitId, setElevatorInTransitId] = useState(null);

  useEffect(() => {
    if (expectForElevator.length === 0) {
      return;
    }

    if (!elevatorInTransitId) {
      callElevator(expectForElevator[0]);
    }
  }, [expectForElevator]);

  useEffect(() => {
    if (expectForElevator.includes(elevatorOnTheFloor)) {
      clearInterval(elevatorInTransitId);
      setElevatorInTransitId(null);
      elevatorArrived();
    }
  }, [elevatorOnTheFloor]);

  const callElevator = (newFloor) => {
    setIsOpenDoor(false);

    if (elevatorOnTheFloor > newFloor) {
      elevatorGetDown();
    }

    if (elevatorOnTheFloor < newFloor) {
      elevatorGetUp();
    }
  };

  const onButtonClick = (newFloor) => {
    if (
      expectForElevator.includes(newFloor) ||
      elevatorOnTheFloor === newFloor
    ) {
      return;
    }
    setExpectForElevator((prevSetExpectForElevator) => [
      ...prevSetExpectForElevator,
      newFloor,
    ]);
  };

  const elevatorGetUp = () => {
    setElevatorInTransitId(
      setInterval(() => {
        setElevatorOnTheFloor(
          (prevSetElevatorOnTheFloor) => prevSetElevatorOnTheFloor + 1
        );
<<<<<<< HEAD
        console.log("up");
=======
>>>>>>> 715f389 (broke2)
      }, 1000)
    );
  };

  const elevatorGetDown = () => {
    setElevatorInTransitId(
      setInterval(() => {
        setElevatorOnTheFloor(
          (prevSetElevatorOnTheFloor) => prevSetElevatorOnTheFloor - 1
        );
<<<<<<< HEAD
        console.log("down");
=======
>>>>>>> 715f389 (broke2)
      }, 1000)
    );
  };

  const elevatorArrived = () => {
    setIsOpenDoor(true);
<<<<<<< HEAD
    // setHaltOnFloor(true);
    setTimeout(() => {
      // setHaltOnFloor(false);
=======
    setTimeout(() => {
>>>>>>> 715f389 (broke2)
      setExpectForElevator((prevSetExpectForElevator) =>
        prevSetExpectForElevator.filter((floor) => floor !== elevatorOnTheFloor)
      );
    }, 1000);
  };

  return (
    <div className={style.Elevator}>
<<<<<<< HEAD
      {reversedFloors.map((floor) => (
        <Floor
          key={floor}
          floor={floor}
          floors={floors}
          onButtonClick={onButtonClick}
          elevatorOnTheFloor={elevatorOnTheFloor}
          isOpenDoor={isOpenDoor}
          expectForElevator={expectForElevator}
        />
      ))}
      {/* <ElevatorPanel
        floors={floors}
        onButtonClick={onButtonClick}
        expectForElevator={expectForElevator}
      /> */}
=======
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
>>>>>>> 715f389 (broke2)
    </div>
  );
}
