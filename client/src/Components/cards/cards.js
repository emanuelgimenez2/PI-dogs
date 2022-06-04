import React from "react";
import Card from "../card/card";
import "./cards.scss";


export default function Cards({ name, temperament, weight, height, id }) {
  const temp = [1, 2, 3, 4, 5, 6, 7, 8];
  
  
 
  return (
    <div className="cards-container">
      {temp.map((dog, index) => (
        <Card
          key={index}
          id={"dog.id"}
          name={"dog.name"}
          temperament={"dog.temperament"}
          image={dog.image}
          weight={"dog.weight"}
          height={"dog.height"}
        />
      ))}
    </div>
  );
}
