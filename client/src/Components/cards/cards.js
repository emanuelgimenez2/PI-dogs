/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../actions";
import Card from "../card/card";
import Pagination from "../pagination/pagination";
import Loader from "../loader/loader";

import "./cards.scss";

export default function Cards() {
  const dispatch = useDispatch();
  const initialData = useSelector((state) => state.dogs);

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8); //Cantidad de personajes por pagina
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDog = initialData.slice(indexOfFirstDog, indexOfLastDog);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs());
  }, []);

  if (!currentDog) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <div className="container-cards">
        {currentDog.map((dog, index) => (
          <Card
            height={dog?.height}
            weight={dog?.weight}
            id={dog?.id}
            image={dog?.image}
            name={dog?.name}
            // temperament={ dog.temperament ? dog.temperament : "No definido"}
            key={dog?.id}
          />
        ))}
      </div>

      <div>
        <Pagination
          dogsPerPage={dogsPerPage}
          allDogs={initialData.length - 1}
          page={pagination}
        />
      </div>
    </div>
  );
}
