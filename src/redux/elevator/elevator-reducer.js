import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  changeQuantityFloors,
  incrementFloor,
  decrementFloor,
  openDoor,
  closeDoor,
  addExpectForElevator,
  deleteExpectForElevator,
  addElevatorInTransitId,
  clearElevatorInTransitId,
} from "./elevator-actions";

const floors = createReducer([], {
  [changeQuantityFloors]: (_, { payload }) => payload,
});

const elevatorOnTheFloor = createReducer(1, {
  [incrementFloor]: (state, _) => state + 1,
  [decrementFloor]: (state, _) => state - 1,
});

const isOpenDoor = createReducer(true, {
  [openDoor]: () => true,
  [closeDoor]: () => false,
});

const expectForElevator = createReducer([], {
  [addExpectForElevator]: (state, { payload }) => [...state, payload],
  [deleteExpectForElevator]: (state, { payload }) =>
    state.filter((floor) => floor !== payload),
});

const elevatorInTransitId = createReducer(null, {
  [addElevatorInTransitId]: (_, { payload }) => payload,
  [clearElevatorInTransitId]: () => null,
});

export default combineReducers({
  floors,
  elevatorOnTheFloor,
  isOpenDoor,
  expectForElevator,
  elevatorInTransitId,
});
