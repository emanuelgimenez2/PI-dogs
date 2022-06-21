/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../card/card";
import Pagination from "../pagination/pagination";
import loader from "../../assets/gifloader.gif";

import "./cards.scss";

export default function Cards() {
  const initialData = useSelector((state) => state.dogs);
  const orderByData = useSelector((state) => state.dogsByName);
  const orderByWeigth = useSelector((state) => state.dogsByWeigth);
  const orderByCreated = useSelector((state) => state.dogsByCreated);
  const orderByTemperament = useSelector((state) => state.dogsByTemperament);

  /********************Paginado****************************/
  const dogsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDog = initialData.slice(indexOfFirstDog, indexOfLastDog);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (currentDog.length === 0) {
    return (
      <div className="loader">
        <img src={loader} alt="loader" />
      </div>
    );
  }
 /*  const idn = currentDog.map((item) => {
    const idt=item.id
    if (idt === "number") {
      return item.id;
    }
    else
    idt.slice(0, -3);
  }
  );
  console.log(idn);
 */

  return (
    <div>
      <div>
        <Pagination
          dogsPerPage={dogsPerPage}
          allDogs={initialData.length - 1}
          page={pagination}
        />
      </div>
      <div className="container-cards">
        {currentDog.map((dog, index) => {
          // let temperamentArray = dog?.temperament ? dog?.temperament : [];
          // let temperamentString = dog?.temperament.length > 0 ? dog?.temperament.split(",") : 'eppe';

          // let dataTemperament = Array.isArray(dog?.temperament)
          //   ? temperamentArray
          //   : temperamentString;

          return (
            <Card
              height={dog?.height}
              weight={dog?.weight}
              id={dog?.id}
              image={dog.image}
              name={dog?.name}
              // temperament={dataTemperament}
              key={dog?.id}
            />
          );
        })}
      </div>

      <div>
        {/* <Pagination
          dogsPerPage={dogsPerPage}
          allDogs={initialData.length - 1}
          page={pagination}
        /> */}
      </div>
    </div>
  );
}
