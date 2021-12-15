import { createAction } from '@reduxjs/toolkit';

export const changeQuantityFloors = createAction('elevator/changeQuantityFloors', quantity => ({
    payload : Array.from({ length: quantity }, (_, i) => i + 1)
}));

export const incrementFloor = createAction('elevator/incrementFloor');
export const decrementFloor = createAction('elevator/decrementFloor');

export const openDoor = createAction('elevator/openDoor');
export const closeDoor = createAction('elevator/closeDoor');

export const addExpectForElevator = createAction('elevator/addExpectForElevator');
export const deleteExpectForElevator = createAction('elevator/deleteExpectForElevator');

export const addElevatorInTransitId = createAction('elevator/addElevatorInTransitId');
export const clearElevatorInTransitId = createAction('elevator/clearElevatorInTransitId');

export const resetState = createAction('elevator/resetState');

export const addElevatorOptions = createAction('createElevator/addElevetorOptions', ({quantityFloors, theme}) => ({
    payload: {
        quantityFloors,
        theme,
    }
}));


