import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { elevatorActions } from "../../redux/elevator";
import style from "./CreateElevatorForm.module.css";

function CreateElevatorForm() {
  const [quantityFloors, setQuantityFloors] = useState("");
  const [theme, setTheme] = useState(null);

  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setQuantityFloors(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(elevatorActions.addElevatorOptions({ quantityFloors, theme }));
  };

  const onThemeChange = (e) => {
    setTheme(e.currentTarget.value);
  };

  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>Create your own elevator</h3>
      <form onSubmit={onSubmit}>
        <div className={style.quantity}>
          <label>Enter the number of floors:</label>
          <input
            type="number"
            min="1"
            autoComplete="off"
            autoFocus
            value={quantityFloors}
            onChange={onInputChange}
            required
          />
        </div>

        <div className={style.theme}>
          <p>Select a theme:</p>
          <input
            type="radio"
            name="theme"
            value="darkTheme"
            onChange={onThemeChange}
            required
          />
          <label>dark theme</label>
          <input
            type="radio"
            name="theme"
            value="lightTheme"
            onChange={onThemeChange}
            required
          />
          <label>light theme</label>
        </div>
        <button className={style.btn} type="submit">
          <span>Create</span>
        </button>
      </form>
    </div>
  );
}

export default CreateElevatorForm;
