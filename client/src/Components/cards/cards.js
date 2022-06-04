import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../actions";
// import { useSelector } from "react-redux";
import Card from "../card/card";
import "./cards.scss";

export default function Cards({ name, temperament, weight, height, id }) {
  const temp = [1, 2, 3, 4, 5, 6, 7, 8];
  const dispatch = useDispatch();
  const state = useSelector((state) => state.dogs);
  React.useEffect(() => {
    dispatch(getDogs());
  }, []);

  if (!state) <p>Loading...</p>;
  if (state) {
    return (
      <div className="cards-container">
        {state.map((dog, index) => (
          <Card
            key={index}
            id={dog.id}
            name={dog.name}
            temperament={dog.temperament}
            image={dog.image}
            weight={dog.weight}
            height={dog.height}
          />
        ))}
      </div>
    );
  }
}
