import React, { Component } from 'react'
import axios from 'axios'
import util from './Util'
import './Basket.css'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Footer from './Footer'

class Basket extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: [],
      total: 0
    }
  }

  componentWillMount() {
    this.getData()
  }

  getData = () => {
    if (localStorage.getItem('cartItems')) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem('cartItems'))
      }, () => {
        
      })
    }
    if (localStorage.getItem('count')) {
      this.setState({
        count: JSON.parse(localStorage.getItem('count'))
      })
    }
  }

  componentDidMount() {
    
    let i = 0
    let total = 0
    for (i = 0; i < this.state.cartItems.length; i++) {
      total += this.state.cartItems[i].price
    }
    this.setState({
      total: total
    })  
  }

  handleRemoveFromCart = (e, item) => {
    console.log('item: ', item)
    console.log('cartItems: ', this.state.cartItems)
    this.setState(state => {
      let count = this.state.count
      let cartItems = this.state.cartItems
      let i
      for(i=0;i < this.state.cartItems.length;i++){
          if(item._id === cartItems[i]._id){
            cartItems.splice(i, 1)
            count = this.state.count -1
            break
          }
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      localStorage.setItem('count', JSON.stringify(count));
      return {
        cartItems: cartItems,
        count: count
      }
    })
  }

  render() {
    const { cartItems, total } = this.state
    console.log('rendered total: ', total)
    return (
      <div className="basket-heading">
        <div className='header'> 
        {cartItems.length === 0 ? 
        <div className='flex-header'> 
        <div className='spacer'>Basket is empty</div>
        <Link to='/'>
        <button className="basket-button"><i class="fa fa-home" aria-hidden="true"></i> Home</button></Link>
        </div> : <div>  You have {cartItems.length} product in the basket </div>} </div>
        {cartItems.length > 0 &&
          <div>
            <ul  className='list'>
              {cartItems.map(item => (
                <li className='list-item' key={item.id}>
                  <span>{item.title}</span>
                  <span className='price-span'>{util.formatCurrency(item.price)}</span>
                  <button 
                    className="close-button basket-button"
                    onClick={(e) => this.handleRemoveFromCart(e, item)}><i className="fa fa-window-close-o" aria-hidden="true"> Remove</i></button>                  
                </li>))
              }
            </ul>
            <div className='sum'> 
            <div>Total:${total} </div>
            <div className='button-div'> 
            <button onClick={() => alert('Todo: Implement checkout page.')} className="sum-button basket-button"><i class="fa fa-credit-card" aria-hidden="true"></i> Checkout</button>
            <Link to='/'><button className="basket-button"><i class="fa fa-home" aria-hidden="true"></i> Home</button></Link>
            </div>
            </div>
          </div>
        }
        <Footer/>
      </div>
    )
  }
}

export default Basket
