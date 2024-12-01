import React, { useState } from "react";
import "./Voluntariado.css";
import image from "../../assets/images/voluntariado.png";
import { useNavigate } from "react-router-dom";

export default function Voluntariado() {
    const [info, setInfo] = useState({
        volunteerName: "",
        email: "",
        comment: "",
    });

    const navigate = useNavigate();

    function HandleNavigation(url) {
        navigate(url);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch(
                "http://localhost:3001/api/create/volunteer",
                {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(info),
                }
            );
            if (!response.ok) {
                throw new Error("La solicitud no se completó con éxito.");
            }
            HandleNavigation("/gracias");
        } catch (error) {
            console.error("Error submiting data:", error);
        }
    }

    return (
        <div className="voluntariado">
            <div className="voluntariado-formulario">
                <h1>¿Quieres ser voluntario?</h1>
                <h3>Déjanos tus datos</h3>
                <form className="voluntariado-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nombre Completo"
                        className="firstInput"
                        name="volunteerName"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Correo Electrónico"
                        name="email"
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        rows={5}
                        placeholder="Motivación para ser voluntario."
                        name="comment"
                        onChange={handleChange}
                    />
                    <div className="aceptar-terminos">
                        <input
                            type="checkbox"
                            id="aceptar"
                            name="aceptar"
                            value="aceptar"
                            className="aceptar"
                            required
                        />
                        <label htmlFor="aceptar">
                            Al envíar mis datos, acepto los términos y
                            condiciones relacionados
                        </label>
                    </div>
                    <button type="submit">Enviar datos</button>
                </form>
            </div>
            <img src={image} alt="imagen de voluntarios" />
        </div>
    );
}
