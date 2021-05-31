import React from 'react'
import './styles/Navbar.css'
import logo from '../images/logo.svg'

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <a href="/" className="Navbar__brand">
                        <img src={logo} alt="Logo" className="Navbar__brand-logo" />
                        <span className="fw-light">Platzi</span>
                        <span className="fw-bold">Conf</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar