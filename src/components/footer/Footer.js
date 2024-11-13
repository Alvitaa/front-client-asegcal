import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo-footer.svg";

export default function Footer() {
    return(
        <footer className="footer">
            <br/>
            <h4><img src={logo} alt="Logo Hermandad Animal" height="60" /></h4>{/* Logo */}
            <br/>
            <div className="footer-columns">
                <div className="footer-column">
                    <ul>
                        <li>Instagram</li>
                        <li><b>@hermandad.animal</b></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <li>Teléfono</li>
                        <li><b>+51 992 770 749</b></li>
                    </ul>
                </div>
            </div>
            <b>Aseguramiento de Calidad © 2024</b>
        </footer>
    );
}
