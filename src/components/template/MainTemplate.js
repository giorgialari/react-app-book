import React, { Component } from 'react'
import Footer from '../mainLayout/footer/Footer'
import Header from '../mainLayout/header/Header'


export class MainTemplate extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        {this.props.children}
        <Footer></Footer>
      </div>
    )
  }
}

export default MainTemplate