import React from "react";
import style from "./Floor.module.css";

import Elevator from "../Elevator";

const Floor = ({ floor, floors }) => (
  <div className={style.Floor}>
    <div className={style.Floor__number}>
      <p>Этаж</p>
      <p>{floor}</p>
    </div>
    <Elevator
      floor={floor}
      floors={floors}
    />
  </div>
);

export default Floor;
