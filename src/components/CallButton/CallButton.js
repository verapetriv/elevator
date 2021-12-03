import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { elevatorSelectors, elevatorActions } from "../../redux/elevator";

import style from "./CallButton.module.css";

function CallButton({ floor }) {
  const dispatch = useDispatch();

  const expectForElevator = useSelector(elevatorSelectors.getExpectForElevator);
  const elevatorOnTheFloor = useSelector(
    elevatorSelectors.getElevatorOnTheFloor
  );

  const onButtonClick = () => {
    if (
      expectForElevator.includes(floor) ||
      elevatorOnTheFloor === floor
    ) {
      return;
    }
    dispatch(elevatorActions.addExpectForElevator(floor));
  };

  return (
    <button
      className={`${style.CallButton} ${
        expectForElevator.includes(floor) ? style.CallButton__active : ""
      }`}
      onClick={() => onButtonClick(floor)}
      type="button"
    ></button>
  );
}

export default CallButton;