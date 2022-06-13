/* eslint-disable react-hooks/exhaustive-deps */
import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../actions";
import Card from "../card/card";


export default function Cards() {
  const dispatch = useDispatch();
  const initialData = useSelector((state) => state.dogs);
  
  const numberofInitialCards =  initialData.length;
  
  const numberOfCards = 9;
  const numberOfPages = Math.ceil(numberofInitialCards / numberOfCards);
  const numberOfPagesPagination = [];
 
  const [dataForPage, setDataForPage] = useState(false);
  const [page, setPage] = useState(0);

  for (let index = 0; index < numberOfPages; index++) {
    numberOfPagesPagination.push(index + 1);
  }

  

  React.useEffect(() => {
    dispatch(getDogs());
  }, []);

  React.useEffect(() => {
    setDataForPage(initialData.slice(0, 9));
  }, [initialData]);
  
  React.useEffect(() => {
    const cutInitialData = initialData.slice(
      page === 0 ? page : page * 9 - 9,
      page === 0 ? 9 : page * 9
    );
    setDataForPage(cutInitialData);
  }, [page]);

  

  if (!dataForPage || numberofInitialCards === 0) {
    <div className="loading">
      <p
        className="
    loading-p"
      >
        Loading
      </p>
    </div>;
  }

  return (
    <div>
      <div>
        {dataForPage &&
          dataForPage?.map((dog, index) => (
            <Card
              height={dog?.height}
              weight={dog?.weight}
              id={dog?.id}
              image={dog?.image}
              name={dog?.name}
              temperament={dog?.temperament}
              key={dog?.id}
            />
          ))}
      </div>
      <div>
        <ul className="container-pagination">
          {numberOfPagesPagination.map((n, index) => (
            <button
              className="button-pagination"
              key={index}
              onClick={() => setPage(n)}
            >
              {n}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
}
