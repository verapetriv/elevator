import { configureStore } from "@reduxjs/toolkit";
import elevatorReducer from "./elevator/elevator-reducer";

const store = configureStore({
  reducer: {
    elevator: elevatorReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
