import React, { useEffect, useState } from "react";
import "./ListaAnimales.css";
import tamanos from "../Tamanios.js";

function AnimalInfo (animal) {
    return(
        <div key={animal.id} className="animal-card">
            <img src={animal.photo} alt={animal.petName} className="animal-image" />
            <hr/>
            <h3>{animal.petName} - {animal.age} {animal.age === 1 ? "año" : "años"}</h3>
            <div className="div-row animal-info">
                <div>
                    <p><b>Sexo:</b> {animal.gender}</p>
                    <p><b>Tamaño:</b> {tamanos[animal.size]}</p>
                    <p><b>Descripción:</b> {animal.comment}</p>
                </div>
            </div>
        </div>
    );
}

export default function ListaAnimales() {
    const [animales, setAnimales] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);

    async function fetchData () {
        try {
            const response = await fetch("http://localhost:3001/api/pets", {
                method: 'GET', 
            });
            if (!response.ok) {
                throw new Error('La solicitud no se completó con éxito.');
            }
            const data = await response.json();
            setAnimales(data);
            setIsLoaded(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    return(
        <>
            <h2>Lista de Adopción</h2>
            <div className="animal-grid">
                {isLoaded ?
                    animales.length > 0 ?
                        animales.map(animal => AnimalInfo(animal))
                        :
                        <p>No hay animales para mostrar</p>
                    :
                    <p>Cargando animales</p>
                }
            </div>
        </>
    );
}