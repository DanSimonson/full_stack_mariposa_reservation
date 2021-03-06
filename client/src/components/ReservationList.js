import React, { useContext, useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  Button,
  Spinner,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  CardImg,
} from "reactstrap";
import SendMessage from './SendMessage'
import ModalForm from "../res_components/modal/modalForm";
import Footer from "./Footer";
import { ReservationContext } from "../context/reservationContext";
import styled from "styled-components";

function ReservationList() {
  const [openModal, setOpenModal] = useState(false);
  const [foundArray, setFoundArray] = useState([]);
  const { reservations, deleteReservation, sendForm, setSendForm, toggleForm } = useContext(ReservationContext);
  
  /*** methods ***/
  const handleEdit = (id) => {
    //open modal
    setOpenModal(true);
    let i;
    for (i = 0; i < reservations.length; i++) {
      if (reservations[i]._id === id) {
        setFoundArray(reservations[i]);
      }
    }
  };
  const handleClose = (modalVal) => {
    //if open, close modal from parent
    setOpenModal(false);
  };
  /*** end methods ***/

  return (
    <React.Fragment>
    <div>
      {!reservations.length > 0 && (
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <Spinner size="lg" color="info"  />
        </Col> )}
       {sendForm ? ( <SendMessage/> ) :
       (  <ListGroup className="mt-4">
          {reservations.map((reservation, index) => (
            <div>
              <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                  <Card
                    body
                    inverse
                    style={{
                      backgroundColor: "#6a0dad",
                      borderColor: "#FFFF00",
                    }}
                    className="text-center"
                    key={reservation._id}
                    fade="true"
                  >
                    <CardTitle tag="h1">RESERVATION INFORMATION</CardTitle>
                    <CardTitle tag="h5">
                      Reservation ID: {reservation._id}
                    </CardTitle>
                    <CardTitle tag="h5">
                      Last Name: {reservation.lastName}
                    </CardTitle>
                    <CardTitle tag="h5">
                      First Name: {reservation.firstName}
                    </CardTitle>
                    <CardTitle tag="h5">
                      Message Date: {reservation.startDate}
                    </CardTitle>
                    <CardText tag="h2">Message: {reservation.message}</CardText>
                    <div>
                      <Button
                        color="warning"
                        size="lg"
                        onClick={() => handleEdit(reservation._id)}
                      >
                        Edit
                      </Button>{" "}
                      <Button
                        color="warning"
                        size="lg"
                        onClick={() =>
                          deleteReservation(reservation._id)
                        }
                      >
                        Delete
                      </Button>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          ))}
        </ListGroup>)
}
      {/*)}*/}
      </div>
      {reservations.length > 0 && <Footer />}
      <ModalForm
        reservations={reservations}
        foundReservation={foundArray}
        openModal={openModal}
        handleCloseFromParent={handleClose}
      />
      
    </React.Fragment>   
  );
}

export default ReservationList;
