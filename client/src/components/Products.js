import React, { Component } from 'react';
//import '../styles.scss'
import './Products.css'
import styled, { keyframes } from 'styled-components';
import { bounce, tada } from 'react-animations';

const Div_Style = styled.div`
  marginTop: 10px;
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-column-gap: 3em;
  grid-row-gap: 3em;
  @media(max-width: 1024px) {
    grid-template-columns: repeat(1, minmax(280px, 1fr));
  }  
`;

class Products extends Component {  
  render() {
  
    const productItems = (
      <Div_Style>
        {this.props.products.map(product => (
          <div className="card" key={product._id}>
          <img className="card__image" src={product.url} alt="image"/>
            <div>{product.title} </div>
            <div>{product.description}</div>
            <div>${product.price}</div>
            <button className="card_button" onClick={(e) => this.props.handleAddToCart(e, product)}>Add To Cart</button>
          </div>
        ))}
      </Div_Style>
    )
    return (
      <div>
        {productItems}
      </div>
    )
  }
}
export default Products