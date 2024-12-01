import React from "react";
import "./Gracias.css";
import dogImage from '../../assets/images/Dog.svg';

export default function Gracias () {
    return(
        <div className="content">
            <div className="thanks-content">
                <div className="thanks-side-content">   
                    <h1>¡Muchas gracias!</h1>
                    <p>Hermandad animal te agradece por tu colaboración. Son los pequeños actos los que hacen la diferencia.</p>
                </div>
                <img src={dogImage} alt="Dog" className="inicio-imagen" />
            </div>
        </div>
    );
}