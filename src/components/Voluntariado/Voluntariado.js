import React from "react";
import "./Voluntariado.css";

const img = "https://s3-alpha-sig.figma.com/img/182b/86e2/ae3a29e0ff720bf4fb54be1802cb9b86?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lwhcXhQvC4FVGCvPxWDvhCP~v8wIW4jnjeZ24bibHtg6tFntpJudHvlJ6kAlBjHfwwntBGngqSns3UNJIG-pahjargx0TPgJWxvWwcJza9uFhj-ssd~mJS~Tj0G1E862gSJvnRrhsGEWB6DhQf1gdryNdkfHTLokTE7ssAnpKkqRmK60OrLtq59ZLxeQw8ktSGUq6EFMJKI6iTEPixm3FrTk4gPyZd7v08kETt6aQaOm58TXnPhY4gnN~1xu9G61hTG9BAfMOJU7hFPJF2PiPqvTB4hziBmFV6wCWvHRWGAacyrky4Q6I4ojwE79twOxEX-hnrELfh9QHf9~29zU-w__";

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
            <img src={img} alt="imagen de voluntarios"/>
        </div>
    );
}