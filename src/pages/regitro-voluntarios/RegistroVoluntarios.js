import React from "react";
import "./RegistroVoluntarios.css";
import Voluntariado from "../../components/Voluntariado/Voluntariado";
import AnimalesHogar from "../../components/AnimalesHogar/AnimalesHogar";
import InfoContacto from "../../components/InfoContacto/InfoContacto";
import dogImage from "../../assets/images/Dog2.svg";

export default function RegistroVoluntarios() {
    return(
        <div className="content">
            <div className="top-content">
                <div className="otro-content">
                    <h1>Hermandad Animal</h1>
                    <p>
                    Hermandad Animal es el proyecto de vida de Giovanna Muro, operando desde el 2020. Esta organización fue creadad para ayudar a los animalitos en desamparo y mal estado de salud, buscándoles un hogar y bienestar. Además, fomentamos los valores de respeto y sensibilidad por la vida en nuestra sociedad.
                    </p>
                </div>
                <img src={dogImage} alt="Dog" className="inicio-imagen" />
            </div>
            <InfoContacto />
            <Voluntariado />
            <AnimalesHogar />
        </div>
    )
}