import React, { Component } from "react";
import axios from "axios";
import Nav from "./res_components/navbar/nav.js";
import Messages from "./res_components/pages/messages.js";
import SendMessage from "./pages/sendMessage";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: [],
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
            reservations: response.data,
          },
          () => {
            //this.setState({ isLoading: true });
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { reservations } = this.state;

    return (
      <div className="App">
        <Nav />
        <Messages reservations={reservations} />
      </div>
    );
  }
}

export default App;
