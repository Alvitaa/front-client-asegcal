import React from "react";
import { useNavigate } from "react-router-dom";

function DonacionInfo({donacion, isEditable = true}) {
    const navigate = useNavigate();

    function HandleNavigation(url) {
        navigate(url);
    }

    return(
        <div className="donacion" key={donacion.id}>
            <div className="donacion-col">
                <div className="input-donacion">
                    <input type="text" placeholder="Nombre" value={donacion.donorName} disabled readOnly/>
                </div>
                <div className="input-donacion">
                    <input type="text" placeholder="Correo electrónico" value={donacion.email} disabled readOnly/>
                </div>
                <div className="input-donacion">
                    <input type="text" placeholder="Comprobante de pago" value={donacion.receipt} disabled readOnly/>
                </div>
                <div className="input-donacion">
                    <input type="text" placeholder="Monto de Pago" value={donacion.amount? donacion.amount : "Monto no asignado"} disabled readOnly/>
                </div>
            </div>
            <div className="donacion-col" id="comentario">
                <textarea placeholder="Comentarios" rows={6} value={donacion.comment} disabled readOnly/>
                {isEditable && 
                <div className="button-donation">
                    <button className="edit-button-donation" onClick={()=>HandleNavigation("/donaciones/" + (donacion.id))}>
                        Editar
                    </button>
                </div>
                }
            </div>
        </div>
    );
}

export default DonacionInfo;
