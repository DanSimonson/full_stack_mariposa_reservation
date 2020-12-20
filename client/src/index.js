import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import Messages from "./pages/messages.js";
import SendMessage from "./pages/sendMessage.js";
//import Nav from "./res_components/navbar/nav.js";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

const Routing = (
  <div>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        {/*<Route path="/messages" component={Messages} />*/}
        <Route path="/sendMessage" component={SendMessage} />
      </div>
    </Router>
  </div>
);

ReactDOM.render(Routing, document.getElementById("root"));
//registerServiceWorker();
