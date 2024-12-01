import React, { useEffect, useState } from "react";
import "./AnimalesHogar.css";

  

export default function AnimalesHogar () {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animales, setAnimales] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % animales.length);
    };

    const handlePrevious = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + animales.length) % animales.length
        );
    };

    const getVisibleAnimals = () => {
        const prevIndex =
          (currentIndex - 1 + animales.length) % animales.length; // Índice del animal anterior
        const nextIndex = (currentIndex + 1) % animales.length; // Índice del animal siguiente
    
        return [animales[prevIndex], animales[currentIndex], animales[nextIndex]];
    };
    
    const visibleAnimals = getVisibleAnimals();

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
        <div className="animal-carousel">
            <h2>Estos animales buscan un hogar</h2>
            <div className="carousel-content">
                <button onClick={handlePrevious} className="carousel-arrow">
                    {"<"}
                </button>
                <div className="carousel-items">
                  {isLoaded ?
                      animales.length > 0 ?
                        visibleAnimals.map((animal, index) => (
                          <div
                          key={index}
                          className={`carousel-item ${
                              index === 1 ? "focused-item" : "side-item"
                          }`}
                          >
                              <img src={animal.photo} alt={animal.name} />
                              {index === 1 &&
                                  <>
                                  <p>{animal.comment}</p>
                                  <hr/>
                                  <p><b>{animal.petName} - {animal.age} {animal.age === 1 ? "año" : "años"}</b></p>
                                  </>
                              }
                          </div>
                      ))
                          :
                          <p>No hay animales para mostrar</p>
                      :
                      <p>Cargando animales</p>
                  }
                </div>
                <button onClick={handleNext} className="carousel-arrow">
                    {">"}
                </button>
            </div>
        </div>
    );
}