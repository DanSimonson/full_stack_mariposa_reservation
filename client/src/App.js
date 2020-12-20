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
        this.setState({
          reservations: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handleDelete = (_id, index) => {
    console.log("_id: ", _id);
    console.log("index: ", index);
    axios
      .delete(`api/items/${_id}`)
      .then((response) => {
        this.getData();
      })
      .catch((error) => {
        console.log("Delete error: ", error);
      });
  };

  render() {
    const { reservations } = this.state;

    return (
      <div className="App">
        <Nav />
        <Messages
          reservations={reservations}
          handleDeleteFromParent={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
