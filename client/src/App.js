import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import "./styles.scss";
//import Customers from './components/customers';
//import Footer from "./components/Footer";
//import Products from "./components/Products";
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
    /*if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems")),
      });
    }
    if (localStorage.getItem("count")) {
      this.setState({
        count: JSON.parse(localStorage.getItem("count")),
      });
    }*/
  };

  /*toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleAddToCart = (e, product) => {
       
    this.setState((prevState) => ({
      count: prevState.count + 1,
      
    }), () => {
           
    })    
    localStorage.setItem('count', JSON.stringify(this.state.count + 1));
    this.setState(state => {
      const cartItems = state.cartItems
      cartItems.push({...product})
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
      return{ cartItems: cartItems}
    })
  }

  handleRemoveFromCart = (e, item) => {
    this.setState(state => {
      const count  = this.state.count - 1
      const cartItems = this.state.cartItems.filter(el => el.id !== item.id)
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      localStorage.setItem('count', JSON.stringify(count));
      return { 
        cartItems: cartItems,
        count: count
       }
    })
  }*/

  render() {
    return (
      <div className="App">
        <h1>Reservations</h1>
        {/*<header className="App-header">          
          <header className='heading'>Mariposaweb Shopping List <Link to='/basket'><span className='subHeading'><i className="fa fa-shopping-cart"></i>  Items in Cart: {this.state.count}</span></Link></header>
        </header>
        {this.state.isLoading ? <Products products={this.state.products} handleAddToCart={this.handleAddToCart} /> : this.state.noData}
    <Footer/>*/}
      </div>
    );
  }
}

export default App;
