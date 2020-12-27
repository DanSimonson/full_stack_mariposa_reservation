import React, { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";
export const ReservationContext = createContext();

const ReservationContextProvider = (props) => {
  const [reservations, setReservations] = useState([]);
  const [sendForm, setSendForm] = useState(false)

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("/api/items")
      .then((response) => {
        setReservations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteReservation = (id) => {
    const _id = id
    axios
      .delete(`api/items/${_id}`)
      .then((response) => {
        getData();
      })
      .catch((error) => {
        console.log("Delete error: ", error);
      });
  };

  const toggleForm = () => {
      setSendForm(!sendForm)
  }
  
  return (
    <ReservationContext.Provider value={{ reservations, setReservations,deleteReservation, getData, sendForm, setSendForm, toggleForm}}>
      {props.children}
    </ReservationContext.Provider>
  );
};

export default ReservationContextProvider;
