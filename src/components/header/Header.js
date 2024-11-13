import React from "react";
import "./Header.css";
import { Navbar } from "react-bootstrap";
import logo from "../../assets/images/logo-navbar.svg";
import { Link, NavLink } from "react-router-dom";

export default function Header() {

    return (
        <Navbar bg="white" expand="lg" className="border-bottom">
            <div className="div-header">
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="Logo Hermandad Animal" height="70" />
                </Navbar.Brand>
                <div className="navigation">
                    <NavLink
                        to="/"
                        className="nav-link"
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/adopcion"
                        className="nav-link"
                    >
                        Centro de Adopcion
                    </NavLink>
                    <NavLink
                        to="/voluntarios"
                        className="nav-link"
                    >
                        Voluntarios
                    </NavLink>
                    <NavLink
                        to="/donaciones"
                        className="nav-link"
                    >
                        Donaciones
                    </NavLink>
                </div>
            </div>
        </Navbar>
    );
}
