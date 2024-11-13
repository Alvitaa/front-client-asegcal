import React from "react";
import "./RegistroVoluntarios.css";
import Voluntariado from "../../components/Voluntariado/Voluntariado";
import AnimalesHogar from "../../components/AnimalesHogar/AnimalesHogar";

export default function RegistroVoluntarios() {
    return(
        <div className="content">
            <div className="top-content">
                <h1>Hermandad Animal - Voluntarios</h1>
            </div>
            <Voluntariado />
            <AnimalesHogar />
        </div>
    )
}