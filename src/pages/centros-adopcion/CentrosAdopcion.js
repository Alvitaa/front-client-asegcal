import React from "react";
import "./CentrosAdopcion.css";
import ListaAnimales from "../../components/lista-animales/ListaAnimales";

export default function CentrosAdopcion() {
    return(
        <div className="content">
            <div className="top-content">
                <h1>Estos animales buscan un hogar</h1>
                <p>¡Abre tu corazón y dale un hogar a un animal que lo necesita!</p>
            </div>
            <ListaAnimales />
        </div>
    )
}