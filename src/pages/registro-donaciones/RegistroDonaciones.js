import React from "react";
import "./RegistroDonaciones.css";
import AnimalesHogar from "../../components/AnimalesHogar/AnimalesHogar";

function DonacionFormulario () {
    return(
        <div>
            <h1>¿Quieres apoyarnos?</h1>
            <h3>Registra tu donación</h3>
            <form>
                <input type="text" placeholder="Nombre Completo"/>
                <input type="email" placeholder="Correo Electrónico"/>
                <input type="text" placeholder="Sube el Comprobante"/>
                <textarea placeholder="Motivación para ser voluntario."/>
                <button type="submit">Enviar datos</button>
            </form>
        </div>
    );
}

export default function RegistroDonaciones() {
    return(
        <div className="content">
            <div className="top-content">
                <h1>Hermandad Animal - Donaciones</h1>
            </div>
            <DonacionFormulario />
            <AnimalesHogar />
        </div>
    )
}