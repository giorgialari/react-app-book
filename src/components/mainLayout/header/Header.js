import React, { Component } from 'react'
import '../../../css/header/header.css'
import Logo from '../../../images/icons8-ibooks-500.png'

export class Header extends Component {
  render() {
    return (
        <div className="headerCss">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <a className="navbar-brand" href="/">
                <img alt='logo' src={Logo} className="logo-image" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="visually-hidden">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/bookList">BookList</a>
                    </li>
                </ul>
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/login">Login</a>
                    <a className="nav-item nav-link" href="#/">Registrazione</a>
                </div>
            </div>
        </nav>
    </div>
    )
  }
}

export default Header