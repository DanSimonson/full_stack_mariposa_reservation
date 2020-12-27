import React from "react";
import Nav from "./res_components/navbar/nav.js";
import ReservationList from "./components/ReservationList";
import "./App.css";
import ReservationContextProvider from "./context/reservationContext.js";

function App() {
  return (
    <div className="App">
      <ReservationContextProvider>
        <Nav />
        <ReservationList />
      </ReservationContextProvider>
    </div>
  );
}

export default App;
