import React from "react";
import "./Voluntariado.css";

export default function Voluntariado () {
    return(
        <div>
            <h1>¿Quieres ser voluntario?</h1>
            <h3>Déjanos tus datos</h3>
            <form>
                <input type="text" placeholder="Nombre Completo"/>
                <input type="email" placeholder="Correo Electrónico"/>
                <textarea placeholder="Motivación para ser voluntario."/>
                <button type="submit">Enviar datos</button>
            </form>
        </div>
    );
}