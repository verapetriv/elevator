import React from "react";
import { NavLink } from "react-router-dom";

import routes from "../../routes";
import style from "./AppBar.module.css";

const AppBar = () => (
  <nav>
    <ul className={style.AppBar}>
      <li>
        <NavLink
          to={routes.elevator}
          className={(isActive) =>
            style.AppBar__item + (!isActive ? style.AppBar__item_active : "")
          }
        >
          Elevator
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.createElevator}
          className={(isActive) =>
            style.AppBar__item + (!isActive ? style.AppBar__item_active : "")
          }
        >
          Create an elevator
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default AppBar;
