import React, { useState, useEffect, useCallback } from "react";
import Floor from "../Floor";
import ElevatorPanel from "../ElevatorPanel";

const floors = Array.from({ length: 9 }, (_, i) => i + 1);
const reversedFloors = floors.slice().reverse();

export default function Elevator() {
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
    if (expectForElevator.length === 0) {
      return;
    }

    if (!elevatorInTransitId) {
      callElevator(expectForElevator[0]);
    }
  }, [expectForElevator]);

  useEffect(() => {
    if (expectForElevator.includes(elevatorOnTheFloor)) {
      console.log(elevatorInTransitId);
      clearInterval(elevatorInTransitId);
      console.log(elevatorInTransitId);
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

  const onButtonClick = useCallback(
    (newFloor) => {
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
    },
    [elevatorOnTheFloor, expectForElevator]
  );

  const elevatorGetUp = () => {
    setElevatorInTransitId(
      setInterval(() => {
        setElevatorOnTheFloor(
          (prevSetElevatorOnTheFloor) => prevSetElevatorOnTheFloor + 1
        );
        console.log('up');
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
    <div>
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