import React from "react";
import style from "./CreateElevatorForm.module.css";

function CreateElevatorForm({ onInputChange }) {
  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>Create your own elevator</h3>
      <p className={style.text}>Select the number of floors:</p>
      <input list="createElevator" onChange={onInputChange} />
      <datalist id="createElevator">
        <option value="6" />
        <option value="9" />
        <option value="15" />
        <option value="24" />
      </datalist>
    </div>
  );
}

export default CreateElevatorForm;
