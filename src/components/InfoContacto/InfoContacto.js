import React from "react";
import phone from "../../assets/icons/li_phone.svg";
import mail from "../../assets/icons/mail.svg";
import "./InfoContacto.css";

export default function InfoContacto () {
    return(
        <div className="info-contacto">
            <div className="icons">
                <img src={phone} alt="phone" className="landing-icon"/>
                <h2>&nbsp;+51 992 770 749</h2>
            </div>
            <div className="icons">
                <img src={mail} alt="mail" className="landing-icon"/>
                <h2>&nbsp;@hermandad.animal</h2>
            </div>
        </div>
    );
}