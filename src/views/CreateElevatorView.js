import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { elevatorSelectors } from "../redux/elevator";

import CreateElevatorForm from "../components/CreateElevatorForm";
import Elevator from "../components/Elevator";

function CreateElevatorView() {
  const elevatorOptions = useSelector(elevatorSelectors.getElevatorOptions);
  console.log(elevatorOptions);

  useEffect(() => {
    if (elevatorOptions?.quantityFloors) {
      console.log(elevatorOptions.quantityFloors);
    }
  });

  return (
    <>
      <CreateElevatorForm />
      {elevatorOptions && (
        <Elevator
          quantityFloors={elevatorOptions.quantityFloors}
          theme={elevatorOptions.theme}
        />
      )}
    </>
  );
}

export default CreateElevatorView;
