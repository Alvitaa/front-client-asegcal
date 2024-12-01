import React from "react";
import "./Voluntariado.css";
import image from "../../assets/images/voluntariado.png";

export default function Voluntariado () {
    return(
        <div className="voluntariado">
            <div className="voluntariado-formulario">
                <h1>¿Quieres ser voluntario?</h1>
                <h3>Déjanos tus datos</h3>
                <form className="voluntariado-form">
                    <input type="text" placeholder="Nombre Completo" className="firstInput"/>
                    <input type="email" placeholder="Correo Electrónico"/>
                    <textarea rows={5} placeholder="Motivación para ser voluntario."/>
                    <div className="aceptar-terminos">
                        <input
                            type="checkbox"
                            id="aceptar"
                            name="aceptar"
                            value="aceptar" 
                            className="aceptar"/>
                        <label htmlFor="aceptar">Al envíar mis datos, acepto los términos y condiciones relacionados</label>
                    </div>
                    <button type="submit">Enviar datos</button>
                </form>
            </div>
            <img src={image} alt="imagen de voluntarios"/>
        </div>
    );
}