export const getFloors = state => state.elevator.floors;

export const getElevatorOnTheFloor = state => state.elevator.elevatorOnTheFloor;

export const getIsOpenDoor = state => state.elevator.isOpenDoor;

export const getExpectForElevator = state => state.elevator.expectForElevator;

export const getlevatorInTransitId = state => state.elevator.elevatorInTransitId;

export const getElevatorOptions = state => state.elevator.elevatorOptions;

export const getReversedFloors = state => getFloors(state).slice().reverse();