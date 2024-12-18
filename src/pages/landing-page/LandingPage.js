import React from "react";
import "./LandingPage.css";
import dogImage from '../../assets/images/Dog.svg';
import AnimalesHogar from "../../components/AnimalesHogar/AnimalesHogar";
import Voluntariado from "../../components/Voluntariado/Voluntariado";
import { useNavigate } from "react-router-dom";
import InfoContacto from "../../components/InfoContacto/InfoContacto";

function SobreNosotros() {
    return(
        <div className="about-us">
            <h3>Nosotros</h3>
            <h1>Hermandad Animal</h1>
            <p>
            Hermandad Animal es el proyecto de vida de Giovanna Muro, operando desde el 2020. Esta organización fue creadad para ayudar a los animalitos en desamparo y mal estado de salud, buscándoles un hogar y bienestar. Además, fomentamos los valores de respeto y sensibilidad por la vida en nuestra sociedad.
            </p>
        </div>
    );
}

export default function LandingPage() {
    const navigate = useNavigate();

    function HandleNavigation (url) {
        navigate(url);
    }

    return(
        <div className="content">
            <div className="top-content">
                <div className="inicio-content">
                    <h1>¿En busca de una mascota leal?</h1>
                    <p>¡Abre tu corazón y dale un hogar a un animal que lo necesita!</p>
                    <button className="adoption" onClick={()=>{HandleNavigation("/adopcion")}}>Centro de Adopción</button>
                </div>
                <img src={dogImage} alt="Dog" className="inicio-imagen" />
            </div>
            <InfoContacto />
            <AnimalesHogar />
            <SobreNosotros />
            <Voluntariado />
        </div>
    )
}