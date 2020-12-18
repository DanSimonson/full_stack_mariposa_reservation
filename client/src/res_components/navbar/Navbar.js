import React, { Component } from "react";
import { MenuItems } from "./MenuItem";
import "./Navbar.css";
class Navbar extends Component {
  componentWillMount() {
    //this.getData();
    console.log("MenuItems: ", MenuItems);
  }
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Mariposaweb Full-Stack Message Service</h1>
        <div className="menu-icon"></div>
        <ul>
          {MenuItems.map((item, index) => {
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>;
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
