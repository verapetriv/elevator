import React, { lazy, Suspense, Component } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.module.css";
import routes from "./routes";

import AppBar from "./components/AppBar";
const ElevatorView = lazy(() =>
  import("./views/ElevatorView" /* webpackChunkName: "elevator-view" */)
);
const CreateElevatorView = lazy(() =>
  import(
    "./views/CreateElevatorView" /* webpackChunkName: "create-elevator-view" */
  )
);

class App extends Component {
  componentDidMount() {
    console.log(ElevatorView);
  }
  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path={routes.elevator} element={<ElevatorView />} />
          <Route path={routes.createElevator} element={<CreateElevatorView />} />
        </Routes>
        </Suspense>
      </>
    );
  }
}

export default App;
