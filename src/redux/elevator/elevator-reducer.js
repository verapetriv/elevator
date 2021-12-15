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
  addElevatorOptions,
  resetState,
} from "./elevator-actions";

const floors = createReducer([], {
  [changeQuantityFloors]: (_, { payload }) => payload,
  [resetState]: () => [],
});

const elevatorOnTheFloor = createReducer(1, {
  [incrementFloor]: (state, _) => state + 1,
  [decrementFloor]: (state, _) => state - 1,
  [resetState]: () => 1,
});

const isOpenDoor = createReducer(true, {
  [openDoor]: () => true,
  [closeDoor]: () => false,
  [resetState]: () => true,
});

const expectForElevator = createReducer([], {
  [addExpectForElevator]: (state, { payload }) => [...state, payload],
  [deleteExpectForElevator]: (state, { payload }) =>
    state.filter((floor) => floor !== payload),
  [resetState]: () => [],
});

const elevatorInTransitId = createReducer(null, {
  [addElevatorInTransitId]: (_, { payload }) => payload,
  [clearElevatorInTransitId]: () => null,
  [resetState]: () => null,
});

const elevatorOptions = createReducer(null, {
  [addElevatorOptions]: (_, { payload }) => payload,
});

export default combineReducers({
  floors,
  elevatorOnTheFloor,
  isOpenDoor,
  expectForElevator,
  elevatorInTransitId,
  elevatorOptions,
});
