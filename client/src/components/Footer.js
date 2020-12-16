import React, { Component } from 'react'
import './Footer.css'
//import posed, { PoseGroup } from 'react-pose';

export class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='foot'>
        <footer>
          <p>&copy;2019 <a href="https://mariposaweb.net" target="_blank">@mariposaweb.net</a></p>
        </footer>
      </div>
    )
  }
}
export default Footer
