import React from "react";
import Nav from "../../res_components/navbar/nav.js";
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

function messages({ reservations }) {
  console.log("reservations: ", reservations);
  return (
    <div>
      <Nav />
      {!reservations.length > 0 ? (
        <Spinner color="info" />
      ) : (
        <ListGroup className="mt-4">
          {reservations.map((reservation) => (
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
                      Start Date: {reservation.startDate}
                    </CardTitle>
                    <CardTitle tag="h5">
                      End Date: {reservation.endDate}
                    </CardTitle>
                    <CardText tag="h2">Message: {reservation.message}</CardText>
                    <div>
                      <Button color="warning" size="lg">
                        Edit
                      </Button>{" "}
                      <Button color="warning" size="lg">
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
    </div>
  );
}

export default messages;
