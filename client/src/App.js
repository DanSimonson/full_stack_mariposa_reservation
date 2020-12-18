import React, { Component } from "react";
import axios from "axios";
// NAVIGATION
import Nav from "./res_components/navbar/nav.js";
import "./App.css";
import "./styles.scss";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      products: [],
      isLoading: false,
      noData: "loading...",
      modal: false,
      count: 0,
    };
  }
  componentWillMount() {
    this.getData();
  }
  getData = () => {
    axios
      .get("/api/items")
      .then((response) => {
        console.log("data from mongoDB: ", response.data);
        this.setState(
          {
            products: response.data,
          },
          () => {
            this.setState({ isLoading: true });
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <h1>Home</h1>
      </div>
    );
  }
}

export default App;
