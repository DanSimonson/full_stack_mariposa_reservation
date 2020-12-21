import React, { useState } from "react";
import Nav from "../../res_components/navbar/nav.js";
import ModalForm from "../modal/modalForm";
import axios from "axios";
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
import styled from "styled-components";
import Axios from "axios";
const AddButton = styled.button`
  width: 200px
  background-color: #6a0dad;
  color: #fff;
  padding: 14px 40px;
  opacity: 1;
  transition: all 0.6s;

  &:hover {
    opacity: 0.8;
  }
`;

function messages(props) {
  const { reservations } = props;
  const [openModal, setOpenModal] = useState(false);
  /*** methods ***/
  const handleDelete = (_id, index) => {
    //send _id data back to parent
    props.handleDeleteFromParent(_id, index);
  };
  const handleEdit = () => {
    //open modal
    setOpenModal(true);
  };
  const handleClose = (modalVal) => {
    //if open, close modal from parent
    setOpenModal(false);
  };

  /*** end methods ***/

  return (
    <div>
      {!reservations.length > 0 ? (
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <Spinner size="lg" color="info" />
        </Col>
      ) : (
        <ListGroup className="mt-4">
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
                        onClick={() => handleEdit()}
                      >
                        Edit
                      </Button>{" "}
                      <Button
                        color="warning"
                        size="lg"
                        onClick={(event) =>
                          handleDelete(reservation._id, index)
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
        </ListGroup>
      )}
      <ModalForm openModal={openModal} handleCloseFromParent={handleClose} />
    </div>
  );
}

export default messages;
