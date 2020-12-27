import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Nav from "../res_components/navbar/nav.js";
import Footer from "../components/Footer";
import axios from "axios";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Container,
  Row,
  FormFeedback,
  InputGroupAddon,
} from "reactstrap";
import { ReservationContext } from "../context/reservationContext";

const initialFormState = {
  lastName: "",
  firstName: "",
  startDate: "",
  endDate: "",
  message: "",
};
function SendMessage(props) {
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();
  const [lastNameInValid, setLastNameInValid] = useState(false);
  const [firstNameInValid, setFirstNameInValid] = useState(false);
  const [inValidDate, setInValidDate] = useState(false);
  const [messageInValid, setMessageInValid] = useState(false);
  const { reservations, deleteReservation, sendForm, setSendForm, toggleForm, getData } = useContext(ReservationContext);

  /****Methods****/
  useEffect(() => {
    //after submitting form, clear form fields
    setForm(initialFormState);
  }, [submitted]);
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleCancel = () => {
    //redirect the page
    setSendForm(false)
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let validForm = validateForm();
    if (validForm) {
      axios
        .post("/api/items", form)
        .then((res) => {
          /***
           * set boolean to clear form in useEffect hook
           * toggle form closed
           * get new data
          ***/
          setSubmitted(true);
          toggleForm()
          getData()   
        })
        .catch((err) => {
          console.log("handleSubmit error: ", err);
        });
    }
  };
  const validateForm = () => {
    let lastName = document.forms["sendMessageForm"]["lastName"].value;
    let firstName = document.forms["sendMessageForm"]["firstName"].value;
    let startDate = document.forms["sendMessageForm"]["startDate"].value;
    let message = document.forms["sendMessageForm"]["message"].value;
    if (lastName === "") {
      setLastNameInValid(true);
      return false;
    } else {
      if (firstName === "") {
        setLastNameInValid(false);
        setFirstNameInValid(true);
        return false;
      } else {
        if (startDate === "") {
          setLastNameInValid(false);
          setFirstNameInValid(false);
          setInValidDate(true);
          return false;
        } else {
          if (!validateDate(startDate)) {
            setInValidDate(true);
            return false;
          } else {
            if (message === "") {
              setInValidDate(false);
              setMessageInValid(true);
              return true;
            } else {
              setMessageInValid(false);
            }
          }
        }
      }
    }
    return true;
  };

  function validateDate(testdate) {
    var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    return date_regex.test(testdate);
  }
  /****end Methods***/

  /****rendering****/
  return (
    <div>
      <Container className="rounded">
        <h1 className="text-center" style={{ color: "#6a0dad" }}>
          Send Message
        </h1>

        <Form
          name="sendMessageForm"
          inverse
          style={{
            backgroundColor: "#6a0dad",
            borderColor: "#FFFF00",
          }}
          className="rounded"
          onSubmit={handleSubmit}
        >
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <FormGroup>
              <Label
                style={{
                  color: "#fff",
                }}
                for="lastName"
                className="mt-3"
              >
                Last Name
              </Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={form.lastName}
              />
              {!lastNameInValid ? null : (
                <Label style={{ color: "red" }}>Input cannot be empty</Label>
              )}
            </FormGroup>
            <FormGroup>
              <Label
                style={{
                  color: "#fff",
                }}
                for="firstName"
                className="mt-3"
              >
                First Name
              </Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                onChange={handleChange}
                value={form.firstName}
              />
              {!firstNameInValid ? null : (
                <Label style={{ color: "red" }}>Input cannot be empty</Label>
              )}
            </FormGroup>
            <FormGroup>
              <Label
                style={{
                  color: "#fff",
                }}
                for="startDate"
                className="mt-3"
              >
                Message Date
              </Label>
              <Input
                type="text"
                name="startDate"
                id="startDate"
                placeholder="Message Date"
                onChange={handleChange}
                value={form.startDate}
              />
              {!inValidDate ? null : (
                <Label style={{ color: "red" }}>
                  Input format must be mm/dd/yyy
                </Label>
              )}
            </FormGroup>
            <FormGroup>
              <Label
                style={{
                  color: "#fff",
                }}
                for="message"
                className="mt-3"
              >
                Message
              </Label>
              <Input
                type="textarea"
                name="message"
                id="message"
                placeholder="Message"
                onChange={handleChange}
                value={form.message}
              />
              {!messageInValid ? null : (
                <Label style={{ color: "red" }}>Input cannot be empty</Label>
              )}
            </FormGroup>
            <div className="mb-3 mt-3 text-right">
              <Button type="submit" color="warning" size="lg">
                Submit
              </Button>{" "}
              <Button
                onClick={handleCancel}
                className="ml-2 mt-3 mb-3"
                color="warning"
                size="lg"
              >
                Cancel
              </Button>
            </div>
          </Col>
        </Form>
      </Container>
      
    </div>
  );
}

export default SendMessage;
