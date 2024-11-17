import React, { useState } from "react";
import "./AnimalesHogar.css";

const animals = [
    {
      name: "Tostada",
      age: "0",
      description:
        "Tostada es un cachorro juguetón y lleno de energía que busca un hogar lleno de amor.",
      image: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/15665/production/_107435678_perro1.jpg.webp",
    },
    {
      name: "Ginger",
      age: "5",
      description:
        "Ginger es una gata cariñosa que disfruta de largas siestas al sol.",
      image: "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
    },
    {
      name: "Max",
      age: "3",
      description:
        "Max es un perro amigable que adora jugar al aire libre.",
      image: "https://www.ngenespanol.com/wp-content/uploads/2022/08/estudio-ayuda-a-conocer-origen-de-los-perros.jpg",
    },
  ];
  

export default function AnimalesHogar () {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % animals.length);
    };

    const handlePrevious = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + animals.length) % animals.length
        );
    };

    const getVisibleAnimals = () => {
        const prevIndex =
          (currentIndex - 1 + animals.length) % animals.length; // Índice del animal anterior
        const nextIndex = (currentIndex + 1) % animals.length; // Índice del animal siguiente
    
        return [animals[prevIndex], animals[currentIndex], animals[nextIndex]];
    };
    
    const visibleAnimals = getVisibleAnimals();

    return(
        <div className="animal-carousel">
            <h2>Estos animales buscan un hogar</h2>
            <div className="carousel-content">
                <button onClick={handlePrevious} className="carousel-arrow">
                    {"<"}
                </button>
                <div className="carousel-items">
                {visibleAnimals.map((animal, index) => (
                    <div
                    key={index}
                    className={`carousel-item ${
                        index === 1 ? "focused-item" : "side-item"
                    }`}
                    >
                        <img src={animal.image} alt={animal.name} />
                        {index === 1 &&
                            <>
                            <p>{animal.description}</p>
                            <hr/>
                            <p><b>{animal.name} - {animal.age} {animal.age === 1 ? "año" : "años"}</b></p>
                            </>
                        }
                    </div>
                ))}
                </div>
                <button onClick={handleNext} className="carousel-arrow">
                    {">"}
                </button>
            </div>
        </div>
    );
}