import React from "react";
import "./RegistroDonaciones.css";
import AnimalesHogar from "../../components/AnimalesHogar/AnimalesHogar";
import InfoContacto from "../../components/InfoContacto/InfoContacto";
import catImage from "../../assets/images/Cat2.svg";
import image from "../../assets/images/donations.svg";

function DonacionFormulario () {
    return(
        <div className="donaciones">
            <div className="donaciones-formulario">
                <h1>¿Quieres apoyarnos?</h1>
                <h3>Registra tu donación</h3>
                <form className="donaciones-form">
                    <input type="text" placeholder="Nombre Completo"/>
                    <input type="email" placeholder="Correo Electrónico"/>
                    <input type="text" placeholder="Sube el Comprobante"/>
                    <textarea rows={5} placeholder="Motivación para ser voluntario."/>
                    <button type="submit">Enviar datos</button>
                </form>
            </div>
            <img src={image} alt="imagen de voluntarios"/>
        </div>
    );
}

export default function RegistroDonaciones() {
    return(
        <div className="content">
            <div className="top-content">
                <div className="otro-content">
                    <h1>Hermandad Animal</h1>
                    <p>
                    Hermandad Animal es el proyecto de vida de Giovanna Muro, operando desde el 2020. Esta organización fue creadad para ayudar a los animalitos en desamparo y mal estado de salud, buscándoles un hogar y bienestar. Además, fomentamos los valores de respeto y sensibilidad por la vida en nuestra sociedad.
                    </p>
                </div>
                <img src={catImage} alt="Dog" className="inicio-imagen" />
            </div>
            <InfoContacto />
            <DonacionFormulario />
            <AnimalesHogar />
        </div>
    )
}