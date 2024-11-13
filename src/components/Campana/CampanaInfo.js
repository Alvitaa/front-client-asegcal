import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";

function getProgress (recaudable, recaudado) {
    let p = recaudado/recaudable;
    p *= 100;
    return (p);
}

const CircularProgress = ({recaudable, recaudado}) => {
    const percentage = getProgress(recaudable, recaudado);

    return (
        <>
            <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                    pathColor: 'var(--primary-color)',
                    trailColor: 'var(--border-circular-color)',
                    pathTransitionDuration: 0.5,
                    strokeLinecap: 'round'
                })}
                className="circularProgress"
            />
            <div className="progress-percent">Progreso de la Campaña: {Math.round(percentage)}%</div>
        </>
    );
};

const CampanaInfo = ({campana, isDetail = true}) => {
    const navigate = useNavigate();

    function HandleNavigation(url) {
        navigate(url);
    }

    return(
        <div className="campana" key={campana.id}>
            <div className="campana-col">
                <input type="text" placeholder="Nombre" value={campana.campName} disabled readOnly/>
                <input type="text" placeholder="Fecha de Inicio" value={campana.startDate} disabled readOnly/>
                <input type="text" placeholder="Fecha de Fin" value={campana.endDate} disabled readOnly/>
                <input type="text" placeholder="Monto de Recaudar" value={campana.goal} disabled readOnly/>
                <input type="text" placeholder="Monto Recaudado" value={campana.totalDonations !== null ? campana.totalDonations : 0} disabled readOnly/>
            </div>
            <div className="campana-col">
                <input type="text" placeholder="Animal" value={campana.petName} disabled readOnly/>
                <textarea placeholder="Comentarios" rows={6} value={campana.description} disabled readOnly/>
                {isDetail &&
                    <button className="detail-button-campaign" onClick={()=>HandleNavigation("/campanas/" + campana.id)}>
                        Detalle
                    </button>
                }
                
            </div>
            <div className="campana-col right">
                <CircularProgress recaudable={campana.goal} recaudado={campana.totalDonations !== null ? campana.totalDonations : 0} />                    
            </div>
        </div>
    );
}

export default CampanaInfo;