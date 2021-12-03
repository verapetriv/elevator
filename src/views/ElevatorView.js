import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { elevatorSelectors, elevatorActions } from "../redux/elevator";

import Floor from "../components/Floor";
import ElevatorPanel from "../components/ElevatorPanel";

export default function ElevatorView() {
  const dispatch = useDispatch();

  const reversedFloors = useSelector(elevatorSelectors.getReversedFloors);
  const elevatorOnTheFloor = useSelector(
    elevatorSelectors.getElevatorOnTheFloor
  );
  const expectForElevator = useSelector(elevatorSelectors.getExpectForElevator);
  const elevatorInTransitId = useSelector(
    elevatorSelectors.getlevatorInTransitId
  );

  useEffect(() => {
    dispatch(elevatorActions.changeQuantityFloors(9));
  }, [dispatch]);

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
      dispatch(elevatorActions.clearElevatorInTransitId());

      elevatorArrived();
    }
  }, [elevatorOnTheFloor]);

  const callElevator = (newFloor) => {
    dispatch(elevatorActions.closeDoor());

    if (elevatorOnTheFloor > newFloor) {
      elevatorGetDown();
    }

    if (elevatorOnTheFloor < newFloor) {
      elevatorGetUp();
    }
  };

  const elevatorGetUp = () => {
    const elevatorInTransitId = setInterval(
      () => dispatch(elevatorActions.incrementFloor()),
      1000
    );
    dispatch(elevatorActions.addElevatorInTransitId(elevatorInTransitId));
  };

  const elevatorGetDown = () => {
    const elevatorInTransitId = setInterval(
      () => dispatch(elevatorActions.decrementFloor()),
      1000
    );
    dispatch(elevatorActions.addElevatorInTransitId(elevatorInTransitId));
  };

  const elevatorArrived = () => {
    dispatch(elevatorActions.openDoor());
    setTimeout(() => {
      dispatch(elevatorActions.deleteExpectForElevator(elevatorOnTheFloor));
    }, 1000);
  };

  return (
    <>
      {reversedFloors.map((floor) => (
        <Floor key={floor} floor={floor} />
      ))}
      <ElevatorPanel />
    </>
  );
}