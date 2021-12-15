import React, { useState } from "react";

import CreateElevatorForm from "../components/CreateElevatorForm";
import Elevator from "../components/Elevator";

function CreateElevatorView() {
  const [quantityFloors, setQuantityFloors] = useState(null);

  const onInputChange = (e) => {
    setQuantityFloors(e.currentTarget.value);
  };

  return (
    <>
      <CreateElevatorForm onInputChange={onInputChange} />
      {quantityFloors && <Elevator quantityFloors={quantityFloors} />}
    </>
  );
}

export default CreateElevatorView;
