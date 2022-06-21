/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../card/card";
import Pagination from "../pagination/pagination";

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

  // if (!currentDog) {
  //   return (
  //     // <div>
  //     //   <img src="https://loading.io/asset/580931" />
  //     // </div>
  //   );
  // }

   console.log('=============initialdata================>',initialData)
//  console.log('=============data================>',currentDog)
//  console.log('=============dcurrentpage================>',currentPage)


  if(currentDog.length === 0){
    return(
      <div style={{background:'red',minHeight:'100vh'}}>
        <p>loading</p>
      </div>
    )
  }

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
        { currentDog.map((dog, index) => {
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
