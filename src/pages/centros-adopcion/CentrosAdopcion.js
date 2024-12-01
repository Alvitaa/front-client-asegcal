import React from "react";
import "./CentrosAdopcion.css";
import ListaAnimales from "../../components/lista-animales/ListaAnimales";
import InfoContacto from "../../components/InfoContacto/InfoContacto";
import catImage from "../../assets/images/Cat.svg";

export default function CentrosAdopcion() {
    return(
        <div className="content">
            <div className="top-content">
                <div className="inicio-content">
                    <h1>Estos animales buscan un hogar</h1>
                    <p>¡Abre tu corazón y dale un hogar a un animal que lo necesita!</p>
                </div>
                <img src={catImage} alt="Dog" className="inicio-imagen" />
            </div>
            <InfoContacto />
            <ListaAnimales />
        </div>
    )
}