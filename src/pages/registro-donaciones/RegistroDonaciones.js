import React, { useState } from "react";
import "./RegistroDonaciones.css";
import AnimalesHogar from "../../components/AnimalesHogar/AnimalesHogar";
import InfoContacto from "../../components/InfoContacto/InfoContacto";
import catImage from "../../assets/images/Cat2.svg";
import image from "../../assets/images/donations.svg";
import { useNavigate } from "react-router-dom";

function DonacionFormulario() {
    const [info, setInfo] = useState({
        donorName: "",
        email: "",
        receipt: "",
        amount: 0,
        comment: "",
        campaingId: 0,
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
                "http://localhost:3001/api/create/donation",
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
        <div className="donaciones">
            <div className="donaciones-formulario">
                <h1>¿Quieres apoyarnos?</h1>
                <h3>Registra tu donación</h3>
                <form className="donaciones-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nombre Completo"
                        name="donorName"
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
                    <input
                        type="text"
                        placeholder="Sube el Comprobante"
                        name="receipt"
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        rows={5}
                        placeholder="¿Por qué estás donando? (opcional)."
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

export default function RegistroDonaciones() {
    return (
        <div className="content">
            <div className="top-content">
                <div className="otro-content">
                    <h1>Hermandad Animal</h1>
                    <p>
                        Hermandad Animal es el proyecto de vida de Giovanna
                        Muro, operando desde el 2020. Esta organización fue
                        creadad para ayudar a los animalitos en desamparo y mal
                        estado de salud, buscándoles un hogar y bienestar.
                        Además, fomentamos los valores de respeto y sensibilidad
                        por la vida en nuestra sociedad.
                    </p>
                </div>
                <img src={catImage} alt="Dog" className="inicio-imagen" />
            </div>
            <InfoContacto />
            <DonacionFormulario />
            <AnimalesHogar />
        </div>
    );
}
