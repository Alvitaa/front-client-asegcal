import React from "react";
import "./LandingPage.css";
import AnimalesHogar from "../../components/AnimalesHogar/AnimalesHogar";
import Voluntariado from "../../components/Voluntariado/Voluntariado";

function SobreNosotros() {
    return(
        <div>
            <h3>Nosotros</h3>
            <h1>Hermandad Animal</h1>
            <p>
                Hermandad Animal es ...
            </p>
        </div>
    );
}

export default function LandingPage() {
    return(
        <div className="content">
            <div className="top-content">
                <h1>¿En busca de una mascota leal?</h1>
                <p>¡Abre tu corazón y dale un hogar a un animal que lo necesita!</p>
            </div>
            <div className="info-contacto">
                <h2>+51 992 770 749</h2>
                <h2>@hermandad.animal</h2>
            </div>
            <AnimalesHogar />
            <SobreNosotros />
            <Voluntariado />
        </div>
    )
}