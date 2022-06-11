import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../actions";
import Card from "../card/card";
// import Pagination from "../pagination/pagination";
import "./cards.scss";
import "./paginationprueba.scss";

export default function Cards() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getDogs());
  }, []);
  const pageNumbers = [];
  const dogsOnPage = 9;
  const state = useSelector((state) => state.dogs);
  const initialState = state &&  state.slice(state[0], state[9]);
  const [dataForPage, setDataForPage] = React.useState(initialState);
  const [page, setPage] = React.useState(false);
  

  console.log("==page=>", page);

  console.log('===dtaforpage==>',dataForPage)

  const totalPages = Math.ceil(state.length / dogsOnPage);

  for (let i = 0; i < totalPages; i++) {
    pageNumbers.push(i + 1);
  }

  var statetenuevp = state && state.slice(pageNumbers[0], 9);

  const handleChangePage = (value) => {
    setDataForPage(value);
  };



  if (!statetenuevp) return <p>Loading</p>;

  return (
    <div>
      <div className="cards-container">
        {statetenuevp?.map((dog, index) => (
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
      <div className="pagination">
        {/* <Pagination handleChangePage={handleChangePage}  setDataForPage={ setDataForPage}/> */}
        <ul className="container-pagination">
          {totalPages.map((n, index) => (
            <button
              className="button-pagination"
              key={n}
              onClick={() => setPage(index)}
            >
              {n}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
}
