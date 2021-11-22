import React, { useState, useEffect } from "react";
import style from "./App.module.css";
import Floor from "./components/Floor";
import ElevatorPanel from "./components/ElevatorPanel";

const floors = Array.from({ length: 9 }, (_, i) => i + 1);
const reversedFloors = floors.slice().reverse();

export default function App() {
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
      }, 1000)
    );
  };

  const elevatorGetDown = () => {
    setElevatorInTransitId(
      setInterval(() => {
        setElevatorOnTheFloor(
          (prevSetElevatorOnTheFloor) => prevSetElevatorOnTheFloor - 1
        );
      }, 1000)
    );
  };

  const elevatorArrived = () => {
    setIsOpenDoor(true);
    setTimeout(() => {
      setExpectForElevator((prevSetExpectForElevator) =>
        prevSetExpectForElevator.filter((floor) => floor !== elevatorOnTheFloor)
      );
    }, 1000);
  };

  return (
    <div className={style.App}>
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
      <ElevatorPanel
        floors={floors}
        onButtonClick={onButtonClick}
        expectForElevator={expectForElevator}
      />
    </div>
  );
}
