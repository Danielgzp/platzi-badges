import React from 'react'
import './styles/Navbar.css'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => (
    <div className="Navbar">
        <div className="container-fluid">
            <Link to="/" className="Navbar__brand">
                <img src={logo} alt="Logo" className="Navbar__brand-logo" />
                <span className="fw-light">Platzi</span>
                <span className="fw-bold">Conf</span>
            </Link>
        </div>
    </div>
)

export default Navbar